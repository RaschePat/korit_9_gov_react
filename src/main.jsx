import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';
import App02 from './ch02/App02';
import Counter from './ch02/Counter';
import App02_pr from './practice/App02_pr';
import App02_2 from './ch02/App02_2';
import App02_3 from './ch02/App02_3';

const appObj = {
    ch01: <App01 />,
    ch02: <App02 />,
    ch02_2: <App02_2 />,
    ch02_3: <App02_3 />,
    counter: <Counter/>,
    practice01: <App02_pr/>
} 

// 최상위 부모 객체를 id로 가져옴
// appObj.현재페이지

createRoot(document.getElementById('root')).render(appObj.ch02_3);
