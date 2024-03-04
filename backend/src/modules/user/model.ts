import { getModelForClass } from '@typegoose/typegoose';

import { User } from '../../entities';
import { NewUserInput } from './input';
import { Service } from 'typedi';

// This generates the mongoose model for us
export const UserMongooseModel = getModelForClass(User);

@Service()
export default class UserModel {
  async exists(_id: string): Promise<boolean> {
    return await UserMongooseModel.exists({ _id }).lean();
  }

  async getUserById(_id: string): Promise<User | null> {
    // Use mongoose as usual
    return UserMongooseModel.findById(_id).lean().exec();
  }

  async getUsers(): Promise<User[] | null> {
    // Use mongoose as usual
    return UserMongooseModel.find();
  }

  async createUser(data: NewUserInput): Promise<User> {
    const User = new UserMongooseModel(data);
    return User.save();
  }
}
