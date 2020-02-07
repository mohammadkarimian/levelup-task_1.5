import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Customer {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 32})
    username: string

    @Column("date")
    createdAt: Date

    @Column("date")
    updatedAt: Date
}