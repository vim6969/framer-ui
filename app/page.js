"use client"
import Image from "next/image";
import { useState } from "react";
import MultiStepFormUI from "./components/MultiStepFormUI";

export default function Home() {
  const [selctedUI,setSelectedUI] = useState("")
  const handleOnClick=(event)=>{
    setSelectedUI(event.target.textContent)
    console.log(event.target.textContent)
  }
  return (
    <>
    <main>
      <div className="main-layout flex">
        <div className="ui-example-column">
          <p className="border-b pl-4">ui exmaple column</p>
          <button onClick={handleOnClick}>Multi Step Form UI</button>
        </div>
        <div className="rendered-ui-column">
          <p className="border-b pl-4">ui render column</p>
          {selctedUI == "Multi Step Form UI" && <MultiStepFormUI/>}
        </div>
      </div>

    </main>
    </>
  );
}
