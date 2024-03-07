import { Field, InputType } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  username: string;
  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  password: string;
  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  email: string;
  //////////
  @Field({ defaultValue: 'https://i.ibb.co/vxQhWth/5694969c3bff03a9678d61c0297db555-1.jpg' })
  @MaxLength(300)
  profilePic: string;
}
