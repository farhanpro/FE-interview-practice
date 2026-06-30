import { useState,useEffect } from "react";

const searchBar = () =>{

    const [input,setInput] = useState(""); 
    const [results,setResults] = useState([]);
    const [showRes,setShowRes] = useState(false);

    const  fetchData = async()=>{
            const data =  await fetch("https://dummyjson.com/recipes/search?q="+input);
            const json = await data.json();
            setResults(json?.recipes);   
    };

    useEffect(()=>{fetchData()},[input]);

    return (
        <div className="container font-sans text-center">
            <h1>Auto Complete Search Bar</h1>
            <div className=" m-auto p-4 self-center">
                <input 
                    onFocus={()=>setShowRes(!showRes)}
                    onBlur={()=>setShowRes(!showRes)}
                    type="text" 
                    className="w-[500px]  w-2xs border-black border-1 " 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)}/>
            </div>
            { showRes &&
                <div className="w-[500px] overflow-y-scroll min-h-36 max-h-96 m-auto border-b-black  border-2 text-left ">
            {results.map((r)=><span className="block p-1 border-b-black border-1 hover:bg-amber-200" key={r.id}>{r.name}</span>)}
            </div>
             }
            
        </div>
    )
}

export default searchBar