/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
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
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        project {
          id
          projectNo
          name
          allowedHours
          usedHours
          status
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
      nextToken
    }
  }
`;
