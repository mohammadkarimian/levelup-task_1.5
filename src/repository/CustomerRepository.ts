import { Customer } from "../entity/Customer"
import { Repository, Connection } from "typeorm"

export class CustomerRepository {
    private repository: Repository<Customer>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Customer)
    }

    async save(customer: Customer): Promise<Customer> {
        return await this.repository.save(customer)
    }

    async saveAll(customers: Customer[]) {
        await this.repository.insert(customers)
    }

    async findById(id: number): Promise<Customer | undefined>{
        return await this.repository.findOne(id)
    }
}