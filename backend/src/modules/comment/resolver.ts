import { Resolver, Arg, Query, Mutation } from 'type-graphql';
import Container from 'typedi';
import { ObjectId } from 'mongodb';

import { Comment } from '../../entities';
import CommentService from './service';
import { NewCommentInput } from './input';

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Resolver((of) => Comment)
export default class CommentResolver {
  private readonly commentService = Container.get(CommentService);

  @Query((returns) => Comment)
  async getComment(@Arg('id') id: ObjectId) {
    const Comment = await this.commentService.getCommentById(id);

    return Comment;
  }
  @Query((returns) => Comment)
  async getCommentList(@Arg('id') id: ObjectId) {
    const Comment = await this.commentService.getCommentById(id);

    return Comment;
  }

  @Query((returns) => [Comment])
  async getAllTasks() {
    const Tasks = await this.commentService.getAllComments();
    return Tasks;
  }

  @Query((returns) => [Comment])
  async getTaskComments(@Arg('id') id: ObjectId) {
    const Tasks = await this.commentService.getTaskComments(id);
    return Tasks;
  }

  @Mutation((returns) => Comment)
  async createComment(
    @Arg('createCommentData') createCommentData: NewCommentInput,
  ): Promise<Comment> {
    const Comment = await this.commentService.addComment(createCommentData);
    return Comment;
  }
}
