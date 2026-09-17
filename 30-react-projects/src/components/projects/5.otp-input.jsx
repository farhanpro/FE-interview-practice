import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { use } from "framer-motion/m";

function OtpInput() {
    const OTP_Digits_COUNT = 5 ;
    const [otpInput,setOtpInput] = useState(new Array(OTP_Digits_COUNT).fill(""));
    const refArr = useRef([]);

    const handleonChange =(value,index)=> {
      if(isNaN(value)) return;
      
      console.log(value);
      const newValue = value.trim();
      const newArr = [... otpInput];
      newArr[index] = newValue.slice(-1);
      setOtpInput(newArr);

     newValue &&  refArr.current[index +1]?.focus()

    }

    const handleOnKeyDown = (e,index)=>{
      if(!e.target.value && e.key === 'Backspace'){
        refArr.current[index -1]?.focus();}
      }
    

    useEffect(()=>{refArr.current[0]?.focus()},[]);

    return(
      <div className="container">
        <h1>OTP Input</h1>
        <div className="flex mt-2 justify-center">
        {otpInput.map((item,key)=><input className="w-[20px] h-[20px] border-2" value={otpInput[item]} onChange={(e)=> handleonChange(e)}/>)}

        </div>
      
      </div>  
    )
}

export default OtpInput;
