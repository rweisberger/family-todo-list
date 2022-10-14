import '../App.css';
import React from 'react';
import {useState, useContext} from 'react';
import TodoForm from './TodoForm';
import UserContext from './Context';

function Todo({todo, index, remove}) {
    function handle(){
        remove(index);
    }
    return (
    
            <tr>
            <th scope="row" onClick={handle}>{todo.task} </th>
            <td>{todo.assignedTo}</td>
            <td><button className="btn btn-success" onClick={() => remove(index)}>✓</button></td>
            </tr>
    )
  }

  function MyList() {
    let ctx = useContext(UserContext);
    const [todos, setTodos] = useState(ctx.activeUser.todos)

    const addTodo = (newTask) => {
        console.log(newTask)
        const newTodos = [...todos, newTask];
        setTodos(newTodos);  // set todos to new todo list with added value
        console.log(newTodos);
    }
    const removeTodo = index => {
        let currentList = [...todos];
        console.log(index);
        currentList.splice(index,1); // removes the item from the current list
        setTodos(currentList)
    }
    return (
    <div className="container">
    {ctx.activeUser.listName ? (   
        <h1 className="display-5 text-center"> {ctx.activeUser.listName} </h1>
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
            {todos.map((todo,i) => <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
        </tbody>
        </table>
        <TodoForm addTodo={addTodo}/>
    </div>
    )
  }

  export default MyList;
