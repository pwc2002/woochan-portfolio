import React from 'react'
import { motion } from "framer-motion";

const HeightUp = () => {
  return (
    <motion.div
    className="w-[1px] bg-pureWhite mx-auto opacity-70"
    initial={{ height: "0px" }}
    animate={{ height: "35%" }}
    exit={{ opacity: 0}}
    transition={{ duration: 0.7 }}
  />
 )
}

export default HeightUp