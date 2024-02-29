import { Resolver, Arg, Query, Mutation, ID } from "type-graphql";
import Container, { Inject } from "typedi";
import { ObjectId } from "mongodb";
import UserService from "./service";

import { User } from "../../entities";
import { NewUserInput } from "./input";

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Resolver((of) => User)
export default class UserResolver {
  private readonly service = Container.get(UserService);

  @Query((returns) => User)
  async getUser(@Arg("id") id: ObjectId) {
    const User = await this.service.getById(id);
    return User;
  }

  @Query((returns) => [User])
  async getUsers() {
    return await this.service.getAllUsers();
  }

  @Mutation((returns) => User)
  async createUser(
    @Arg("createUserData") createUserData: NewUserInput
  ): Promise<User> {
    const User = await this.service.addUser(createUserData);
    return User;
  }
}
