"use client";

import React, { ReactNode} from 'react';
import { motion } from 'framer-motion';

interface PopUpProps {
    delay?: number;
    children: ReactNode;
}

const PopUp = ({ delay = 0, children }: PopUpProps) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: delay,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}        >
            {children}
        </motion.div>
    );
}

export default PopUp;
