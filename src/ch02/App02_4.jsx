import { useState } from "react";

function App02_4(){
    const [todos, setTodos] = useState([]);
    return <>
        <TodoInput todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos}/>
    </>
}

function TodoInput({todos, setTodos}){
    const [value, setValue] = useState("");
    const [name, setName] = useState("");


    const handleValueOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleNameOnChange = (e) => {
        setName(e.target.value);
    }

    const handleOnClick = () => {

        const todo = {
            content: value,
            writer: name,
            writeDate: new Date().toLocaleDateString(),
        }

        setTodos([...todos,todo]);

        setValue("");
        setName("");
    }

    return <div className="input-box">
        <input type="text" value={value} onChange={handleValueOnChange} />
        <input type="text" value={name} onChange={handleNameOnChange} />
        <button className="todo-button" onClick={handleOnClick}>등록</button>
    </div>
}

function TodoList({todos}){
    return <ul className="todo-display-box">
        {
            todos.map(todo=><li><span>{todo.content}</span>({todo.writer}, {todo.writeDate})</li>)
        }
    </ul>
}

export default App02_4;