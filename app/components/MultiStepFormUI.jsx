"use client";

import { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";

const MultiStepFormUI = () => {
  const [step, setStep] = useState(1);
  useEffect(() => {}, [step]);
  return (
    <>
      <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-200 to-slate-800 ">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white translate-y-[80%]">
          <div className="flex justify-between rounded p-8">
            {[1, 2, 3, 4].map((item, index) => {
              let status = "";
              if (item == step) {
                status = "active";
              }
              if (item < step) {
                status = "complete";
              }
              if (step < item) {
                status = "inactive";
              }

              return (
                <>
                  <div className="relative">
                    <motion.div
                      animate={status}
                      variants={{
                        complete: {
                          scale: 1.2,
                          opacity: 1,
                          transition:{
                            delay: 0,
                            duration: 0.3

                          }
                          
                        },
                        active: {
                          scale: 1,
                          opacity: 0
                        },
                      }}
                      transition={{duration: 0.5, type:"tween", ease:"circOut" }}
                      className="absolute inset-0 bg-blue-200 rounded-full "
                    ></motion.div>
                    <motion.div
                      key={index}
                      initial={false}
                      animate={status}
                      transition={{ duration: 0.2 }}
                      variants={{
                        active: {
                          backgroundColor: "rgb(255,255,255)",
                          borderColor: "rgb(59 130 246)",
                          color: "rgb(59 130 246)",
                        },
                        inactive: {
                          backgroundColor: "rgb(255,255,255)",
                          borderColor: "rgb(226 232 240)",
                          color: "rgb(148 163 184)",
                        },
                        complete: {
                          backgroundColor: "rgb(59 130 246)",
                          borderColor: "rgb(59 130 246)",
                          color: "rgb(59 130 246)",
                        },
                      }}
                      className={`
                           relative border-2 border-slate-200 text-slate-400 rounded-full  w-12 h-12  bg-white  flex items-center justify-center
                        `}
                    >
                      {status == "complete" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          stroke="#fff"
                          strokeWidth={3}
                          fill="none"
                        >
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "tween",
                              ease: "easeOut",
                            }}
                            d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"
                          ></motion.path>
                        </svg>
                      ) : (
                        item
                      )}
                    </motion.div>
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
              } text-white cursor-pointer flex items-center rounded-full bg-blue-500 py-1.5 px-2 mr-4 hover:bg-blue-800`}
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
