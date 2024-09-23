"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface SlideUpProps {
  delay?: number;
  children: ReactNode;
}

export const SlideUpScroll = ({ delay = 0, children }: SlideUpProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      transition={{ delay: delay, duration: 0.7 }}
      whileInView={{opacity:1, y:0}}
    >
      {children}
    </motion.div>
  );
};

export const SlideUpComponent = ({ delay = 0, children }: SlideUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};
