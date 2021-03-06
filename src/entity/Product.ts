import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, BeforeInsert, BeforeUpdate, ManyToOne } from "typeorm";
import { Customer } from "./Customer";

@Entity({ name: "products" })
export class Product {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: "varchar", length: 32 })
    private name: string

    @ManyToOne(type => Customer)
    @JoinColumn()
    private customer: Customer

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

    setCreatedAt(createdAt: Date): Product {
        this.createdAt = createdAt
        return this
    }

    getCreatedAt(): Date {
        return this.createdAt
    }

    setUpdatedAt(updatedAt: Date): Product {
        this.updatedAt = updatedAt
        return this
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }
}