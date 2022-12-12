import React from 'react';
import axios from "axios";

import {useState, useContext} from 'react';

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
    let {activeUser, lists, setLists} = useContext(UserContext);
    const [todos, setTodos] = useState(lists[0].todos)
    console.log('lists',lists[0], 'todos', todos)

    const addTodo = (newTask) => {
        console.log(newTask)
        // axios.post('/create/task', {
        //     email, listName, description, assignedTo
        // })
        // const newTodos = [...todos, newTask];
        // setTodos(newTodos);  // set todos to new todo list with added value
        // console.log(newTodos);
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
        // let currentList = [...todos];
        // console.log(index);
        // currentList.splice(index,1); // removes the item from the current list
    }
    return (
    <div className="container">
    {lists.listName ? (   
        <h1 className="display-5 text-center"> {lists.listName} </h1>
        ) : (<h1 className="display-5 text-center"> To Do: </h1>
        )
    }
        <table className="table">
        <thead className='bg-info'>
            <tr>
            <th scope="col">Task</th>
            <th scope="col">Assigned to:</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((todo,i) => <Todo index={todo.taskId} key={i} todo={todo} remove={removeTodo}/>)}
        </tbody>
        </table>
        {/* <TodoForm addTodo={addTodo}/> */}
    </div>
    )
  }

  export default MyList;
