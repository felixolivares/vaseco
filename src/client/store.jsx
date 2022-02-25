import { API, graphqlOperation } from "@aws-amplify/api";
import * as customQueries from '../graphql/customQueries';

export const getAllProviders = async () => {
  try {
    const providersGQL = await API.graphql({
      query: customQueries.listProviders,
    });
    return providersGQL.data.listProviders.items;
  } catch (err) {
    console.log("Error retreiving Providers: ", err);
  }
};