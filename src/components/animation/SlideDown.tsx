import React, { ReactNode } from 'react'
import {motion } from "framer-motion";

interface SlideDownProps {
    delay?: number;
    children: ReactNode;
  }

const SlideDown = ({delay = 0, children} : SlideDownProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ delay: 0}}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>  )
}

export default SlideDown