import React from "react";
import { useState, useContext } from "react";

import UserContext from "./Context";
import DeleteList from "./DeleteList";

function TodoForm({listId, addTodo}){
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const { lists } = useContext(UserContext);
    const helpers = lists.find(list => list.listId === listId)?.helpers

    const createTodo = (e) => {
        if(!description || !assignedTo) {
            return;
        } else {
            e.preventDefault();
            addTodo({ listId: listId, description: description, assignedTo: assignedTo})
            setDescription(''); //setting the value back to empty
            setAssignedTo('');
        }
    }
    
    return (
            <form> 
                    {helpers?.length > 0 ? (
                        // what the difference between input and form group?
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                placeholder="Add a new task"
                                onChange={e => setDescription(e.currentTarget.value)} 
                            />
                            <div className="input-group">
                                <select className="custom-select" id="inputGroupSelect04" value={assignedTo} onChange={e=> setAssignedTo(e.currentTarget.value)}>
                                    <option value="">Who will get it done?...</option>
                                    {helpers.map((helper, i) => <option value={helper} key={i}>{helper}</option>)}
                                </select>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-outline-warning" onClick={e=> createTodo(e)}>Add</button>
                            </div>
                            </div>
                        </div>

                        ) : (
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={description}
                                    placeholder="Add a new task"
                                    onChange={e => setDescription(e.currentTarget.value)} 
                                />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-outline-warning" onClick={e=> createTodo(e)}>Add</button>
                            </div>
                            </div>
                        )
                    }
                    <br/><DeleteList listId={listId}/>
                    {/* <button type="submit" className="btn btn-outline-primary float-right disabled" >Setup</button> */}
            </form>
    )
};
export default TodoForm;