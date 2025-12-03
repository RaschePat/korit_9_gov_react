import axios from "axios";
import { useRef, useState } from "react";

function Axios03(){
    const registerInputRef = {
        username: useRef(),
        password:useRef(),
        name: useRef(),
        email: useRef(),
        role1: useRef(),
        role2: useRef(),
    }

    const [ registerInputValue, setRegisterInputValue] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        role1: "",
        role2: "",
    });

    const [ inputValue , setInputValue ] = useState({
        username:"",
    });

    const [ users, setUsers ] = useState([]);

    const getUsersApi = async () => {
        const response = await axios.get("http://192.168.2.101:8080/users", {params: {username: inputValue.username}});
        console.log(response.data)
        setUsers(response.data);
        
    }

    const handleRegisterInputOnChange = (e) => {
        const {name, value} = e.target;
        setRegisterInputValue({
            ...registerInputValue,
            [name] : value,
        })
    }

    const handleRegisterInputNextFocusOnKeyDown = (e, nextRef) => {
        if(e.key === 'Enter'){
            nextRef.current.focus();
        }
    };

    const handleRegisterInputSubmitOnKeyDown = (e) => {
        if (e.key === 'Enter'){
            console.log(registerInputValue);
            // 기존의 inputValue를 가져와서 새 데이터를 만든다.
            // const data = {
            //     username: registerInputValue.username,
            //     password: registerInputValue.password,
            //     name: registerInputValue.name,
            //     email: registerInputValue.email,
            //     roles: [registerInputValue.role1,registerInputValue.role2]
            // } 

            // 레스트 문법 - role1, role2를 제외한 나머지 객체를 data에 담는다.
            const {role1, role2, ...data} = registerInputValue; 
            // data에 roles 키 값으로 role1, role2 배열을 추가한다.
            data["roles"] = [role1, role2]
            axios.post("http://192.168.2.101:8080/users",data);
        } 
    }

    const handleRegisterInputSubmitOnClick = () => {

    }

    const handleInputOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name] : value,
        })
    }

    const handleInputOnKeyDown = (e) => {
        if(e.key === 'Enter'){
            getUsersApi();
        }

    }

    const handleSearchOnClick = () => {
        getUsersApi();
    }

    return <>
        <div>
            <div>
                <input type="text" 
                    ref={registerInputRef.username} 
                    placeholder="유저명" 
                    name="username" 
                    value={registerInputValue.username} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e)=>handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.password)}/>
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.password}  
                    placeholder="비밀번호" 
                    name="password" 
                    value={registerInputValue.password} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e)=>handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.name)}/>
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.name}  
                    placeholder="이름" 
                    name="name" 
                    value={registerInputValue.name} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e)=>handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.email)}/>
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.email}  
                    placeholder="이메일" 
                    name="email" 
                    value={registerInputValue.email} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e)=>handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.role1)}/>
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.role1}  
                    placeholder="역할1" 
                    name="role1" 
                    value={registerInputValue.role1} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e)=>handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.role2)}/>
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.role2}  
                    placeholder="역할2" 
                    name="role2" 
                    value={registerInputValue.role2} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={handleRegisterInputSubmitOnKeyDown}/>
            </div>
            <button onClick={handleRegisterInputSubmitOnClick}>등록</button>
        </div>
        <input type="text"
            name="username"
            value={inputValue.username}
            onChange={handleInputOnChange}
            onKeyDown={handleInputOnKeyDown}/>
        <button onClick={handleSearchOnClick}>검색</button>
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role1</th>
                    <th>role2</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(u => <tr>
                        <td>{u.username}</td>
                        <td>{u.password}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.roles && u.roles[0]}</td>
                        <td>{u.roles && u.roles[1]}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Axios03;