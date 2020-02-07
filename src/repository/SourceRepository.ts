import { Source } from "../entity/Source"
import { Repository, Connection } from "typeorm"

export class SourceRepository {
    private repository: Repository<Source>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Source)
    }

    async save(source: Source): Promise<Source> {
        return await this.repository.save(source)
    }

    async findById(id: number): Promise<Source | undefined>{
        return await this.repository.findOne(id)
    }
}