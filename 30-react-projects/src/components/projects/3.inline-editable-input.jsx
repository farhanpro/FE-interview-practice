import { Pencil } from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import { Input } from '../ui/input';

const InlineEditableInput =()=> {
const [items,setItems]= useState([
  { 
  id:1,
  text:'Hello', 
 },
 { 
  id:2,
  text:'Farhan', 
 },
]);

const [currentEditedID,setCurrentEditedID] =useState(null);
const [currentEditedValue,setCurrentEditedValue] =useState(null);
const inputRef = useRef(null)

const handleEdit = (id,text)=>{
  setCurrentEditedID(id)
  setCurrentEditedValue(text)
}

const handleBlur = ()=>{
  if(currentEditedID !==null)
  {
    saveChanges()
  }
}

const handleKeyDown = (event)=>{
  console.log(event.key);
  if(event.key === 'Enter')
  {
    saveChanges()
  }
  else if(event.key === 'Escape')
  {
    setCurrentEditedID(null )
  }
}

const saveChanges  =()=>{
  if(currentEditedID !== null)
  {
    setItems(items.map(item=> item.id === currentEditedID? {...item,text:currentEditedValue}:item))
  }
  setCurrentEditedID(null)
}

useEffect(()=>{
  if(currentEditedID !== null && inputRef.current){
    inputRef.current.focus()
  }
})

console.log(currentEditedID,currentEditedValue)


return (
  <div className='flex flex-col pt-[150px] justify-center bg-gray-50'>
    <h1 >Inline Editable Input</h1>
  
  <div className='mt-10 flex flex-col gap-4'>
    {items.map( item =>(
        currentEditedID === item.id ?<Input 
        ref={inputRef} 
        value={currentEditedValue} 
        key={currentEditedID} 
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={(e)=>{setCurrentEditedValue(e.target.value)}} className='flex justify-between items-center cursor-pointer group border-2 rounded-xl ml-4 mr-4 pl-2 pr-2 bg-gray-500'/>:
        <div onClick={()=> handleEdit(item.id,item.text)} className='flex justify-between items-center cursor-pointer group border-2 rounded-xl ml-4 mr-4 pl-2 pr-2 bg-gray-500' >
          <span className='text-white' key={item.id}  >{item.text}</span>
          <Pencil className='h-4 w-4 text-amber-50 opacity-0 group-hover:opacity-100 transition-opacity'/>
        </div>
      ))}
  </div>
  </div>
);
}

export default InlineEditableInput;