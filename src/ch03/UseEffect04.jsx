import { useEffect, useState } from "react";
import "./style.css";

function UseEffect04(){
    // num 상태
    // num 상태의 제곱 값을 화면에 출력하시오.
    // 단 num이 0일 때에는
    // '숫자를 증가시켜 결과를 확인하세요.'
    // 라는 안내 메세지를 alert로 출력하기.
    // 최솟값 0 밑으로는 내려갈 수 없음.

    const [num, setNum] = useState(0);
    const [square, setSquare] = useState(0);
    const [isZero, setZero] = useState(0);
    
    useEffect(()=>{
        setSquare(num**2);
    },[num])

    useEffect(()=>{
        setZero(square === 0);
    },[square])

    useEffect(()=>{
        if(isZero){
            setTimeout(() => {
                alert('숫자를 증가시켜 결과를 확인하세요.');
            }, 100);
        }
    }, [isZero]);

    const handleOnClick = (value) => {
        if(value < 0 && num < 1){
            return;
        }
        setNum(num + value);
        setSquare((num+value)**2);
    }

    return <>
        <h2 className="math">{num}² = {square}</h2>
        <button onClick={()=>handleOnClick(1)}>1증가</button>
        <button onClick={()=>handleOnClick(-1)}>1감소</button>
    </>
}

export default UseEffect04;