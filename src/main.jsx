import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';
import App02 from './ch02/App02';
import Counter from './ch02/Counter';
import App02_pr from './practice/App02_pr';
import App02_2 from './ch02/App02_2';
import App02_3 from './ch02/App02_3';
import App02_4 from './ch02/App02_4';
import App02_5 from './ch02/App02_5';
import Inputs from './ch02/Inputs';
import SearchName from './ch02/SearchName';
import UseEffect01 from './ch03/UseEffect01';
import UseEffect03 from './ch03/UseEffect03';

const appObj = {
    ch01: <App01 />,
    ch02: <App02 />,
    ch02_2: <App02_2 />,
    ch02_3: <App02_3 />,
    ch02_4: <App02_4 />,
    ch02_5: <App02_5/>,
    input: <Inputs/>,
    searchName: <SearchName/>,
    useEffect01: <UseEffect01/>,
    useEffect03: <UseEffect03/>,
    counter: <Counter/>,
    practice01: <App02_pr/>
} 

// 최상위 부모 객체를 id로 가져옴
// appObj.현재페이지

createRoot(document.getElementById('root')).render(appObj.useEffect03);
