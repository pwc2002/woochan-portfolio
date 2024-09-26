import React, { ReactNode } from 'react'; 
import { motion } from 'framer-motion'; 

interface SlideDownProps { 
  delay?: number; 
  children: ReactNode; 
} 

const SlideDown = ({ children }: SlideDownProps) => { 
  return ( 
    <motion.ul 
      className="flex flex-col text-left bg-secondary bg-opacity-80 backdrop-blur-sm overflow-hidden"  
      initial={{ height: 0, opacity: 0 }} 
      animate={{ height: "auto", opacity: 1 }} 
      exit={{opacity: 0}} 
      transition={{ duration: 0.4, ease: "easeInOut" }}  
    > 
      <div className="p-4">  
        {children} 
      </div> 
    </motion.ul> 
  ); 
}; 

export default SlideDown;
