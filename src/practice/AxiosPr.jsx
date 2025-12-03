import axios from "axios";
import { useState } from "react";

function AxiosPr(){
    const [ inputValue, setInputValue ] = useState({
        username: "",
    });

    const [ users, setUsers ] = useState([]);

    // axios 가져오기
    const getUsersApi = async () => {
        const response = await axios.get("http://192.168.2.101:8080/users",{params:{username : inputValue.username}});
        setUsers(response.data);
    }

    const handleInputOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name] : value,
        })
    };

    const handleInputOnKeyDown = (e) => {
        if(e.keyCode === 13){
            getUsersApi();
        }
    };

    const handleSearchOnClick = () => {
        getUsersApi();
    };

    return <>
        <input type="text"
            name="username"
            value={inputValue.username}
            onChange={handleInputOnChange}
            onKeyDown={handleInputOnKeyDown}
        
        />
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
                        <td>{u.roles[0]}</td>
                        <td>{u.roles[1]}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default AxiosPr;