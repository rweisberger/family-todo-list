import '../App.css';
import React from 'react';
import {useState} from 'react';
import TodoForm from './TodoForm';



function Todo({todo, index, remove}) {
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.task} 
        <div>
            <button className="btn" onClick={() => remove(index)}>√</button>
        </div>
      </div>
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
    const addTodo = task => {
        const newTodos = [...todos, {task:task, isCompleted: false}];
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
    <div className="box">
    <h1>Todo List</h1>
        <div className="todo-list">
            {todos.map((todo,i) => <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
            {/* this form allows the user to add an input */}
            <TodoForm addTodo={addTodo}/>
        </div>
    </div>
    )
  }

  export default MyList;
