import React from "react";
import { useState, useContext } from "react";
import UserContext from "./Context";

function TodoForm({addTodo}){
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const { lists } = useContext(UserContext);
    // const { helpers } = lists[0];

    const createTodo = (e) => {
        if(!description || !assignedTo) {
            return;
        } else {
            e.preventDefault();
            addTodo({ description: description, assignedTo: assignedTo})
            setDescription(''); //setting the value back to empty
            setAssignedTo('');
        }
    }
    
    return (
            <form> 
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        placeholder="Add a new task"
                        onChange={e => setDescription(e.currentTarget.value)} 
                        />
                    {lists[0] && lists[0].helpers.length > 0 ? (
                        <div className="input-group">
                            <select className="custom-select" id="inputGroupSelect04" value={assignedTo} onChange={e=> setAssignedTo(e.currentTarget.value)}>
                                <option value="">Who will get it done?...</option>
                                {lists[0].helpers.map((helper, i) => <option value={helper} key={i}>{helper}</option>)}
                        </select>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-outline-warning" onClick={e=> createTodo(e)}>Add</button>
                        </div>
                        </div>
                        ) : (
                            <button type="submit" className="btn btn-outline-warning" onClick={e=> createTodo(e)}>Add</button>
                        )
                    }
                </div>
            </form>
    )
};
export default TodoForm;