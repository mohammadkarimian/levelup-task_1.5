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
}

