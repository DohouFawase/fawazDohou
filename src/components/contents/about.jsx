import { ABOUT_ME } from "../constant";
import {motion}  from "framer-motion"

export default function About() {
    return (
        <>
        <div className="">
            <h1 className="my-20 text-center text-4xl playfair-display">Apropos 
                 <span className="text-neutral-500">de Moi</span>
            </h1>
            <div className="flex flex-wrap items-center">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:1, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex items-center justify-center">
                            <img src="hn.jpg" alt="" />
                        </div>
                </motion.div>
                <motion.div
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:1, x:100}}
                 transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                   <div className="flex justify-center  lg:justify-start">
                        <p className="max-w-xl py-6">{ABOUT_ME}</p>
                   </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}