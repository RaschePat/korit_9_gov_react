import { useState } from "react";
import "./style.css";

function App02_pr() {
    // input 값을 관리하는 state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // 테이블에 표시될 데이터 배열
    const [tableRows, setTableRows] = useState([]);

    // username input 변경 이벤트
    const handleUsernameChange = (e) => {
        console.log("username 입력:", e.target.value);
        setUsername(e.target.value);
    }

    // password input 변경 이벤트
    const handlePasswordChange = (e) => {
        console.log("password 입력:", e.target.value);
        setPassword(e.target.value);
    }

    // 추가 버튼 클릭 이벤트
    const handleRegisterClick = () => {
        console.log("추가버튼 클릭!");

        if(username.trim() && password.trim()) {
        const newRow = {
            username: username.trim(),
            password: password.trim()
        };
        
        setTableRows([...tableRows, newRow]);
        
        // input 초기화
        setUsername("");
        setPassword("");
        
        } else {
            alert("아이디와 비밀번호를 모두 입력해주세요!");
        }

    }

    const handleResetClick = () => {
        console.log("추가버튼 클릭!");
        
        setTableRows([]);
        
    }

    return (
        <div className="container">
            {/* 입력 영역 */}
            <div className="input-container">
                <input 
                    type="text" 
                    className="username-input"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                />
                <input 
                    type="password" 
                    className="password-input"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                />
                <div className="button-container">
                    <button 
                        className="register-button"
                        onClick={handleRegisterClick}
                    >
                        추가
                    </button>
                    <button 
                        className="reset-button"
                        onClick={handleResetClick}
                    >
                        초기화
                    </button>
                </div>
            </div>

            {/* 테이블 영역 */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <td>username</td>
                            <td>password</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.username}</td>
                                <td>{row.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App02_pr;