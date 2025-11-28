import { useState } from "react";

function Inputs(){
    // const [value, setValue] = useState({
    //     fullName:"",
    //     age:"",
    // })

    const [fullName, setFullname] = useState("");
    const [age, setAge] = useState("");

    // const handleNameOnChange = (e) => {
    //     setValue({
    //         ...value,
    //         fullName : e.target.value,
    //     })
    // }

    // const handleAgeOnChange = (e) => {
    //     setValue({
    //         ...value,
    //         age : e.target.value,
    //     })
    // }
    
    const handleNameOnChange = (e) => {
        setFullname(e.target.value)
    }
    const handleAgeOnChange = (e) => {
        setAge(e.target.value)
    }

    return <>
        <input type="text" value={fullName} onChange={handleNameOnChange}  placeholder="이름"/>   
        <input type="text" value={age} onChange={handleAgeOnChange} placeholder="나이"/>
        <h2>이름: {fullName}</h2>
        <h2>나이: {age}</h2>
    </>
}

export default Inputs;