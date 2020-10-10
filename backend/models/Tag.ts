import {BelongsToMany, Column, Scopes, HasMany, Model, Table} from 'sequelize-typescript';
import {SaleTag} from './SaleTag';

@Scopes(() => ({
  SaleTag: {
    include: [
      {
        model: SaleTag,
        through: {attributes: []},
      },
    ],
  }
}))

@Table
export class Tag extends Model<Tag> {

  @Column
  name!: string;

  @HasMany(()=> SaleTag)
  saletags!: SaleTag[];
}
