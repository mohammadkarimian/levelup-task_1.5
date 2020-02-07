import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: "text", length: 32 })
    private username: string

    @Column({type: "date"})
    private createdAt: Date

    @Column({ type: "date", default: null })
    private updatedAt: Date

    getId(): number {
        return this.id
    }

    setId(id: number): User {
        this.id = id
        return this
    }

    getUsername(): string {
        return this.username
    }

    setUsername(username: string): User {
        this.username = username
        return this
    }

    getCreatedAt(): Date {
        return this.createdAt
    }

    setCreatedAt(createdAt: Date): User {
        this.createdAt = createdAt
        return this
    }

    getUpdatedAt(): Date {
        return this.updatedAt
    }

    setUpdatedAt(updatedAt: Date): User {
        this.updatedAt = updatedAt
        return this
    }
}