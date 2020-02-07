import { Offer } from "../entity/Offer"
import { Connection, Repository } from "typeorm"

export class OfferRepository {
    private repository: Repository<Offer>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Offer)
    }
}