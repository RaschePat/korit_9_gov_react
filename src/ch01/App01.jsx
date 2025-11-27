import JSXStudy from "./JSXStudy";

function App01(){
    const currentComponent = 1;

    const componentObj = {
        1: <JSXStudy />
    }

    return componentObj[currentComponent];
}

export default App01;