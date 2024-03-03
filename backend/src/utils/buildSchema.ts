import { ObjectId } from 'mongodb';
import { buildSchema as typeGraphqlBuildSchema } from 'type-graphql';
import { ObjectIdScalar } from './scalars';
import { resolvers } from '../modules';

// Here goes your schema building bit, doing it this way allows us to use it in the tests as well!
export const buildSchema = () =>
  typeGraphqlBuildSchema({
    resolvers,
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
  });
