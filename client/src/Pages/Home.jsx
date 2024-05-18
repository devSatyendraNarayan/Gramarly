import React, { useContext } from "react";
import { Context } from "../Context/Context";
import InputSection from '../Component/InputSection'





function Home() {

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
   <>
   <div className="">
   <InputSection/>
  
   </div>
 
  
   </>
  )
}

export default Home