import { useState } from "react";

function App02_5(){
    const [todos, setTodos] = useState([]);

    const [content, setContent] = useState("");
    const [writer, setWriter] = useState("");

    const handleContentOnChange = (e) =>{
        setContent(e.target.value);
    }

    const handleWriterOnChange = (e) =>{
        setWriter(e.target.value);
    }

    const handleRegistOnClick = () => {
        const todo = {
            content: content,
            writer: writer,
            writeDate: new Date().toLocaleDateString(),
        }

        setTodos([...todos,todo]);

        setContent("");
        setWriter("");
    }

    const handleResetOnClick = () => {
        setTodos([]);
    }

    return <>
        <div className="input-box">
            <input type="text" value={content} onChange={handleContentOnChange}/>
            <input type="text" value={writer} onChange={handleWriterOnChange} />
            <button className="new-button-box" onClick={handleRegistOnClick}>등록</button>
            <button className="new-button-box" onClick={handleResetOnClick}>초기화</button>
        </div>
        <ul className="todo-display-box" >
            {
                todos.map(todo=><li><input type="checkbox"/><span>{todo.content}</span>({todo.writer}, {todo.writeDate})</li>)
            }
        </ul>
    </>
}

export default App02_5;