export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        providerID
        name
        status
        employees {
          items {
            curp
            paternalLastname
            id
            maternalLastname
            name
            providerID
            salary
            ssn
            validity
            _version
          }
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;