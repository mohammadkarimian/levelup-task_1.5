import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity({ name: "customers" })
export class Customer {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: "varchar", length: 32 })
    private username: string

    @Column()
    private createdAt: Date

    @Column({ default: null })
    private updatedAt: Date

    @BeforeInsert()
    beforeInsert() {
        this.updatedAt = this.createdAt = new Date
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedAt = new Date
    }

    getId(): number {
        return this.id
    }

    setId(id: number): Customer {
        this.id = id
        return this
    }

    getUsername(): string {
        return this.username
    }

    setUsername(username: string): Customer {
        this.username = username
        return this
    }

    getCreatedAt(): Date {
        return this.createdAt
    }

    getUpdatedAt(): Date {
        return this.updatedAt
    }
}