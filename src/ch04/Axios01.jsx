import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

function Axios01(){
    const [ users, setUser ] = useState([]);
    const [ refetch, setRefetch ] = useState(true);
    
    getUserApi();

    const getUserApi = async () => {
        // 페이지가 렌더링 되면 요청을 받아옴
        if (refetch){
            const response = await axios.get("http://192.168.2.101:8080/users");
            console.log(response.data);
            // 받아온 데이터들을 setUser 상태로 저장
            setUser(response.data);
            setRefetch(false);
        }
    }


    useEffect(()=>{
        console.log("useEffect!!!");
    })
    
    // useEffect(()=>{
    //     axios.get("http://192.168.2.101:8080/users")
    //     .then(response => {
    //         setUser(response.data);
    //     });
    // },[refetch]);
        
    return <>
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
                    users.map( u => <tr>
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

export default Axios01;