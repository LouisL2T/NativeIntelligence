import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

export function BlurText({ text, delay = 100, className = '' }) {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <h1 ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: (delay / 1000) + (i * 0.1),
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
