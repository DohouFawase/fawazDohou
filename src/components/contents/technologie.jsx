import { FaLaravel, FaVuejs } from "react-icons/fa6"
import { RiReactjsLine } from "react-icons/ri"
import { SiAdonisjs } from "react-icons/si"
import { TbBrandMysql, TbBrandNextjs, TbBrandReactNative } from "react-icons/tb"

import { motion}  from "framer-motion"

const IconVariants = (duration) => ({
        initial:{y:-10},
        animate: {
            y:[10, -10],
            transition:{
                duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" 
            }
        }
})

export default function Technologie () {
    return (
            <>
            <div className="">
                <motion.h1 
                 whileInView={{opacity:1, y:0}}
                 initial={{opacity:0, y:-100}}
                 transition={{duration:1.5}}
                className="my-20 text-center text-4xl playfair-display">Stack</motion.h1>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                 className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                     variants={IconVariants(2.5)}
                     initial='initial'
                     animate="animate"
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-4xl text-cyan-400" />
                    </motion.div>

                    <motion.div
                    variants={IconVariants(3)}
                    initial='initial'
                    animate="animate"
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandNextjs className="text-4xl"/>
                    </motion.div>

                    <motion.div
                      variants={IconVariants(5)}
                      initial='initial'
                      animate="animate"
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaLaravel className="text-4xl text-red-700" />
                    </motion.div>

                    <motion.div variants={IconVariants(3)}
                      initial='initial'
                      animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiAdonisjs className="text-4xl text-cyan-400" />
                    </motion.div>

                    
                    <motion.div 
                    variants={IconVariants(1)}
                    initial='initial'
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaVuejs className="text-4xl text-green-400" />
                    </motion.div>
                    
                    <motion.div
                    variants={IconVariants(4)}
                    initial='initial'
                    animate="animate"
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandMysql className="text-4xl text-blue-800" />
                    </motion.div>

                    <motion.div 
                    variants={IconVariants(6)}
                    initial='initial'
                    animate="animate"
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandReactNative className="text-4xl text-cyan-400" />
                    </motion.div>
                </motion.div>
            </div>
            </>
      )
}
