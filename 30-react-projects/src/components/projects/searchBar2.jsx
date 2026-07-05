import { useEffect, useState,useRef } from "react"

const SearchBar2 = ()=>{

    const [input,setInput] = useState('');
    const [results,setResults] = useState([]);
    const reference = useRef(null);
    const [isOpen,setIsOpen] = useState(false);

   

    const getData = async ()=>{
        if(input === '') return;

        const fetchData = await fetch('https://dummyjson.com/recipes/search?q='+ input);
        const json = await fetchData.json();
        console.log(json);
        setResults(json.recipes);
    }

    useEffect(()=>{
        let timerID =setTimeout(getData,300);

        return()=> clearTimeout(timerID)
        //  getData();    
    },[input])



    

    return (
        <div className="container">
            <h1>Auto Complete</h1>
            <div className=" flex flex-col justify-center-safe ">
            <input 
            className="w-[650px] h-5.5 border-2 m-auto mt-2.5 border-black"
            onChange={(e)=>setInput(e.target.value)} 
            onFocus={()=>setIsOpen(!isOpen)}
            onBlur={()=>setIsOpen(!isOpen)}
            value={input}  placeholder="Seacrh Input"/>
            {
                isOpen &&
                  <div ref={reference} className="w-[650px] h-[355px] overflow-scroll m-auto  mt-1 border-2 border-black  border-r-2 ">
            {results.map((item)=><span className="block hover:bg-amber-300 pointer-coarse:" key={item.id}>{item.name}</span>)}
            </div>
            }
              
            </div>
            
        </div>
    )
}

export default SearchBar2