"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface LengthUpProps {
  delay?: number;
}

const LengthUp = ({ delay = 0 }: LengthUpProps) => {
  const [hasAnimated, setHasAnimated] = useState(true);

  return (
    <motion.div
      className="border-solid border-pureWhite opacity-70 h-[1px] bg-white"
      initial={{ width: 0 }}
      transition={{
        delay: delay,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 40,
      }}
      animate={hasAnimated ? { width: "100%" } : {}}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
    />
  );
};

export default LengthUp;
