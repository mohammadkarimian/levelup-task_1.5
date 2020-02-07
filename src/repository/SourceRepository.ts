import { Source } from "../entity/Source"
import { Repository, Connection } from "typeorm"

export class SourceRepository {
    private repository: Repository<Source>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Source)
    }
}