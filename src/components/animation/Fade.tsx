import React, { ReactNode } from 'react'
import {motion } from "framer-motion";

interface FadeProps {
    delay?: number;
    children: ReactNode;
  }

const Fade = ({delay = 0, children} : FadeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: delay}}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>  )
}

export default Fade