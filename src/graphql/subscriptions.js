/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
