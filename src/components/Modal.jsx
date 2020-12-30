import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ isShowing, hide, formData, setFormData }) {
    
    function handleUpdateData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    
    return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <h1>Edit Project</h1>  
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>   
                </div>
                <label htmlFor="projNo">Project Number: </label>
                <input 
                    type="text"
                    id="projNo"
                    value={formData.projectNo}
                    name="projectNo"
                    onChange={handleUpdateData}
                    required
                />
                <br/>
                <label htmlFor="projName">Project Name: </label>
                <input 
                    type="text"
                    id="projName"
                    value={formData.name}
                    name="name"
                    onChange={handleUpdateData}
                />
                <br/>
                <label htmlFor="projHours">Allowed Hours: </label>
                <input 
                    type="number"
                    id="projHours"
                    value={formData.allowedHours}
                    name="allowedHours"
                    onChange={handleUpdateData}
                />
                <br/>
                <label htmlFor="status">Project Status: </label>
                <select type="text"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleUpdateData}>
                        <option value="Quote">Quote</option>
                        <option value="Current">Current</option>
                        <option value="Complete">Complete</option>   
                </select>
                <br/>
                <button onClick={() => console.log(formData)}>Update</button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

