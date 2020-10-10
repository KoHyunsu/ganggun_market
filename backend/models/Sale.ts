import {Model, Column, Table, HasOne, HasMany, ForeignKey, Scopes, PrimaryKey} from "sequelize-typescript";
import {SaleTag} from "./SaleTag";
import {Trade} from "./Trade";

@Scopes(() => ({
  SaleTag: {
    include: [
      {
        model: SaleTag,
        through: {attributes: []},
      },
    ],
  },
  Trade: {
    include: [
      {
        model: Trade,
        through: {attributes: []},
      },
    ],
  }
}))

@Table
export class Sale extends Model<Sale> {

  @PrimaryKey
  @Column
  id!: number;

  @HasOne(() => Trade)
  trade?: Trade[];

  //판매자 ID
  @Column
  sellerId!: number;

  //상품명
  @Column
  item!: string;

  //가격
  @Column
  price!: number;

  //사용기간
  @Column
  period!: Date;

  //거래게시일
  @Column
  sDate!: Date;

  //거래마감일   
  @Column
  fDate!: Date;

  @HasMany(()=> SaleTag)
  saletags!: SaleTag[];

}
