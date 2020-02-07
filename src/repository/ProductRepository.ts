import { Product } from "../entity/Product"
import { Repository, Connection } from "typeorm"

export class ProductRepository {
    private repository: Repository<Product>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Product)
    }

    async save(product: Product): Promise<Product> {
        return await this.repository.save(product)
    }

    async findById(id: number): Promise<Product | undefined>{
        return await this.repository.findOne(id)
    }
}