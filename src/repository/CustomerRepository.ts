import { Customer } from "../entity/Customer";
import { Repository, Connection } from "typeorm";
import { ReadStream } from "typeorm/platform/PlatformTools";

export class CustomerRepository {
	private repository: Repository<Customer>;

	constructor(
		readonly connection: Connection,
	) {
		this.repository = connection.getRepository(Customer);
	}

	async save(customer: Customer): Promise<Customer> {
		return await this.repository.save(customer);
	}

	async saveAll(customers: Customer[]) {
		await this.repository.insert(customers);
	}

	async findById(id: number): Promise<Customer | undefined> {
		return await this.repository.findOne(id);
	}

	async getCustomerStream(): Promise<ReadStream> {
		return await this.repository
			.createQueryBuilder("customer")
			.stream();
	}
}
