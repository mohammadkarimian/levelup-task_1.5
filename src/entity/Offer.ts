import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { Product } from "./Product";
import { Source } from "./Source";

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ type: "number", default: null })
    private order: number

    @OneToOne(type => Product)
    @JoinColumn()
    private product: Product

    @OneToOne(type => Source)
    @JoinColumn()
    private source: Source

    @Column("date")
    private createdAt: Date

    @Column({ type: "date", default: null })
    private updatedAt: Date


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

    getCreatedAt(): Date {
        return this.createdAt
    }

    setCreatedAt(createdAt: Date): Offer {
        this.createdAt = createdAt
        return this
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }

    setUpdatedAt(updatedAt: Date): Offer {
        this.updatedAt = updatedAt
        return this
    }
}