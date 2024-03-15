import {  type RequestBody, fetchGraphQl } from '..';
import { GET_USERS } from '../../graphql';
import { type BaseGraphqlResponse,  } from './interface';

export interface UserDetail {
  _id: string;
  username: string;
  password: string;
  email: string;
  profilePic: string;
}

export interface AllUsersData {
  getUsers: UserDetail[];
}

// Get All Users Data
export const fetchUsers = async (): Promise<UserDetail[]> => {
  const response = await fetchGraphQl<RequestBody, BaseGraphqlResponse<AllUsersData>>({
    query: GET_USERS,
  });
  return response.data.getUsers;
};
