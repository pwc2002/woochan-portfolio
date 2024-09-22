"use client";

import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
    delay?: number;
    children: ReactNode;
}

const SlideUp = ({ delay = 0, children }: SlideUpProps) => {
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay, duration: 0.7 }}
            onViewportEnter={() => {
                if (!hasAnimated) {
                    setHasAnimated(true);
                }
            }}
        >
            {children}
        </motion.div>
    );
}

export default SlideUp;
