import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Product {
    @PrimaryGeneratedColumn()
    id:number | undefined 

    @Column({nullable:false})
    name!: string

    @Column()
    description!:string

    @Column()
    price!:number

}

export default Product;