import {Model, Column, Table, BelongsTo, PrimaryKey, ForeignKey, Scopes} from "sequelize-typescript";
import {User} from "./User";

// findAll 등을 할 때 where: 에 들어가는 범위조건을 @scopes에서 미리 지정.
@Scopes(() => ({
  User: {
    include: [
      {
        model: User,
        through: {attributes: []},
      },
    ],
  }
}))

@Table
export class Affiliation extends Model<Affiliation> {
  
  @PrimaryKey
  @Column
  id!: number;

  // 사단
  @Column
  division?: string;

  // 대대
  @Column
  battalion?: string;

  // 중대
  @Column
  company!: string;

  // 소대
  @Column
  platoon!: string;

  @ForeignKey(() => User)
  @Column
  uid!: number;
 
  @BelongsTo(() => User)
  user!: User;

}
