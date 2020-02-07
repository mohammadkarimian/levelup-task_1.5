import { Entity, Column, PrimaryColumn } from "typeorm";
import { SourceType } from "./enums/SourceType";

@Entity()
export class Source {

    @PrimaryColumn()
    private id: number

    @Column({
        type: "string",
        enum: SourceType,
        default: SourceType.FREE
    })
    private type: SourceType

    @Column({ type: "date" })
    private createdAt: Date

    @Column({ type: "date", default: null })
    private updatedAt: Date

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

    setCreatedAt(createdAt: Date): Source {
        this.createdAt = createdAt
        return this
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }

    setUpdatedAt(updatedAt: Date): Source {
        this.updatedAt = updatedAt
        return this
    }
}

