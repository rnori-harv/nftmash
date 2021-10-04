// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Caption, User, Candidate } = initSchema(schema);

export {
  Caption,
  User,
  Candidate
};