import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router01(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/name" />
            <Route path="/age" />
        </Routes>
    </BrowserRouter>
}

function Home() {

}

function Name() {

}

function Age() {

}
export default Router01;