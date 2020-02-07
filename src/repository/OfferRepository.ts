import { Offer } from "../entity/Offer"
import { Connection, Repository } from "typeorm"

export class OfferRepository {
    private repository: Repository<Offer>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Offer)
    }

    async save(offer: Offer): Promise<Offer> {
        return await this.repository.save(offer)
    }

    async findById(id: number): Promise<Offer | undefined>{
        return await this.repository.findOne(id)
    }
}