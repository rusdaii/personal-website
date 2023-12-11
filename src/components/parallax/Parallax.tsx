import './parallax.scss';
import React, { RefObject, useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { ParallaxProps } from './type';

export const Parallax = ({ type }: ParallaxProps) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === 'about'
            ? 'linear-gradient(180deg, #2e0c42, #0c0c1d)'
            : 'linear-gradient(180deg, #0c0c1d, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'about' ? 'Want to know?' : 'What We Did?'}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === 'about' ? '/images/planets.png' : '/images/sun.png'
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};
