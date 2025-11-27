import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';


const currentApp = "ch01_4";

const appObj = {
    ch01: <App01 />,
    ch01_1: <h1>ch01_1 렌더링</h1>,
    ch01_2: BoxComponent(),
    ch01_3: <BoxComponent/>,
    ch01_4: <BoxComponent></BoxComponent>,

} 

const root = document.getElementById('root');
createRoot(root).render(appObj[currentApp]);

function BoxComponent(){
    // return <div>{TitleComponent({title:"타이틀",title2:"타이틀2"})}</div>
    return <div><TitleComponent title="타이틀" title2="타이틀2"/></div>
}

// function TitleComponent(props){
//     console.log(props.title);
//     console.log(props.title2);
//     return <h1></h1>
// }

function TitleComponent({title, title2}){ // 구조분해 가능
    console.log(title);
    console.log(title2);
    return <h1>{title}</h1>
}
