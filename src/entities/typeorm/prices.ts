import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Prices {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    description: string;

    @Column()
    product_id: number;
  
    @Column({unique: true})
    type: string;
  
    @Column()
    price: number;

    @Column()
    compare_price: number;

    @Column({nullable: true, default: 0 })
    original_price: number;

    @Column({nullable: true, default: 0 })
    discount_value: number;

    @Column({nullable: true, default: 'none' })
    discount_type: string;
  
    @Column({ default: true })
    status: boolean;

    @Column()
    date_created: Date;

    @Column({ default: null })
    date_updated: Date;
}
