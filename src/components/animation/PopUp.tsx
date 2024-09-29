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
        className="max-w-[1050px] bg-white h-auto m-auto rounded-lg relative
        md:pb-0
        pb-10"
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
