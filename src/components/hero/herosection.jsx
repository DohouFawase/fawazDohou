import { HERO_CONTENT } from "../constant";
import {motion}  from "framer-motion"
const container = (delay) => ({
    hidden:{x:-100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})
export default function Hero() {
   
    return (
        <>
         <div className="w-full">
            <div className="w-full">
                <div className=" flex w-full flex-wrap">
                    <div className="w-full lg:w-1/2  flex flex-col items-center lg:items-start">
                        <motion.p 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                         className="pb-16 text-6xl font-thin tracking-tight lg:text-6xl lg:mt-16 playfair-display">Fawase DOHOU</motion.p>
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"

                         className="bg-gradiant-to-r playfair-display from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight">Fullstack Mobile & Web Developper</motion.span>
                        <motion.p 
                            variants={container(1)} 
                            initial="hidden"
                            animate="visible"
                        className="my-2 max-w-full py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
                    </div>

                    <div className="w-full lg:w-1/2 lg:p-8 my-auto  mx-auto">
                            <div className="flex justify-center w-full">
                                <img src="/futurt.jpg" alt="is not my pic" className=" " />
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}