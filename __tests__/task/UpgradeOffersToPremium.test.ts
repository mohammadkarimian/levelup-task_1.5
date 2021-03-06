import { createConnection, Connection, getConnectionOptions } from "typeorm";
import { UpgradeOffersToPremiumTask } from "../../src/task/UpgradeOffersToPremiumTask";
import { ProductRepository } from "../../src/repository/ProductRepository";
import { OfferRepository } from "../../src/repository/OfferRepository";
import { SourceRepository } from "../../src/repository/SourceRepository";
import { CustomerRepository } from "../../src/repository/CustomerRepository";
import { Source } from "../../src/entity/Source";
import { SourceType } from "../../src/entity/enums/SourceType";
import { UserRepository } from "../../src/repository/UserRepository";
import { User } from "../../src/entity/User";
import { Customer } from "../../src/entity/Customer";
import { Product } from "../../src/entity/Product";
import { Offer } from "../../src/entity/Offer";
import { CustomerStreamService } from "../../src/services/CustomerStreamService";
import { CustomerStreamMapper } from "../../src/mapper/CustomerStreamMapper";
import { ProductStreamService } from "../../src/services/ProductStreamService";
import { ProductStreamMapper } from "../../src/mapper/ProductStreamMapper";
import { OfferStreamService } from "../../src/services/OfferStreamService";
import { OfferStreamMapper } from "../../src/mapper/OfferStreamMapper";

describe("Test Upgrade Offers to Premium Version", () => {
    let task: UpgradeOffersToPremiumTask;
    let connection: Connection[] = [];

    beforeAll(async () => {
        const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

        connection[0] = await createConnection({
            ...connectionOptions,
            name: "default0"
        });

        connection[1] = await createConnection({
            ...connectionOptions,
            name: "default1"
        });

        await connection[0].synchronize(true);

        const productRepository = new ProductRepository(connection[0]);
        const offerRepository = new OfferRepository(connection[1]);
        const sourceRepository = new SourceRepository(connection[0]);
        const customerRepository = new CustomerRepository(connection[0]);
        const userRepository = new UserRepository(connection[0]);

        const freeSource = await sourceRepository.save(
            new Source().setId(1).setType(SourceType.FREE)
        );

        const premiumSource = await sourceRepository.save(
            new Source().setId(2).setType(SourceType.PREMIUM)
        );

        const user = await userRepository.save(
            new User().setUsername("Ali")
        );

        const customer = await customerRepository.save(
            new Customer().setUsername("Mohmmad")
        );

        const product1 = await productRepository.save(
            new Product().setCustomer(customer).setName("p1")
        );

        const product2 = await productRepository.save(
            new Product().setCustomer(customer).setName("p2")
        );

        await offerRepository.saveAll([
            new Offer().setProduct(product1).setSource(freeSource).setUser(user),
            new Offer().setProduct(product1).setSource(premiumSource).setUser(user),
            new Offer().setProduct(product1).setSource(freeSource).setUser(user),
            new Offer().setProduct(product2).setSource(freeSource).setUser(user),
            new Offer().setProduct(product2).setSource(freeSource).setUser(user),
            new Offer().setProduct(product2).setSource(freeSource).setUser(user),
            new Offer().setProduct(product2).setSource(premiumSource).setUser(user),
        ]);

        task = new UpgradeOffersToPremiumTask(
            new CustomerStreamService(
                customerRepository,
                new CustomerStreamMapper()
            ),
            new ProductStreamService(
                productRepository,
                new ProductStreamMapper()
            ),
            new OfferStreamService(
                offerRepository,
                new OfferStreamMapper()
            )
        );
    });

    afterAll(async () => {
        await connection[0].close();
        await connection[1].close();
    });

    it("upgrades offers", async () => {
        await task.run();
    });
});
