import through = require("through");
import { CustomerStreamService } from "../services/CustomerStreamService";
import { ProductStreamService } from "../services/ProductStreamService";
import { OfferStreamService } from "../services/OfferStreamService";
export class UpgradeOffersToPremiumTask {
	constructor(
		readonly customerStreamService: CustomerStreamService,
		readonly productStreamService: ProductStreamService,
		readonly offerStreamService: OfferStreamService
	) { }

	async run() {
		const customerStream = await this.customerStreamService.getCustomerStream()
		return await new Promise(resolve => {
			customerStream.pipe(through(async customer => {
				const productStream = await this.productStreamService.getProductStream(customer.getId())
				productStream.pipe(through(async product => {
					const offerStream = await this.offerStreamService.getOfferStream(product.getId())
					offerStream.pipe(through(async offer => {
						console.log(offer)
					}))
				}))
			})).on('end', resolve)
		});
	}
}
