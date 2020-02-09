import { ProductRepository } from "../repository/ProductRepository";
import { OfferRepository } from "../repository/OfferRepository";
import { SourceRepository } from "../repository/SourceRepository";
import { CustomerRepository } from "../repository/CustomerRepository";

export class UpgradeOffersToPremiumTask {
    constructor(
        readonly productRepository: ProductRepository,
        readonly offerRepository: OfferRepository,
        readonly sourceRepository: SourceRepository,
        readonly customerRepository: CustomerRepository
    ) { }

    async upgrade() {
    }
}
