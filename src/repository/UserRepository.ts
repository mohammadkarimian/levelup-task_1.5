import { Connection, Repository } from "typeorm";
import { User } from "../entity/User";

export class UserRepository {
    private repository: Repository<User>

    constructor(connection: Connection) { 
        this.repository = connection.getRepository(User)
    }

    async save(user: User): Promise<User> {
        return await this.repository.save(user)
    }

    async saveAll(users: User[]) {
        await this.repository.insert(users)
    }

    async findById(id: number): Promise<User | undefined>{
        return await this.repository.findOne(id)
    }
}