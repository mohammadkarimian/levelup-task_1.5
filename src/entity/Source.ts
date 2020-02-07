import { Entity, Column, PrimaryColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { SourceType } from "./enums/SourceType";

@Entity({ name: "sources" })
export class Source {

    @PrimaryColumn()
    private id: number

    @Column({
        type: "varchar",
        enum: SourceType,
        default: SourceType.FREE
    })
    private type: SourceType

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

    setId(id: number): Source {
        this.id = id
        return this
    }

    getType(): SourceType {
        return this.type
    }

    setType(type: SourceType): Source {
        this.type = type
        return this
    }

    getCreatedAt(): Date {
        return this.createdAt
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }
}

