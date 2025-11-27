import { useState } from "react";

function App02_2(){

const [name, setName] = useState("");
const [age, setAge] = useState("");
const [onName, setOnName] = useState("");
const [onAge, setOnAge] = useState("");

    return <>
        <InputBox name={name} setName={setName} age={age} setAge={setAge}/>
        <ButtonBox name={name} setName={setName} age={age} setAge={setAge} setOnName={setOnName} setOnAge={setOnAge}/>
        <DisplayBox onName={onName} onAge={onAge}/>
    </>
}

export default App02_2;

function InputBox ({name, setName, age, setAge}) {
    
    const handleNameInputOnChange = (e)=> {
        console.log(e.target.value);
        setName(e.target.value);
    }
    
    const handleAgeInputOnChange = (e)=> {
        console.log(e.target.value);
        setAge(e.target.value);
    }

    return <div className="input-box">
        <input type="text" value={name} onChange={handleNameInputOnChange}/>
        <input type="text" value={age} onChange={handleAgeInputOnChange} />
    </div>
}

function ButtonBox({setOnName, setOnAge, name, age, setName, setAge}) {
    
    const handleOnClick = () => {
        setName("");
        setAge("");
        setOnName(name);
        setOnAge(age);
    }

    return <div className="button-box">
        <button onClick={handleOnClick}>확인</button>
    </div>
}

function DisplayBox({onName, onAge}) {

    return <div className="display-box">
        <ul>
            <li>{onName}</li>
            <li>{onAge}</li>
        </ul>
    </div>
}