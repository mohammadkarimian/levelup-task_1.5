import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: "text", length: 32 })
    private username: string

    @Column({ type: "date" })
    private createdAt: Date

    @Column({ type: "date", default: null })
    private updatedAt: Date

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

    setCreatedAt(createdAt: Date): Customer {
        this.createdAt = createdAt
        return this
    }

    getUpdatedAt(): Date {
        return this.updatedAt
    }

    setUpdatedAt(updatedAt: Date): Customer {
        this.updatedAt = updatedAt
        return this
    }
}