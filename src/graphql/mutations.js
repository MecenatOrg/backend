/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCase = /* GraphQL */ `
  mutation CreateCase(
    $input: CreateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    createCase(input: $input, condition: $condition) {
      id
      title
      description
      variant
      imgUrl
      textPreview
      text
      tags {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCase = /* GraphQL */ `
  mutation UpdateCase(
    $input: UpdateCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    updateCase(input: $input, condition: $condition) {
      id
      title
      description
      variant
      imgUrl
      textPreview
      text
      tags {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCase = /* GraphQL */ `
  mutation DeleteCase(
    $input: DeleteCaseInput!
    $condition: ModelCaseConditionInput
  ) {
    deleteCase(input: $input, condition: $condition) {
      id
      title
      description
      variant
      imgUrl
      textPreview
      text
      tags {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
