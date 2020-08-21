/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCases = /* GraphQL */ `
  mutation CreateCases(
    $input: CreateCasesInput!
    $condition: ModelCasesConditionInput
  ) {
    createCases(input: $input, condition: $condition) {
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
export const updateCases = /* GraphQL */ `
  mutation UpdateCases(
    $input: UpdateCasesInput!
    $condition: ModelCasesConditionInput
  ) {
    updateCases(input: $input, condition: $condition) {
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
export const deleteCases = /* GraphQL */ `
  mutation DeleteCases(
    $input: DeleteCasesInput!
    $condition: ModelCasesConditionInput
  ) {
    deleteCases(input: $input, condition: $condition) {
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
