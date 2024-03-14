import { GET_USERS } from '@/graphql';

import {  IRequestBody, fetchGraphQl } from '..';
import { IBaseGraphqlResponse,  } from './interface';

export interface IUserDetail {
  _id: string;
  username: string;
  password: string;
  email: string;
  profilePic: string;
}

export interface IAllUsersData {
  getUsers: IUserDetail[];
}

// Get All Users Data
export const fetchUsers = async (): Promise<IUserDetail[]> => {
  const response = await fetchGraphQl<IRequestBody, IBaseGraphqlResponse<IAllUsersData>>({
    query: GET_USERS,
  });
  return response.data.getUsers;
};
