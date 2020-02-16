import { CustomerRepository } from "../repository/CustomerRepository";
import { CustomerStreamMapper } from "../mapper/CustomerStreamMapper";
import { Transform } from "stream";

export class CustomerStreamService {
    constructor(
        readonly customerRepository: CustomerRepository,
        readonly customerStreamMapper: CustomerStreamMapper,
    ) { }

    async getCustomerStream() : Promise<Transform> {
        const stream = await this.customerRepository.getCustomerStream()
        return stream.pipe(this.customerStreamMapper.toEntity())
    }
}
