import { ObjectId } from 'mongodb';
import autopopulate from 'mongoose-autopopulate';
import { ObjectType, Field } from 'type-graphql';
import { plugin, prop } from '@typegoose/typegoose';
import { User } from './user';

@plugin(autopopulate)
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

  @prop({
    ref: 'User',
    justOne: true,
    autopopulate: true,
    foreignField: '_id',
    localField: 'assignee',
  })
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
