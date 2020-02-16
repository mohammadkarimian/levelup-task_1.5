import { Transform } from "stream";
import { OfferRepository } from "../repository/OfferRepository";
import { OfferStreamMapper } from "../mapper/OfferStreamMapper";

export class OfferStreamService{
    constructor(
        readonly offerRepository: OfferRepository,
        readonly offerStreamMapper: OfferStreamMapper,
    ) {
    }

    async getOfferStream(productId: number): Promise<Transform> {
        const stream = await this.offerRepository.getOfferStreamByProduct(productId);
        return stream.pipe(this.offerStreamMapper.toEntity())
    }
}
