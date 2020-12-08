import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import { listProjects } from "./graphql/queries";
import {
  createProject,
  updateProject,
  deleteProject,
} from "./graphql/mutations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

// GraphQL endpoint: https://4y7lylu7bfagzcysd7p3r5zcfq.appsync-api.eu-west-2.amazonaws.com/graphql
// GraphQL API KEY: da2-hw62ndyeeffjleziq5bxtfo6ji
