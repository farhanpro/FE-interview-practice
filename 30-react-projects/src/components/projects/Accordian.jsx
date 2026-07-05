
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


const Accordian = () =>{


const [openIndex,setOpenIndex] = useState(2);
const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];
const handleToggle =(index) =>{
    setOpenIndex(openIndex === index ? null:index)
}
    return(
        <div >
            {items.map((item,index)=>{
                return <div key={index}>
                        
                        <button onClick={()=> handleToggle(index)} className="w-full p-14 text-left bg-[#f1f1f1] border-0 border-r-4 cursor-pointer font-bold hover:bg-amber-200 ">
                        {item.title}
                       {openIndex === index ? <ChevronUp className="float-right"/>: <ChevronDown className="float-right"/>} 
                        
                        </button>
                     {openIndex === index && 
                     <div className="mb-2.5 border-2 border-r-4 bg-[#fff] border-[#ddd] text-left pl-5 ">{item.content} </div>}
                        
                        </div>
            }

            )}
        </div>
    )
}

export default Accordian;