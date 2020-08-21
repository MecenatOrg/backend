/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCases = /* GraphQL */ `
  query GetCases($id: ID!) {
    getCases(id: $id) {
      id
      name
      description
      logo {
        bucket
        region
        key
      }
      text
      createdAt
      updatedAt
    }
  }
`;
export const listCasess = /* GraphQL */ `
  query ListCasess(
    $filter: ModelCasesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCasess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
