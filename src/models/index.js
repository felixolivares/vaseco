// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const LoadingStatus = {
  "COMPLETE": "COMPLETE",
  "PENDING": "PENDING",
  "INPROGRESS": "INPROGRESS",
  "CANCELED": "CANCELED"
};

const { Provider, Employee } = initSchema(schema);

export {
  Provider,
  Employee,
  LoadingStatus
};