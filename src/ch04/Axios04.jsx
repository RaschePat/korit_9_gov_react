import axios from "axios";

function Axios04(){

    // 기본주소 api로 가져오기
    const api = axios.create({
        baseURL: "http://localhost:8080"
    });

    const reqGetOnClick1 = () => {
        api.get("/req/data1?a=aaaa&b=10");
    }

    const reqGetOnClick2 = () => {

        api.get("/req/data2", {
            params: {
                a: "abc",
                b: 1000,
            },
        });
    }

    const reqGetOnClick3 = () => {
        api.get("/req/data3", {
            params: {
                name: "민석",
                age: 25,
            },
        });
    }

    // 4,5,6은 유사하니 생략
    
    const reqGetOnClick7 = () => {
        api.get("/req/abc/data7/20",{
            params:{
                name: "민석",
                age: 25,
            }
        });
    }

    const reqPostOnClick1 = () => {
        const data = {
            name: "test",
            age: 32,
            address: "test address",
        }

        // Object를 JSON으로 변환하기
        const jsonData = JSON.stringify(data);
        // JSON -> Object
        const obj = JSON.parse(jsonData);

        // 원래는 위와 같이 해야하지만 axios가 자동으로 JSON 변환
        api.post("/req/data1", data);
    }

    const reqPostOnClick2 = () => {
        api.post("/req/data2",{
            name: "김민석",
            age: 25,
        })
    }

    const reqPostOnClick3 = () => {
        // input 요소 강제 생성
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type","file");

        inputElement.onchange = (e) => {
            // e.target의 files 가져오기
            const {files} = e.target;
            // files의 첫번째 요소 꺼내오기
            const [file] = files;
        
            // JSON이 아닌 FormData라는 것을 직접 만들어 사용한다.
            const formData = new FormData();
            // append내의 키값과 컨트롤러의 MultipartFile의 변수명을 맞춰야한다.
            formData.append("file", file);

            // 맨 뒤에 config 세팅을 해준다
            api.post("/req/data3", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
        }

        inputElement.click();
    }

    const reqPostOnClick4 = () => {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type","file");

        inputElement.onchange = (e) => {
            const {files} = e.target;
            const [file] = files;
        
            const formData = new FormData();
            formData.append("file", file);
            formData.append("name","김민석");
            formData.append("age",25);

            api.post("/req/data4", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
        }

        inputElement.click();
    }

    const reqPostOnClick5 = () => {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type","file");
        inputElement.setAttribute("multiple",true);

        inputElement.onchange = (e) => {
            const {files} = e.target;
            const fileList = Array.from(files);

            const formData = new FormData();
            // formData.append("files", fileList); (x) <-- 하나씩 추가해줘야함
            // 올바른 코드
            fileList.forEach(file => formData.append("files",file));
            
            api.post("/req/data5",formData);
        }

        inputElement.click();
    }

    const reqPutOnClick = () => {
        api.put("/req/data1/30",{
            name: "김민삼",
            age:22,
        });
    }

    const reqPatchOnClick = () => {
        api.patch("/req/data1/30",{
            name: "김민수",
        });
    }

    const reqDeleteOnClick = () => {
        api.delete("/req/data1/20",{
            data: {
                name: "김준일",
            }
        });
    }


    return <>
        <button onClick={reqGetOnClick1}>reqGet1</button> 
        <button onClick={reqGetOnClick2}>reqGet2</button> 
        <button onClick={reqGetOnClick3}>reqGet3</button> 
        <button onClick={reqGetOnClick7}>reqGet7</button>
        <button onClick={reqPostOnClick1}>reqPost1</button> 
        <button onClick={reqPostOnClick2}>reqPost2</button> 
        <button onClick={reqPostOnClick3}>reqPost3</button> 
        <button onClick={reqPostOnClick4}>reqPost4</button> 
        <button onClick={reqPostOnClick5}>reqPost5</button> 
        <button onClick={reqPutOnClick}>reqPut</button>
        <button onClick={reqPatchOnClick}>reqPatch</button>
        <button onClick={reqDeleteOnClick}>reqDelete</button>
    </>
}

export default Axios04;