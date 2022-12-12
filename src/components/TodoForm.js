import React from "react";
import { useState, useContext } from "react";
import UserContext from "./Context";

function TodoForm({addTodo}){
    const [task, setTask] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const {lists, activeUser} = useContext(UserContext);
    const helpers = ctx.activeUser.helpers;

    const createTodo = (e) => {
        if(!task || !assignedTo) {
            return;
        } else {
            e.preventDefault();
            console.log({task: task, assignedTo: assignedTo, isCompleted: false});
            let newTask = {task: task, assignedTo: assignedTo, isCompleted: false};
            addTodo(newTask);
            ctx.activeUser.todos.push(newTask);
            setTask(''); //setting the value back to empty
            setAssignedTo('');
            console.log(ctx);
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
                    {(helpers.length !== 0) ? (
                        <div className="input-group">
                            <select className="custom-select" id="inputGroupSelect04" value={assignedTo} onChange={e=> setAssignedTo(e.currentTarget.value)}>
                                <option value="">Who will get it done?...</option>
                                {helpers.map((helper, i) => <option value={helper} key={i}>{helper}</option>)}
                        </select>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-outline-warning" onClick={e=> createTodo(e)}>Add</button>
                        </div>
                        </div>
                        ) : (<></>)
                    }
                </div>
            </form>
    )
};
export default TodoForm;