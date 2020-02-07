import { Product } from "../entity/Product"
import { Repository, Connection } from "typeorm"

export class ProductRepository {
    private repository: Repository<Product>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Product)
    }
}