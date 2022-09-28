import '../App.css';
import React from 'react';
import {useState} from 'react';
import TodoForm from './TodoForm';



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
    
    
    // <div className="todo" onClick={handle}>{todo.task} 
    //     <div>
    //         <button className="btn" onClick={() => remove(index)}>√</button>
    //     </div>
    //   </div>
  }

  function MyList() {
    const [todos, setTodos] = useState([
        {
            task: 'go to bank',
            assignedTo: 'Bill',
            isCompleted: false,   
        },
        {
            task: 'wash sheets',
            assignedTo: 'Rachel',
            isCompleted: false,
        },
        {
            task: 'find childcare',
            assignedTo: 'Nora',
            isCompleted: false,
        },
    ]);
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
    <h1 class="display-3 text-center">Todo List</h1>
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