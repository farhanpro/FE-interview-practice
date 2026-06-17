import { Minus ,MinusCircle,Plus, Redo, Redo2, Subscript, Undo, Undo2} from "lucide-react";
import { Button } from "../ui/button";
import { useCallback, useState } from "react";


// const Conunter =()=>{
//   const [history,setHistory] = useState([0]);
//   const [position,setPosition] = useState(0);
//   const currentValue = history[position];

//    const addValueToHistory =(newValue)=>{
//     console.log("Adding Value to History",newValue);
//     //remove if any future history if we have gone back and created a new branch
//     const newHistory = history.slice(0,position +1);
//     console.log("New History",newHistory);
//     setHistory([...newHistory,newValue]);
//     setPosition(position +1);
//   };

//   const decrement =()=> addValueToHistory(currentValue -1);
//   const increment = ()=> addValueToHistory(currentValue +1);
//   const undo = ()=>{if(position >0){setPosition(position -1)}}
//   const redo = ()=>{if(position < history.length -1){setPosition(position +1)}}
//   console.log(history,position);

 

  

//   return (
//   <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
  
//       <h1>Counter With Undo and Redo</h1>

//       <div className="flex flex-col mt-5 justify-center gap-4"> 

//       <div className="flex justify-center items-center">
//           <div className="text-7xl font-bold tabular-nums">
//             {currentValue}
//           </div>
//       </div>

//       <div className="flex gap-2 justify-center items-center">
//           <Button onClick={decrement}><Minus className="h-4 w-4"/></Button>
//           <Button onClick={increment}><Plus className="h-4 w-4"/></Button>
//       </div>

//       <div className="flex gap-2 justify-center items-center">
//           <Button disabled={history.length === 1} onClick={undo}><Undo className="h-4 w-4"/> Undo</Button>
//           <div className="text-sm text-muted-foreground">{position +1} /{history.length}</div>
//           <Button disabled={history.length === position + 1} onClick={redo}><Redo className="h-4 w-4"/>Redo</Button>
//       </div>

//       </div>
//   </div>   
//   )
// }


const Counter = ()=>{
  const [history,setHistory] = useState([0]);
  const [position,setPosition] = useState(0);
  const count = history[position];

  const addValueToHistory =useCallback((newValue)=>{
    let newArr = history.slice(0,position+1);
    setHistory([...newArr,newValue]);
    setPosition(prev => prev +1)
  },[position]);

  const Add =()=> addValueToHistory(count +1);
  const Sub = ()=>addValueToHistory(count -1);
  const Undo = ()=>setPosition(prev => prev -1); 
  const Redo =()=> setPosition(prev => prev +1) ;
  

  return(
    <div className="flex flex-col container bg-gray-500">
    <h1>{count}</h1>
    
    <div className="flex justify-evenly">
    <Button onClick={Sub}><Minus></Minus></Button>
    <Button onClick={Add}><Plus></Plus></Button>
    </div>

    <div className="flex justify-evenly">
    <Button disabled={position ===0} onClick={Undo}><Undo2></Undo2></Button>
    {position} / {history.length -1}
    <Button disabled={position === history.length -1} onClick={Redo}><Redo2></Redo2></Button>
    </div>

    </div>
  )
}

export default Counter;