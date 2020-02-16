import { Source } from "../entity/Source"
import { Repository, Connection, In } from "typeorm"
import { SourceType } from "../entity/enums/SourceType"

export class SourceRepository {
    private repository: Repository<Source>

    constructor(connection: Connection) {
        this.repository = connection.getRepository(Source)
    }

    async save(source: Source): Promise<Source> {
        return await this.repository.save(source)
    }

    async saveAll(sources: Source[]) {
        await this.repository.insert(sources)
    }

    async findById(id: number): Promise<Source | undefined> {
        return await this.repository.findOne(id)
    }

    async findByTypes(types: SourceType[]): Promise<Source[] | undefined> {
        return await this.repository.find({
            where: {
                tyep: In(types)
            }
        })
    }
}