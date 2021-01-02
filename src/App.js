import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//import Auth from "@aws-amplify/auth";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { listProjects } from "./graphql/queries";
import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
  updateProject as updateProjectMutation,
} from "./graphql/mutations";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";

import Navbar from "./components/Navbar";
import NewProjects from "./components/NewProjects";
import Timesheets from "./components/Timesheets";
import Reports from "./components/Reports";

import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const startForm = { projectNo: "", name: "", allowedHours: "", status: "" };

function App() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState(startForm);
  const { isShowing, toggle } = useModal();
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetchProjects();
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
      fetchProjects();
    }
  }

  async function UpdateProject({ id }) {
    const newProjectsArray = [...projects];
    setIndex(projects.findIndex((item) => item.id === id));
    delete formData.createdAt;
    delete formData.updatedAt;
    delete formData.owner;
    newProjectsArray[index] = formData;
    setProjects(newProjectsArray);
    await API.graphql({
      query: updateProjectMutation,
      variables: { input: formData },
    });
    setFormData(startForm);
    toggle();
    fetchProjects();
  }

  async function deleteProject({ id }) {
    const newProjectsArray = projects.filter((proj) => proj.id !== id);
    setProjects(newProjectsArray);
    await API.graphql({
      query: deleteProjectMutation,
      variables: { input: { id } },
    });
    fetchProjects();
  }

  return (
    <div className="App">
      <h1>Timesheet-App</h1>
      <Router>
        <Navbar />
        {/* {console.log(Auth.user.username)} */}
        <div id="mainContainer">
          <Switch>
            <Route exact path="/">
              <div className="projectsList">
                {projects
                  .sort((a, b) => a.projectNo - b.projectNo)
                  .map((project, idx) => (
                    <div className="projectRow" key={idx}>
                      <div className="gridProjectNo">{project.projectNo}</div>
                      <div className="gridProjectName">{project.name}</div>
                      <div className="gridProjectHours">
                        {project.allowedHours}
                      </div>
                      <div className="gridProjectStatus">{project.status}</div>
                      <button
                        className="gridEditButton"
                        onClick={() => {
                          setFormData(project);
                          toggle();
                        }}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="gridDeleteButton"
                        onClick={() => deleteProject(project)}
                      >
                        <HighlightOffIcon />
                      </button>
                    </div>
                  ))}
                <Modal
                  isShowing={isShowing}
                  hide={toggle}
                  formData={formData}
                  setFormData={setFormData}
                  updateProject={UpdateProject}
                />
              </div>
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
