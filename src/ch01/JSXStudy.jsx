import { Fragment } from "react"
import Hi from "../Hello"

function JSXStudy() {

    const 닫아야함 = <input type='text' />
    const 닫아야함2 = <div></div>
    const 감싸야함 = <div><input type="text" /><input type="text" /></div>
    const 감싸야함2 =
        <Fragment>
            <div>
                <input type="text" />
                <input type="text" />
            </div>
            <div>
                <input type="text" />
                <input type="text" />
            </div>
        </Fragment>

    const 감싸야함3 =
        <>
            <div>
                <input type="text" />
                <input type="text" />
            </div>
            <div>
                <input type="text" />
                <input type="text" />
            </div>
        </>

    const a =
        <div>
            <div>
                <Hi />
                <Hi />
            </div>
            <div>
                <Hi />
                <Hi />
            </div>
        </div>
    
    const num = 10;
    const name = "김준일";
    const nums = [1,2,3,4,5];
    const names = ["준일","준이","준삼","준사","준오"];
    const tds = [
        <td>번호</td>,
        <td>이름</td>,
    ]
    
    const box = <div></div>

    // JSX 안에 변수 또는 값, 연산자를 쓰고 싶으면 {}안에 입력
    const 표현식 = <div>
        <h3>{num}</h3>
        <h3>{name}</h3>
        <div>
            {box}
        </div>
        <div>{nums}</div>
        <table>
            <thead>
                <tr>
                    {tds}
                </tr>
            </thead>
            <tbody>
                {
                    nums.map((num, index)=>{
                        return <tr>
                            <td>{num}</td>
                            <td>{names[index]}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
    
    return <>{표현식}</>
}

export default JSXStudy