import { Offer } from "../entity/Offer"
import { Connection, Repository } from "typeorm"
import { ReadStream } from "typeorm/platform/PlatformTools"

export class OfferRepository {
    private repository: Repository<Offer>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Offer)
    }

    async save(offer: Offer): Promise<Offer> {
        return await this.repository.save(offer)
    }

    async saveAll(offers: Offer[]) {
        await this.repository.insert(offers)
    }

    async findById(id: number): Promise<Offer | undefined>{
        return await this.repository.findOne(id)
    }

    async getOfferStreamByProduct(productId: number): Promise<ReadStream> {
        return await this.repository
            .createQueryBuilder("offer")
            .where("\"productId\" = :id", {id: productId})
			.stream();
    }
}