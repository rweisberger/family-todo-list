import React from 'react';
import axios from "axios";

import {useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";


import '../App.css';
import TodoForm from './TodoForm';
import UserContext from './Context';

function Todo({todo, index, remove}) {
    function handle(){
        remove(index);
    }
    return (
            <tr>
            <th scope="row" onClick={handle}>{todo.description} </th>
            <td>{todo.assignedTo}</td>
            <td><button className="btn btn-success" onClick={() => remove(index)}>✓</button></td>
            </tr>
    )
  }

  function MyList() {
    let {accessEmail : email, lists, setLists} = useContext(UserContext);
    const [todos, setTodos] = useState();
    const navigate = useNavigate();

    const addTodo = (newTask) => {
        console.log(newTask)
        let { description, assignedTo } = newTask;
        let listName = lists[0].listName
        // let email = accessEmail;
        console.log(email, listName, description, assignedTo);
        axios.post('/create/task', { 
            email, 
            listName, 
            description, 
            assignedTo 
        })
        .then(function(response){
            setLists(response.data.docs.lists);
            setTodos(response.data.docs.lists[0].todos);
        })
        .catch(function (error) {
            console.log(error);
            alert(error);
        });
    }

    const removeTodo = index => {
        let taskId = index; 

        axios.post('/delete/task', { taskId })
        .then(function (response) {
            console.log(response.data);
            setLists(response.data);
            setTodos(response.data[0].todos);
          })
          .catch(function (error) {
            console.log(error.response.data);
            alert(error.response.data);
          }); 
    }
    return (
    <div className="container">
    {/* {lists && lists[0].listName ? (    */}
    {/* { lists. length > 0 ? (
        <h1 className="display-5 text-center"> {lists[0].listName} </h1>
        ) : (<h1 className="display-5 text-center"> To Do: </h1>
        )
    } */}
        <table className="table">
        <thead className='bg-info'>
            <tr>
            <th scope="col">Task</th>
            <th scope="col">Assigned to:</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        {todos ? (
                <tbody>
                    {todos.map((todo,i) => <Todo index={todo.taskId} key={i} todo={todo} remove={removeTodo}/>)}
                </tbody>
            ) : (
                <tbody></tbody>
            )
        }
        
        </table>
        <TodoForm addTodo={addTodo}/>
    </div>
    )
  }

  export default MyList;
