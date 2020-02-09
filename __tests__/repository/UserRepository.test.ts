import { createConnection, getConnectionOptions, Connection } from 'typeorm';
import { User } from '../../src/entity/User';
import { UserRepository } from '../../src/repository/UserRepository';

describe('Test User Repository', () => {
    let userRepository: UserRepository;
    let connection: Connection

    beforeAll(async () => {
        const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
        connection = await createConnection({ ...connectionOptions, name: "default" });
        
        userRepository = new UserRepository(connection)
    });

    afterAll(async () => {
        await connection.close()
    })

    xit('saves a user', async () => {
        const user = new User()
            .setUsername("mohammad")

        const savedUser = await userRepository.save(user)

        return expect(savedUser.getId()).toBeDefined()
    });
});