"use client"
import Image from "next/image";
import { useState } from "react";
import MultiStepFormUI from "./components/MultiStepFormUI";
import Email from "./components/Email";

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
          <div className="flex flex-col items-start">
          <button onClick={handleOnClick} className="hover:bg-slate-600 inline-block">Multi Step Form UI</button>
          <button onClick={handleOnClick} className="hover:bg-slate-600 inline-block">Email UI</button>

          </div>

        </div>
        <div className="rendered-ui-column">
          <p className="border-b pl-4">ui render column</p>
          {selctedUI == "Multi Step Form UI" && <MultiStepFormUI/>}
          {selctedUI == "Email UI" && <Email/>}
        </div>
      </div>

    </main>
    </>
  );
}
