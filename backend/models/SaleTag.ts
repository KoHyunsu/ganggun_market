import {Model, Column, Table, Scopes, BelongsTo, ForeignKey, PrimaryKey} from "sequelize-typescript";
import {Tag} from "./Tag";
import {Sale} from "./Sale";

@Scopes(() => ({
  Tag: {
    include: [
      {
        model: Tag,
        through: {attributes: []},
      },
    ],
  },
  Sale: {
    include: [
      {
        model: Sale,
        through: {attributes: []},
      },
    ],
  }
}))

@Table
export class SaleTag extends Model<SaleTag> {

  @PrimaryKey
  @Column
  id!: number;

  @ForeignKey(() => Sale)
  @Column
  saleId!: number;

  @BelongsTo(() => Sale)
  sale!: Sale;

  @ForeignKey(() => Tag)
  @Column
  tagId!: number;

  @BelongsTo(() => Tag)
  tag!: Tag;
}