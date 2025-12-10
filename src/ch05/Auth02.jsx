import axios from "axios";
import { useEffect, useState } from "react";

function Auth02(){
    const [inputValue, setInputValue ] = useState({
        username: "",
        password: "",
    });
    
    const [ inputMessage, setInputMessage ] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });

    const [ signinButtonDisabled, setSinginButtonDisabled ] = useState(true);

    const regexs = {
        username: {
            regex: /^[a-z0-9_-]{5,20}$/,
            message: "아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
        },
        password: {
            regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z0-9^A-Za-z0-9\W]{8,16}$/,
            message: "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
        },
        name: {
            regex: /^[가-힣]{2,6}$/,
            message: "이름: 2~6자의 한글을 사용해주세요.",
        },
        email: {
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "이메일 형식을 사용해주세요.",
        },
    }

    useEffect(() => {
        const isBlank = Object.values(inputValue).includes("");
        const isRegex = Object.values(inputMessage).map(message => !!message).includes(true);
        setSinginButtonDisabled(isBlank || isRegex);
    }, [inputValue]);

    const handleInputOnChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });

        if(regexs[e.target.name].regex.test(e.target.value)){
            setInputMessage({
                ...inputMessage,
                [e.target.name]: "",
            })
        } else {
            setInputMessage({
                ...inputMessage,
                [e.target.name]: regexs[e.target.name].message,
            })
        }
    }

    const handleSignupOnClick = () => {
        signinRequest();
    }
    
    const signinRequest = async () => {
        try{
            const response = await axios.post("http://localhost:8080/api/auth/signin", inputValue);
            const {accessToken} = response.data;
            // key , value 형식으로 저장할 수 있다.
            localStorage.setItem("AccessToken", accessToken);
            await getPrincipalRequest();
        } catch(error){
           alert(error.response.data.message);
        }
    }

    const handleInputOnKeyDown = (e) => {
        if(e.key === 'Enter'){
            signinRequest();
        }

    }

    const getPrincipalRequest = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/auth/principal", {
                headers: {
                    "Authorization" : `Bearer ${localStorage.getItem("AccessToken")}`,
                },
            });
            console.log(response);
        } catch(error){
            console.log(error);
        }
    }

    return <>
        <div>
            <input type="text" placeholder="사용자이름" name="username" value={inputValue.username} onChange={handleInputOnChange} />
            <span>{inputMessage.username}</span>
        </div>
        <div>
            <input type="text" placeholder="비밀번호" name="password" value={inputValue.password} onChange={handleInputOnChange} onKeyDown={handleInputOnKeyDown}/>
            <span>{inputMessage.password}</span>
        </div>
        <button disabled={signinButtonDisabled} onClick={handleSignupOnClick}>로그인</button>
    </>
}

export default Auth02;