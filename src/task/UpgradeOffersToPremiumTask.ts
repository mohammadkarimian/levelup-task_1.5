import through = require("through");
import { CustomerStreamService } from "../services/CustomerStreamService";
import { ProductStreamService } from "../services/ProductStreamService";
export class UpgradeOffersToPremiumTask {
	constructor(
		readonly customerStreamService: CustomerStreamService,
		readonly productStreamService: ProductStreamService
	) { }

	async run() {
		const customerStream = await this.customerStreamService.getCustomerStream()
		return await new Promise(resolve => {
			customerStream.pipe(through(async customer => {
				const productStream = await this.productStreamService.getProductStream(customer.getId())
				productStream.pipe(through(async product => {
					console.log(product)
				}))
			})).on('end', resolve)
		});
	}
}
