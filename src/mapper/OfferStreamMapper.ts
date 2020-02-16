import { StreamMapper } from "./StreamMapper";
import { Offer } from "../entity/Offer";
import { Product } from "../entity/Product";
import { Source } from "../entity/Source";
import { User } from "../entity/User";

export class OfferStreamMapper extends StreamMapper<Offer, any> {  
    protected map(dto: any): Offer {
        return new Offer()
            .setId(dto.offer_id)
            .setOrder(dto.offer_name)
            .setProduct(new Product().setId(dto.offer_productId))
            .setSource(new Source().setId(dto.offer_sourceId))
            .setUser(new User().setId(dto.offer_userId))
            .setCreatedAt(dto.offer_createdAt)
            .setUpdatedAt(dto.offer_updatedAt)
    }
}