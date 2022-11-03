import { Products } from '../../entities/typeorm/products';

import { EntitySchema } from 'typeorm';

export const ProductSchema = new EntitySchema<Products>({
  name: 'products',
  target: Products,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    date_created: {
      type: Date,
    },
    date_updated: {
      type: Date,
    }
  },
  relations: {
    product_prices: {
      type: 'one-to-many',
      target: 'prices', // the name of the PhotoSchema
    },
  },
});