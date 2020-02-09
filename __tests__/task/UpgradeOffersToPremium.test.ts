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

describe("Test Upgrade Offers to Premium Version", () => {
    let task: UpgradeOffersToPremiumTask;
    let connection: Connection;

    beforeAll(async () => {
        const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

        connection = await createConnection({
            ...connectionOptions,
            name: "default"
        });

        await connection.synchronize(true);

        const productRepository = new ProductRepository(connection);
        const offerRepository = new OfferRepository(connection);
        const sourceRepository = new SourceRepository(connection);
        const customerRepository = new CustomerRepository(connection);
        const userRepository = new UserRepository(connection);

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
            productRepository,
            offerRepository,
            sourceRepository,
            customerRepository
        );
    });

    afterAll(async () => {
        await connection.close();
    });
    
    it("upgrades offers", async () => {
        await task.upgrade();
    });
});
