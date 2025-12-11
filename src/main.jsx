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
import UseEffect04 from './ch03/UseEffect04';
import Axios01 from './ch04/Axios01';
import Promise01 from './ch04/Promise01';
import Axios02 from './ch04/Axios02';
import Axios03 from './ch04/Axios03';
import Axios04 from './ch04/Axios04';
import Auth01 from './ch05/Auth01';
import Auth02 from './ch05/Auth02';
import Router01 from './ch06/Router01';
import Router02 from './ch06/Router02';
import Router03 from './ch06/Router03';
import Router04 from './ch06/Router04';
import Router05 from './ch06/Router05';
import Css from './ch07/Css';
import Zustand01 from './ch08/Zustand01';
import Zustand02 from './ch08/Zustand02';
import Zustand03 from './ch08/Zustand03';
import ReactQuery01 from './ch09/ReactQuery01';
import ReactQuery02 from './ch09/ReactQuery02';

const appObj = {
    ch01: <App01 />,
    ch02: <App02 />,
    ch02_2: <App02_2 />,
    ch02_3: <App02_3 />,
    ch02_4: <App02_4 />,
    ch02_5: <App02_5/>,
    counter: <Counter/>,
    input: <Inputs/>,
    searchName: <SearchName/>,
    useEffect01: <UseEffect01/>,
    useEffect03: <UseEffect03/>,
    useEffect04: <UseEffect04/>,
    axios01: <Axios01/>,
    axios02: <Axios02/>,
    axios03: <Axios03/>,
    axios04: <Axios04/>,
    auth01: <Auth01/>,
    auth02: <Auth02/>,
    router01: <Router01 />,
    router02: <Router02 />,
    router03: <Router03 />,
    router04: <Router04 />,
    router05: <Router05 />,
    css: <Css />,
    zunstand01: <Zustand01 />,
    zunstand02: <Zustand02 />,
    zunstand03: <Zustand03 />,
    reactQuery01: <ReactQuery01 />,
    reactQuery02: <ReactQuery02 />,
    promise01: <Promise01/>,
    practice01: <App02_pr/>
} 

// 최상위 부모 객체를 id로 가져옴
// appObj.현재페이지

createRoot(document.getElementById('root')).render(appObj.reactQuery02);