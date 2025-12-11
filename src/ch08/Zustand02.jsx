import { useState } from "react";
import UserInfoBox from "./UserInfoBox";
import { useInfo } from "./store/zustandStore";

function Zustand02(){
    /**
     * 사용자 정보를 입력받은 후 확인을 눌렀을 때 UserInfoBox 컴포넌트에서 출력
     */

    const [user, setUser ] = useState({
        username:"",
        email:"",
        phone:"",
    });

    const { userInfo, setUserInfo } = useInfo();
    
    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }
    
    const handleOnClick = () => {
        setUserInfo(user);
    }

    return <div>
        <div>
            <input type="text" name="username" placeholder="사용자이름" onChange={handleOnChange}/>
            <input type="text" name="email" placeholder="이메일" onChange={handleOnChange}/>
            <input type="text" name="phone" placeholder="연락처" onChange={handleOnChange}/>
            <button onClick={handleOnClick}>확인</button>
        </div>
        <UserInfoBox />
    </div>
}

export default Zustand02;