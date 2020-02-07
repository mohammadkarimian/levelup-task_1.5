import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Customer } from "./Customer";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: "text", length: 32 })
    private name: string

    @OneToOne(type => Customer)
    @JoinColumn()
    private customer: Customer

    @Column({ type: "date" })
    private createdAt: Date

    @Column({ type: "date", default: null })
    private updatedAt: Date

    getId(): number {
        return this.id
    }

    setId(id: number): Product {
        this.id = id
        return this
    }

    getName(): string {
        return this.name
    }

    setName(name: string): Product {
        this.name = name
        return this
    }

    getCustomer(): Customer {
        return this.customer
    }

    setCustomer(customer: Customer): Product {
        this.customer = customer
        return this
    }

    getCreatedAt(): Date {
        return this.createdAt
    }

    setCreatedAt(createdAt: Date): Product {
        this.createdAt = createdAt
        return this
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }

    setUpdatedAt(updatedAt: Date): Product {
        this.updatedAt = updatedAt
        return this
    }
}