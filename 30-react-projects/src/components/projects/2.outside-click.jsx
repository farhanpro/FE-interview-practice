import { ChevronDown } from "lucide-react";
import { useState ,useRef, useEffect} from "react"
import { Button } from "../ui/button";

const ClickOutsideDropdown = () =>{
const [isOpen,setIsOpen] = useState(false);
const dropDownRef = useRef(null);
const toggleDropdown = () => setIsOpen(!isOpen);

useEffect(()=>{
  if(!isOpen) return;

 
      document.addEventListener('mousedown',(event)=>{
    if(dropDownRef.current && !dropDownRef.current.contains(event.target))
    {
       console.log(event.target,dropDownRef.current);
        setIsOpen(false);
      }
  });

  return ()=>{document.removeEventListener('mousedown',(event)=>{
    if(dropDownRef.current && !dropDownRef.current.contains(event.target))
    {
     //  console.log(event.target,dropDownRef.current);
        setIsOpen(false);
      }
  })};
 },[isOpen])


return(
  <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
  
    <h1> Close Dropdown  on Outside Click</h1>
    <div className="relative mt-6" ref={dropDownRef}> 
      <Button  onClick={toggleDropdown} variant={'outlined'} className={'w-full justify-between'}>
        Select an Option
        <ChevronDown className={`ml-2 h-4 w-4  ${isOpen ? 'rotate-180' :''}`}/>
      </Button>
      { isOpen &&(
        <div className="absolute mt-2 w-full rounded-md border bg-background z-10 shadow-lg"> 
          <div className="py-1" onClick={toggleDropdown}>
          {
            [`Option 1`,`Option 2`,`Option 3`].map((option,index)=>(
              <button key={index} className="block w-full px-4 py-2 text-left text-sm hover:bg-mutate ">{option}</button>
            ))
          }
          </div>
        </div>
      )}
    </div>
  
  </div>
)


}
export default ClickOutsideDropdown;