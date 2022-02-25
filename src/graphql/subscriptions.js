/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider {
    onCreateProvider {
      id
      providerID
      name
      status
      employees {
        items {
          id
          name
          paternalLastname
          maternalLastname
          ssn
          curp
          salary
          validity
          providerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider {
    onUpdateProvider {
      id
      providerID
      name
      status
      employees {
        items {
          id
          name
          paternalLastname
          maternalLastname
          ssn
          curp
          salary
          validity
          providerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider {
    onDeleteProvider {
      id
      providerID
      name
      status
      employees {
        items {
          id
          name
          paternalLastname
          maternalLastname
          ssn
          curp
          salary
          validity
          providerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      name
      paternalLastname
      maternalLastname
      ssn
      curp
      salary
      validity
      providerID
      Provider {
        id
        providerID
        name
        status
        employees {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      name
      paternalLastname
      maternalLastname
      ssn
      curp
      salary
      validity
      providerID
      Provider {
        id
        providerID
        name
        status
        employees {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      name
      paternalLastname
      maternalLastname
      ssn
      curp
      salary
      validity
      providerID
      Provider {
        id
        providerID
        name
        status
        employees {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
