import { ProductRepository } from "../repository/ProductRepository"
import { ProductStreamMapper } from "../mapper/ProductStreamMapper"
import { Transform } from "stream";

export class ProductStreamService{
    constructor(
        readonly productRepository: ProductRepository,
        readonly productStreamMapper: ProductStreamMapper,
    ) {
    }

    async getProductStream(customerId: number): Promise<Transform> {
        const stream = await this.productRepository.getProductStreamByCustomer(customerId);
        return stream.pipe(this.productStreamMapper.toEntity())
    }
}
