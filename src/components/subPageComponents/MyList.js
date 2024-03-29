import React from 'react';
import axios from "axios";

import {useState, useContext} from 'react';

// import '../App.css';
import TodoForm from '../subPageComponents/TodoForm';
import UserContext from '../context/Context';


function Todo({listId, todo, index, remove}) {
    let {lists, setLists} = useContext(UserContext);   
    const [editedTask, setEditedTask] = useState(todo.description);
    const [editingTask, setEditingTask] = useState(false);
    const [assignedTo, setAssignedTo] = useState(todo.assignedTo);
    const helpers = lists.find(list => list.listId === listId)?.helpers;

    const writeEditedTask = (e) => {
        let { taskId } = todo; 
        if(assignedTo === todo.assignedTo && editedTask === todo.description){
            setEditingTask(false)
            return
        } 

        axios.patch('/task', {
            listId, taskId, editedTask, assignedTo 
            })              
            .then((response) => {
                setLists(response.data);
                todo.description = editedTask;
                todo.assignedTo = assignedTo;
            })     
            .catch((error) => {
                console.log(error)
            })
        setEditingTask(false)
    }

    return (
        <>
            {editingTask ? (
                <tr>
                    <th><input className="form-control" placeholder='edit task' value={editedTask} onChange={e => setEditedTask(e.currentTarget.value)}></input></th>
                    <td>
                        <select className="custom-select" id="inputGroupSelect04" value={assignedTo} onChange={e=> setAssignedTo(e.currentTarget.value)}>
                                    <option value="">Who will get it done?...</option>
                                    {helpers.map((helper, i) => <option value={helper} key={i}>{helper}</option>)}
                        </select>
                    </td>
                    <td>
                        <button className="btn btn-success" onClick={(e) => writeEditedTask(e)}>Save</button>
                        <button className="btn btn-success" onClick={() => remove(index)}>✓</button>
                    </td>
                </tr>
            ) : (
                <tr>
                    <th scope="row">{todo.description}</th>
                    <td>{todo.assignedTo}</td>
                    <td>
                        <button className="btn btn-success" onClick={() => setEditingTask(true)}>Edit</button>
                        <button className="btn btn-success" onClick={() => remove(index)}>✓</button>
                    </td>
                </tr>   
            )}
        </>    
    )
  };

  function MyList(props) {
    let {accessEmail : email, lists, setLists} = useContext(UserContext);   
    const { listId } = props; 
    const [todos, setTodos] = useState((lists.find(list => list.listId === props.listId))?.todos);    

    const addTodo = (newTask) => {
        console.log("new task", newTask)
        let { listId, description, assignedTo } = newTask;
        axios.post('/create/task', { 
            email, 
            listId, 
            description, 
            assignedTo 
        })
        .then((response) => {
            const { lists } = response.data.docs
            setLists(lists);
            let listTodos = (lists.find(list => list.listId === listId)).todos;
            setTodos(listTodos);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    };

    const removeTodo = index => {
        let taskId = index; 

        axios.delete(`/delete/task/${taskId}`)
        .then((response) => {
            setLists(response.data);
            setTodos((response.data.find(list => list.listId === listId).todos));
          })
          .catch((error) => {
            alert(error.response.data);
          }); 
    }
    return (
    <div className="container">
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Task</th>
            <th scope="col">Assigned to:</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        {todos ? (
                <tbody>
                    {todos.map((todo,i) => <Todo listId={listId} index={todo.taskId} key={i} todo={todo} remove={removeTodo}/>)}
                </tbody>
            ) : (
                <tbody></tbody>
            )
        }
        </table>
        <TodoForm listId={listId} addTodo={addTodo}/>
    </div>
    )
  };

  export default MyList;
