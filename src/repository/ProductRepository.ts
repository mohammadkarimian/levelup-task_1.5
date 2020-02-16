import { Product } from "../entity/Product"
import { Repository, Connection } from "typeorm"
import { ReadStream } from "typeorm/platform/PlatformTools"

export class ProductRepository {
    private repository: Repository<Product>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Product)
    }

    async save(product: Product): Promise<Product> {
        return await this.repository.save(product)
    }

    async saveAll(products: Product[]) {
        await this.repository.insert(products)
    }

    async findById(id: number): Promise<Product | undefined>{
        return await this.repository.findOne(id)
    }

    async getProductStreamByCustomer(customerId: number): Promise<ReadStream> {
        return await this.repository
            .createQueryBuilder("product")
            .where("\"customerId\" = :id", {id: customerId})
			.stream();
    }
}