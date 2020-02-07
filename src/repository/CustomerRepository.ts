import { Customer } from "../entity/Customer"
import { Repository, Connection } from "typeorm"

export class CustomerRepository{
    private repository: Repository<Customer>

    constructor(connection: Connection) { 
        this.repository = connection.getRepository(Customer)
    }
}