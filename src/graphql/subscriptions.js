/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
      id
      projectNo
      name
      allowedHours
      usedHours
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
      id
      projectNo
      name
      allowedHours
      usedHours
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
      id
      projectNo
      name
      allowedHours
      usedHours
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry($owner: String) {
    onCreateEntry(owner: $owner) {
      id
      projectNo
      projectName
      description
      entryTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry($owner: String) {
    onUpdateEntry(owner: $owner) {
      id
      projectNo
      projectName
      description
      entryTime
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry($owner: String) {
    onDeleteEntry(owner: $owner) {
      id
      projectNo
      projectName
      description
      entryTime
      createdAt
      updatedAt
      owner
    }
  }
`;
