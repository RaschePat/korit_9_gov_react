/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";

const box1 = css`
    width: 100px;
    height: 100px;
    background-color: skyblue;
`

const box2 = () => {
    return css`
        width: 100px;
        height: 100px;
        background-color: darkcyan;
    `
}

const box3 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
`;

const box4 = (position) => css`
    width: 100px;
    height: 100px;
    background-color: darkcyan;
    transform: translate(${position}px, 0px);
    transition: all 0.3s;
`;

const container = () => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 600px;
        border: 1px solid black;
        margin-bottom: 100px;
    `
}

const buttonContainer = () => {
    return css`
        display: flex;
        flex-direction: column;

        width: 100px;
        height: 100px;
        border: 1px solid black;
        margin-bottom: 50px;
        overflow: hidden;
        gap: 0px;
    `
}

const btn_top = () => {
    return css`
        display:flex;
        align-items:center;
        justify-content: center;
    `
}

const btn_mid = () => {
    return css`
        display:flex;
        justify-content: space-between;
    `
}


const btn_low = () => {
    return css`
        display:flex;
        align-items:center;
        justify-content: center;
    `
}

const btn = () => {
    return css`
        text-align:center;
        border: none;
        outline: none;
        background-color: inherit ;
        font-size: 23px;
    `
}


const box5Container = () => {
    return css`
        width: 400px;
        height: 400px;
        border: 1px solid black;
    `
}

const box5 = (x_position, y_position) => css`
    width: 100px;
    height: 100px;
    background-color: skyblue;
    transform: translate(${x_position}px, ${y_position}px);
    transition: all 0.5s linear;
`;

function Css02(){
    const [ color, setColor ] = useState("skyblue");
    const [ position, setPosition] = useState(0);
    const [ xPosition, setXPosition] = useState(150);
    const [ yPosition, setYPosition] = useState(150);
    

    const handleMoveOnClick = () =>{
        setPosition(position === 0 ? 200 : 0);
    }

    return <>
        <button onClick={() => setColor("red")}>빨</button>
        <button onClick={() => setColor("orange")}>주</button>
        <button onClick={() => setColor("yellow")}>노</button>
        <button onClick={() => setColor("skyblue")}>기본</button>
        <div css={box1}></div>
        <div css={box2()}></div>
        <div css={box3(color)}></div>
        <div>
            <button onClick={handleMoveOnClick}>이동</button>
        </div>
        <div css={box4(position)}></div>

        <div css={container}>
            <div css={buttonContainer}>
                <div css={btn_top}>
                    <button css={btn} onClick={() => setYPosition(0)}>🔼</button>
                </div>
                <div css={btn_mid}>
                    <button css={btn} onClick={() => setXPosition(0)}>◀️</button>
                    <button css={btn} onClick={() => setXPosition(300)}>▶️</button>
                </div>
                <div css={btn_low}>
                    <button css={btn} onClick={() => setYPosition(300)}>🔽</button>
                </div>
            </div>
            <div css={box5Container}>
                <div css={box5(xPosition, yPosition)}></div>
            </div>
        </div>
    </>
}

export default Css02;