import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("AccessToken");
    if(!!accessToken){
        config.headers.Authorization = `Bear ${accessToken}`;
    }
    return config;
});

// 전역 상태 관리(서버) - 서버 응답 데이터 캐싱
function ReactQuery01(){
    const queryClient = new QueryClient();

    return <QueryClientProvider client={queryClient}>
        <Box1></Box1>
        <Box2></Box2>
    </QueryClientProvider>
}

export default ReactQuery01;

function Box1(){
    const principalQuery = useQuery({
        queryKey: ["principalQuery"],
        queryFn: async () => {
            // axios 함수가 무조건 여기 들어가야함
            return await api.get("api/auth/principal");
        },
    });

    console.log(principalQuery.isLoading);
    console.log(principalQuery.data);

    return <div>
        
    </div>
}

function Box2(){
    const principalQuery = useQuery({
        queryKey: ["principalQuery"],
        // 위의 쿼리와 key값이 동일하니 실행되지 않는다.
        // principalQuery라는 캐싱 데이터가 저장되어 있어서 그걸 그대로 가지고 온다.
        queryFn: async () => {
            return await api.get("api/auth/principal");
        },
    });
 
    console.log(principalQuery.isLoading);
    console.log(principalQuery.data);

    return <div>

    </div>
}