import { StreamMapper } from "./StreamMapper";
import { Product } from "../entity/Product";
import { Customer } from "../entity/Customer";

export class ProductStreamMapper extends StreamMapper<Product, any> {  
    protected map(dto: any): Product {
        return new Product()
            .setId(dto.product_id)
            .setName(dto.product_name)
            .setCustomer(new Customer().setId(dto.product_customerId))
            .setCreatedAt(dto.product_createdAt)
            .setUpdatedAt(dto.product_updatedAt)
    }
}