import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Auth from "@aws-amplify/auth";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { listProjects } from "./graphql/queries";
import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
  // createUser as createUserMutation,
  // //updateUser as updateUserMutation,
  // deleteUser as deleteUserMutation,
} from "./graphql/mutations";

import Navbar from "./components/Navbar";
import NewProjects from "./components/NewProjects";
import Timesheets from "./components/Timesheets";
import Reports from "./components/Reports";

const startForm = { projectNo: "", name: "", allowedHours: "" };
// const startLogForm = {
//   username: "",
//   projectNo: "",
//   description: "",
//   taskTime: "",
// };

function App() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState(startForm);
  // const [user, setUser] = useState([]);
  // const [logData, setLogData] = useState(startLogForm);

  useEffect(() => {
    fetchProjects();
    // fetchUsers();
  }, []);

  async function fetchProjects() {
    const apiData = await API.graphql({ query: listProjects });
    setProjects(apiData.data.listProjects.items);
  }

  async function createProject() {
    if (!formData.projectNo || !formData.name) return;
    if (projects.some((item) => item.projectNo === formData.projectNo)) {
      alert("Project Number Already Exists");
    } else {
      await API.graphql({
        query: createProjectMutation,
        variables: { input: formData },
      });
      setProjects([...projects, formData]);
      setFormData(startForm);
    }
  }

  async function deleteProject({ id }) {
    const newProjectsArray = projects.filter((proj) => proj.id !== id);
    setProjects(newProjectsArray);
    await API.graphql({
      query: deleteProjectMutation,
      variables: { input: { id } },
    });
  }

  // async function fetchUsers() {
  //   const apiData = await API.graphql({ query: listUsers });
  //   setUser(apiData.data.listUsers.items);
  // }

  // async function createEntry() {
  //   if (!logData.projectNo || !logData.taskTime) return;
  //   await API.graphql({
  //     query: createUserMutation,
  //     variables: { input: logData },
  //   });
  //   setUser([...user, logData]);
  //   setLogData(startLogForm);
  // }

  // async function deleteEntry({ id }) {
  //   const newEntryArray = user.filter((item) => item.id !== id);
  //   setUser(newEntryArray);
  //   await API.graphql({
  //     query: deleteUserMutation,
  //     variables: { input: { id } },
  //   });
  // }

  return (
    <div className="App">
      <h1>Timesheet-App</h1>
      <Router>
        <Navbar />
        {console.log(Auth.user.username)}
        <div id="mainContainer">
          <Switch>
            <Route exact path="/">
              <div style={{ marginBottom: 30 }}>
                {projects
                  .sort((a, b) => a.projectNo - b.projectNo)
                  .map((project) => (
                    <div key={project.id || project.name}>
                      <p>
                        {project.projectNo} - {project.name} -{" "}
                        {project.allowedHours}
                      </p>
                      <button onClick={() => deleteProject(project)}>
                        Delete
                      </button>
                    </div>
                  ))}
              </div>
              {/* <div style={{ marginBottom: 30 }}>
                {user.map((entry) => (
                  <div key={entry.id || entry.name}>
                    <p>
                      {entry.username}: {entry.log.projectNo} - {entry.log.name}{" "}
                      - {entry.log.taskTime}
                    </p>
                    <button onClick={() => deleteEntry(entry)}>Delete</button>
                  </div>
                ))}
              </div> */}
            </Route>

            <Route exact path="/newProjects">
              <NewProjects
                formData={formData}
                setFormData={setFormData}
                projects={projects}
                setProjects={setProjects}
                createProject={createProject}
              />
            </Route>

            <Route exact path="/timesheets">
              <Timesheets
              // logData={logData}
              // setLogData={setLogData}
              // user={user}
              // setUser={setUser}
              // createEntry={createEntry}
              />
            </Route>

            <Route exact path="/reports">
              <Reports />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);

// GraphQL endpoint: https://4y7lylu7bfagzcysd7p3r5zcfq.appsync-api.eu-west-2.amazonaws.com/graphql
// GraphQL API KEY: da2-hw62ndyeeffjleziq5bxtfo6ji
