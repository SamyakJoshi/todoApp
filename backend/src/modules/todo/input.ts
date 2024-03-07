import { Field, InputType } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';
import { ObjectId } from 'mongodb';

@InputType()
export class NewTodoInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  content: string;

  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  assignee: ObjectId;
  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  description: string;
}
@InputType()
export class finishTaskInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  task: string;

  @Field()
  @MaxLength(300)
  @MinLength(1)
  user: string;
}
