import { ObjectType, Field } from 'type-graphql';
import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { User } from './user';

@ObjectType()
export class Todo {
  @Field()
  readonly _id!: ObjectId;

  @prop({ default: Date.now() })
  @Field(() => Date)
  createdAt!: Date;

  @prop({ default: Date.now() })
  @Field(() => Date)
  updatedAt!: Date;

  @prop()
  @Field()
  content!: string;

  @prop({ default: 'Task description' })
  @Field()
  description!: string;

  @prop({ default: false })
  @Field()
  isDone!: boolean;

  @prop({ required: true })
  @Field()
  assignee!: string;

  @prop({ localField: 'assignee', foreignField: 'users._id', type: ObjectId, ref: User })
  @Field({ nullable: true })
  user: User;

  @prop({ default: Date.now() })
  @Field(() => Date)
  startTime!: Date;

  @prop({ default: '' })
  @Field()
  sharedUsers!: string;
  // sharedUsers!: Array<User>;
}
