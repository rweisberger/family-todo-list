import { useState } from "react";

function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault(); // the default is to reload the page
        if(!value) return; // check for existing input value
        addTodo(value);
        setValue(''); //setting the value back to empty
    }

return(
<form onSubmit={handleSubmit}> 
    <input
        type="text"
        className="input"
        value={value}
        placeholder="New task"
        onChange={e => setValue(e.target.value)} 
        />
        <select id="cars" name="cars">
            <option value="bill">Bill</option>
            <option value="saab">Rachel</option>
            <option value="fiat">Nora</option>
            <option value="audi">Victor</option>
      </select>
   
</form>
)
}
export default TodoForm;