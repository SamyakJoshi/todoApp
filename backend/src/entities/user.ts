import { ObjectType, Field } from 'type-graphql';
import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

@ObjectType()
export class User {
  @Field()
  readonly _id!: ObjectId;

  @prop({ default: Date.now() })
  @Field(() => Date)
  createdAt!: Date;

  @prop()
  @Field()
  username!: string;

  @prop()
  @Field()
  password!: string;

  @prop()
  @Field()
  email!: string;

  @prop()
  @Field({ nullable: true, defaultValue: "https://i.ibb.co/vxQhWth/5694969c3bff03a9678d61c0297db555-1.jpg" })
  profilePic!: string;
}
