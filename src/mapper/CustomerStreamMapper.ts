import { Customer } from "../entity/Customer";
import { StreamMapper } from "./StreamMapper";

export class CustomerStreamMapper extends StreamMapper<Customer, any> {  
    protected map(dto: any): Customer {
        return new Customer()
            .setId(dto.customer_id)
            .setUsername(dto.customer_username)
            .setCreatedAt(dto.customer_createdAt)
            .setUpdatedAt(dto.customer_updatedAt)
    }
}