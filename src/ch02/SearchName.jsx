// input 하나를 만들고 입력된 이름과 값이 일치하는 나이를 h2태그 안에 출력하시오.
// 이름이 없으면 값 없음

import { useState } from "react"

function SearchName(){
    const profiles = [
        {
            name: "김준일",
            age: 32,
        },
        {
            name: "김준이",
            age: 33,
        },
        {
            name: "김준이",
            age: 36,
        },
        {
            name: "김준삼",
            age: 34,
        },
    ]

    const [ result, setResult ] = useState("-");
    const [ inputValue, setInputValue ] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setResult("-");
        
        for (let i = 0; i < profiles.length; i++){
            const profile = profiles[i];
            if (profile.name === e.target.value){
                setResult(profile.age);
                break;
            }
        }

        // forEach
        profiles.forEach((profile) => {
            if(profile.name === e.target.value){
                setResult(profile.age)
            }
        });

        const forEeach = (arr, fx) => {
            for (let obj of arr){
                fx(obj);
            }
        }

        // filter
        const foundProfiles = profiles.filter((profile)=>{
            return profile.name === e.target.value;
        });
        if (!!foundProfiles.length){
            setResult(foundProfiles[0].age)
        }

        // find
        const foundProfile = profiles.find((profile) => {
            return profile.name === e.target.value;
        });
        if(!!foundProfile){
            setResult(foundProfile.age);
        }

    }
    

    return <>
        <input type="text" value={inputValue} onChange={handleOnChange}/>
        <h2>{inputValue}: {result}세</h2>
    </>
}

export default SearchName;