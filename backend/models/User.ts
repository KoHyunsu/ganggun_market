import {Model, Column, Table, HasOne, Scopes, CreatedAt, UpdatedAt, PrimaryKey} from "sequelize-typescript";
import {Affiliation} from "./Affiliation";

@Scopes(() => ({
  affiliation: {
    include: [
      {
        model: Affiliation,
        through: {attributes: []},
      },
    ],
  },
}))

@Table
export class User extends Model<User> {

  @PrimaryKey
  @Column
  id!: number;

  // 유저 아이디
  @Column
  userId!: string;

  // 유저 비밀번호
  @Column
  password!: string;

  // 계급 0:이병 1:일병 2:상병 3:병장
  @Column
  rank!: number;

  // 계좌은행 0:국민은행 1:기업은행 2:우리은행 3:신한은행 4:농협은행 
  @Column
  bank!: number;

  // 계좌번호
  @Column
  account!: number;

  // 프로필 사진 저장경로
  @Column
  photo?: string;

  // 소속
  @HasOne(() => Affiliation)
  affiliation?: Affiliation[];

  // 입대일
  @Column
  eDate!: Date;

  // 전역일
  @Column
  dDate!: Date;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
