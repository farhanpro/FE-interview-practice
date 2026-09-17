import { useEffect, useState } from "react";

const SearchBar3 = () => {

    const [input,setInput] = useState('');
    const [recipies,setRecipies] = useState([]);

    const fetchData =  async ()=>{
        const data = await fetch('https://dummyjson.com/recipes/search?q='+input);
        const json = await data.json();
        setRecipies(json.recipes)
        console.log("Data ",json.recipes)
    }

    useEffect(()=>{
            
        fetchData();
    },[input])
    return(
        <div className="container">
            <h1> Auto Complete Search Bar</h1>
            <div className="flex  justify-center">
            <input className="flex  justify-between border-2" value={input} onChange={(e)=>setInput(e.target.value)}/>

            </div>
            <div className="  justify-between  mt-2.5">
                {recipies.map((item)=>
                        <p className="border-2" key={item.id}><span className="bg-amber-200 ">{item.name}</span></p>
                )}
            </div>
        </div>
    )
}

export default SearchBar3