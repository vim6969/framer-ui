"use client";

import { useEffect, useState } from "react";

const MultiStepFormUI = () => {
  const [step, setStep] = useState(1);
  useEffect(()=>{

  },[step])
  return (
    <>
      <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-200 to-slate-800 ">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white translate-y-[80%]">
          <div className="flex justify-between rounded p-8">
            {[1, 2, 3, 4].map((item, index) => {
               let status = ""
               if(item == step){
                status = "active"
               }
               if(item < step){
                status = "complete"
               }
               if(step < item ){
                status = "inactive"
               }
               
                
              return (

                <>
                  <div
                    key={index}
                    className={
                        
                        `
                        ${status == "active"? "border-2 border-blue-500 rounded-full  w-12 h-12  bg-white text-blue-500 flex items-center justify-center":
                        status == "complete"? "bg-blue-500 rounded-full  w-12 h-12  text-blue-500 flex items-center justify-center": 
                         "border-2 border-slate-200 text-slate-200 rounded-full  w-12 h-12  bg-white  flex items-center justify-center"}
                        `}
                  >
                    {item}
                  </div>
                </>
              );
            })}
          </div>
          <div className="px-8 pb-8">
            <div className="">
              <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-5/6 rounded bg-slate-100" />
                <div className="h-4 rounded bg-slate-100" />
                <div className="h-4 w-4/6 rounded bg-slate-100" />
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between pb-4">
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700 ml-4"
            >
              Back
            </button>
            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className={`${
                step > 4 ? "pointer-events-none opacity-50" : ""
              } cursor-pointer flex items-center rounded-full bg-blue-500 py-1.5 px-2 mr-4 hover:bg-blue-800`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MultiStepFormUI;
