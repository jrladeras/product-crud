import { Prices } from './prices';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Products {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({unique: true})
    name: string;
  
    @Column({nullable: true})
    description: string;
  
    @Column({ default: true })
    status: boolean;

    @Column({nullable: true})
    type: string;

    @Column()
    date_created: Date;

    @Column({ default: null })
    date_updated: Date;

    @OneToMany(() => Prices, (price) => price.product_id)
    @JoinTable()
    product_prices: Prices[]
}
