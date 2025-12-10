import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from "react-router-dom";

// params - useParams()
function Router05(){
    return <BrowserRouter>
        <div>
            <Link to={"/p1/minseok/25"}>p1</Link>
            <div></div>
            <Link to={"/p2/minsoo/24"}>p2</Link>
        </div>
        <Routes>
            <Route path="/p1/:name/:age" element={<Page1 />} />
            <Route path="/p2/:name/:age" element={<Page2 />} />
        </Routes>
    </BrowserRouter>
}

function Page1() {
    // const params = useParams();
    // console.log(params);
    
    // 만약 키값을 알고 있으면? 구조분해 가능
    const { name, age } = useParams();

    return <div>
        <h3>이름 : {name}</h3>
        <h3>나이 : {age}</h3>
    </div>
}

function Page2() {
    const { name, age } = useParams();

    // 주소를 보고싶으면?
    // const location = useLocation();
    const { pathname } = useLocation();
    console.log(pathname);

    return <div>
        <h3>이름 : {name}</h3>
        <h3>나이 : {age}</h3>
    </div>
}

export default Router05;