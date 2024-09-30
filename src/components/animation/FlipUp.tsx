import React, { ReactNode } from 'react'
import {motion } from "framer-motion";


interface FlipUpProps {
    children : ReactNode,
    initialY : string,
    delay : number,
    className : string,
    height: string
    leading? : string

}

const FlipUp = ({ children, initialY, delay, className, height, leading } : FlipUpProps) => {
  return (
    <div className={`overflow-hidden ${height} ${leading}`}>
    <motion.h1
      className={className}
      initial={{ y: initialY }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.h1>
  </div>  )
}

export default FlipUp