"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

interface GridExtendsProps {
  item: {
    id: number;
    title: string;
    description: string[] | string;
    svgURL: string;
  };
}

const GridExtends = ({ item }: GridExtendsProps) => {
  return (
    <motion.li
      key={item.id}
      className="w-full h-[96px] rounded-lg bg-white flex flex-col items-center justify-center cursor-pointer"
      whileHover={{ 
        scale: 1.1
      }}
      transition={{ duration: 0.3 }}
      layout
    >
      <Image src={item.svgURL} alt={item.title} width={70} height={70} />
    </motion.li>
  );
};

export default GridExtends;
