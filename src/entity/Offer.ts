import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { Product } from "./Product";
import { Source } from "./Source";
import { User } from "./User";

@Entity({ name: "offers" })
export class Offer {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: "integer", default: null })
    private order: number

    @OneToOne(type => Product)
    @JoinColumn()
    private product: Product

    @OneToOne(type => Source)
    @JoinColumn()
    private source: Source

    @OneToOne(type => User)
    @JoinColumn()
    private user: User

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

    setId(id: number): Offer {
        this.id = id
        return this
    }

    getOrder(): number {
        return this.order
    }

    setOrder(order: number): Offer {
        this.order = order
        return this
    }

    getProduct(): Product {
        return this.product
    }

    setProduct(product: Product): Offer {
        this.product = product
        return this
    }

    getSource(): Source {
        return this.source
    }

    setSource(source: Source): Offer {
        this.source = source
        return this
    }

    getUser(): User {
        return this.user
    }

    setUser(user: User): Offer {
        this.user = user
        return this
    }

    getCreatedAt(): Date {
        return this.createdAt
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }
}