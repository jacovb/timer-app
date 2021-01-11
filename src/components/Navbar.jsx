import React from "react";
import { Link } from 'react-router-dom';
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Auth from "@aws-amplify/auth";

export default function Navbar() {
    return (
        <div id="navbar">
            <Link to="/" id="navButton">
                Home
            </Link>
            <Link to="/newProjects" id="navButton">
                New Projects
            </Link>
            <Link to="/timesheets" id="navButton">
                Time Sheets
            </Link>
            <Link to="/reports" id="navButton">
                Reports
            </Link>
            <AmplifySignOut />
            <Link to={`/${Auth.user.username}`} id="navButton">
                {Auth.user.username}
            </Link>
            <Link to="/users" id="navButton">
                Users
            </Link>
        </div>
    )
}