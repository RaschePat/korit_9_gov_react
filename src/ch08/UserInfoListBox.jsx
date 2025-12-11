import { useInfoList } from "./store/zustandStore";

function UserInfoListBox(){

    const { userInfoList } = useInfoList();

    return <ul>
        {
            userInfoList.map(u => <>
                <li>사용자명: {u.username}</li>
                <li>이메일: {u.email}</li>
                <li>연락처: {u.phone}</li>
            </>)
        }
    </ul>
}

export default UserInfoListBox;