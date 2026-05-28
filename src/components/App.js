import React,{useState, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import '../styles/App.css'

function App(){
    const [markdown,setMarkDown] = useState("");
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setMarkDown(e.target.value)
    }
    
    const changeLodingVar = () => {
        setLoading(false);
    }

    useEffect(()=> {
        setTimeout(changeLodingVar ,3000)
    },[]);

    if(loading){
        return (<div><h1>Loading...</h1></div>)
    }

    return(
        <div className="app">
        <textarea onChange={handleChange}/>
        <ReactMarkdown className="preview" children={markdown}/>
        </div>
    )
}

export default App

