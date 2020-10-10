import {Model, Column, Table, BelongsTo, HasOne, ForeignKey, Scopes, PrimaryKey, CreatedAt, UpdatedAt} from "sequelize-typescript";
import {Review} from "./Review";
import {Sale} from "./Sale";

@Scopes(() => ({
  Sale: {
    include: [
      {
        model: Sale,
        through: {attributes: []},
      },
    ],
  },
  Review: {
    include: [
      {
        model: Review,
        through: {attributes: []},
      },
    ],
  }
}))

@Table
export class Trade extends Model<Trade> {

  @PrimaryKey
  @Column
  id!: number;

  @ForeignKey(() => Sale)
  @Column
  saleId!: number;
 
  @BelongsTo(() => Sale)
  sale!: Sale;

  @ForeignKey(() => Review)
  @Column
  reveiwId!: number;
 
  @BelongsTo(() => Review)
  review!: Review;

  //구매자 ID
  @Column
  buyerId!: number;

  //거래일
  @Column
  tDate!: Date;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
