import React from "react";
import { useState } from "react";

function TodoForm({addTodo}){
    const [task, setTask] = useState('');
    const [assignedTo, setAssignedTo] = useState('');

    const createTodo = (e) => {
        if(!task || !assignedTo) {
            return;
        } else {
            e.preventDefault();
            console.log({task: task, assignedTo: assignedTo, isCompleted: false});
            let newTask = {task: task, assignedTo: assignedTo, isCompleted: false};
            addTodo(newTask);
            setTask(''); //setting the value back to empty
            setAssignedTo('');
        }
    }

    
    return (
            <form> 
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={task}
                        placeholder="Add a new task"
                        onChange={e => setTask(e.currentTarget.value)} 
                        />
                    <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04" value={assignedTo} onChange={e=> setAssignedTo(e.currentTarget.value)}>
                            <option value="">Who will get it done?...</option>
                            <option value="Bill">Bill</option>
                            <option value="Rachel">Rachel</option>
                        </select>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-outline-warning" onClick={e=> createTodo(e)}>Add</button>
                        </div>
                    </div>
                </div>
            </form>)
};
export default TodoForm;