import React from "react";

export default function Timesheets({ logData, setLogData, user, setUser, createEntry }) {
    function handleAddEntry (e) {
        setLogData({...logData, [e.target.name]: e.target.value})
    }
    
    return (
        <>
            <p>Add New Entry</p>
            <label htmlFor="username">Username: </label>
            <input 
                type="text"
                id="username"
                value={logData.username}
                name="username"
                onChange={handleAddEntry}
                required
            />
            <br/>
            <label htmlFor="projNo">Project Number: </label>
            <input 
                type="text"
                id="projNo"
                value={logData.projectNo}
                name="projectNo"
                onChange={handleAddEntry}
                required
            />
            <br/>
            <label htmlFor="taskTime">Task Time: </label>
            <input 
                type="number"
                id="taskTime"
                value={logData.taskTime}
                name="taskTime"
                onChange={handleAddEntry}
            />
            <br/>
            <button onClick={createEntry}>Add Entry</button>
        </>
    )
}