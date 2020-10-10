import {Model, Column, Table, Scopes, PrimaryKey, ForeignKey} from "sequelize-typescript";
import {Trade} from "./Trade";

@Scopes(() => ({
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
export class Review extends Model<Review> {

  @PrimaryKey
  @Column
  id!: number;

  // 후기  
  @Column
  text!: string;

  // 직거래 만족도 0-5점
  @Column
  meeting!: number;

  // 품질 만족도 0-5점
  @Column
  quality!: number;

  @ForeignKey(() => Trade)
  @Column
  tradeId!: number;
}
