import { useState } from "react";
import "./style.css";

function App02(){

    // input에 입력할때 화면에 보일 값 useState로 생성
    const [name, setName] = useState("기본이름");
    const [age, setAge] = useState(0);

    // 버튼을 눌렀을때 바뀔 이름, 나이
    const [onName, setOnName] = useState("");
    const [onAge, setOnAge] = useState(0  );

    const data = {
        title: "리액트 기초 시작",
        nameValue: "기본 이름",
        age: "0",
    }

    // 이름 입력 시에 OnChange 이벤트가 발생 -> setName의 상태가 변함
    // name(value)이 바로 render됨
    const handleNameInputOnChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    // 나이 입력 시에 OnChange 이벤트가 발생 -> setAge의 상태가 변함
    // age(value)이 바로 render됨
    const handleAgeInputOnChange = (e) => {
        console.log(e.target.value);
        console.log(typeof(e.target.value));
        setAge(e.target.value);
    }

    // onClick 이벤트 발생하면 input 안에 있는 내용들 비우고 setOn -> 아래 li에 내용 출력
    const inputOnClick = () => {
        setName("");
        setAge();
        setOnName(name);
        setOnAge(age);
    }

    // onClick 이벤트 발생하면 li의 onName, onAge 비움
    const resetOnClick = () => {
        setOnName("");
        setOnAge();
    }

    return <div className="main-box">
        <div className="title-box">
            <h1>제목: {data.title}</h1>
        </div>
        <div className="input-box">
            <input type="text" value={name} onChange={handleNameInputOnChange}/>
            <input type="text" value={age} onChange={handleAgeInputOnChange}/>
        </div>
        <div className="button-box">
            <button onClick={inputOnClick}>확인</button>
            <button onClick={resetOnClick}>초기화</button>
        </div>
        <div className="display-box">
            <ul>
                <li>이름: {onName}</li>
                <li>나이: {onAge} </li>
            </ul>
        </div>
    </div>
}

export default App02;