/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      projectNo
      name
      allowedHours
      usedHours
      status
      users {
        items {
          id
          userName
          createdAt
          updatedAt
        }
        nextToken
      }
      entries {
        items {
          id
          description
          entryTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      projectNo
      name
      allowedHours
      usedHours
      status
      users {
        items {
          id
          userName
          createdAt
          updatedAt
        }
        nextToken
      }
      entries {
        items {
          id
          description
          entryTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      projectNo
      name
      allowedHours
      usedHours
      status
      users {
        items {
          id
          userName
          createdAt
          updatedAt
        }
        nextToken
      }
      entries {
        items {
          id
          description
          entryTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours
        usedHours
        status
        users {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        userName
        createdAt
        updatedAt
      }
      description
      entryTime
      createdAt
      updatedAt
    }
  }
`;
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours
        usedHours
        status
        users {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        userName
        createdAt
        updatedAt
      }
      description
      entryTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours
        usedHours
        status
        users {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        userName
        createdAt
        updatedAt
      }
      description
      entryTime
      createdAt
      updatedAt
    }
  }
`;
