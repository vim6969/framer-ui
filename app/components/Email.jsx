"use client"
import {delay, motion} from "framer-motion"
import { useState } from "react";

let titles = [
  ["Apple's newest iPhone is here", "Watch our July event"],
  [
    "Nintendo's Newsletter for July",
    "Introducing Strike, a 5-on-5 soccer game",
  ],
  ["Your funds have been processed", "See your latest deposit online"],
  ["This Week in Sports", "The finals are heating up"],
  ["Changelog update", "Edge subroutines and more"],
  ["React Hawaii is here!", "React is the way! "],

];

const Email = () => {
    const [mails, setMails] = useState([...Array(9).keys()])
    const addMail=()=>{
        let newMail = (mails.at(-1))+1 ;
        setMails((mails)=> [...mails, newMail])
    } 

  return (
    <>
      <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-200 to-slate-800 ">
        <div className="bg-white rounded-lg h-[85vh] w-[65%]  relative left-[50%] translate-x-[-50%] top-[50%] translate-y-[5%]">
          <div className="flex">
            <div className="h-[85vh] border-r-2 border-slate-200 flex-1">
              <div className="border-b-2 border-slate-200 py-4">
                <button className="ml-6 hover:bg-slate-100 hover:cursor-pointer rounded-lg w-10 h-8 flex items-center justify-center"
                onClick={addMail}
                >
                  <svg
                    class="with-icon_icon__MHUeb"
                    data-testid="geist-icon"
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="grey"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    style={{
                      color: "var(--geist-foreground)",
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </button>
              </div>
              <div className=" overflow-scroll h-[74vh]">
                    
                {[...mails].reverse().map((mid)=>{
                    console.log(mid)
                    return(
                        <div className="py-4 px-6 hover:bg-slate-100 hover:cursor-pointer">
                        <motion.div key={mid} className=""
                            initial={{opacity:0,height:0}}
                            animate={{opacity:1, height:"auto"}}
                            transition={{duration:1, type:"spring", bounce:0.4,}}
                        >
                            <p className="text-slate-600 text-sm font-medium truncate ">{titles[mid % titles.length][0]}</p>
                            <p className="text-slate-400 text-xs truncate ">{titles[mid % titles.length][0]}</p>
                        </motion.div>

                        </div>
                        
                    )
                })}
                
              </div>
            </div>
            <div className="flex-1 mx-auto pl-10 overflow-hidden h-[85vh]">
              <div className="h-10 w-[80%] bg-slate-200 mx-0 rounded-md mt-10"></div>
              <div className="h-8 w-[60%] bg-slate-200 mx-0 rounded-md mt-4"></div>
              <div className="h-6 w-[40%] bg-slate-200 mx-0 rounded-md mt-4"></div>
              <div className="h-6 w-[50%] bg-slate-200 mx-0 rounded-md mt-4"></div>
              {[...Array(5).keys()].map((items, index) => {
                return (
                  <div key={index}
                  
                  >
                    <div className="my-8"></div>
                    <div className="h-8 w-[60%] bg-slate-200 mx-0 rounded-md mt-4"></div>
                    <div className="h-6 w-[40%] bg-slate-200 mx-0 rounded-md mt-4"></div>
                    <div className="h-6 w-[50%] bg-slate-200 mx-0 rounded-md mt-4"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Email;
