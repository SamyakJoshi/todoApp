import { gql } from "graphql-tag";

export const GET_TODOS = `
  query {
    getAllTasks {
      _id
      content
      description
      isDone
      assignee
    }
  }
`;

export const ADD_TODO = `
  mutation AddTodo(
    $content: String!
    $assignee: String!
    $description: String!
  ) {
    createTodo(
      createTodoData: {
        content: $content
        assignee: $assignee
        description: $description
      }
    ) {
      assignee
      description
    }
  }
`;

export const SET_TASK_DONE = `
  mutation SetTaskDone($task: String!, $user: String!) {
    setTakDone(setTakDone: { task: $task, user: $user }) {
      isDone
    }
  }
`;

export const DELETE_TASK = `
  mutation DeleteTask($task: String!, $user: String!) {
    deleteTask(taskToDelete: { task: $task, user: $user }) {
      _id
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!, $email: String!) {
    createUser(
      createUserData: {
        username: $username
        password: $password
        email: $email
      }
    ) {
      username
    }
  }
`;

export const GET_USERS = gql`
  query {
    getUsers {
      _id
      username
      email
    }
  }
`;
