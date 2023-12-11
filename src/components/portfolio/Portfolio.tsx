import './portfolio.scss';
import { useRef, RefObject } from 'react';

import { motion, useScroll, useSpring } from 'framer-motion';

import { useProject } from '@/query/project';

import { PortfolioCard } from './portfolioCard/PortfolioCard';
import { ProjectProps } from './type';

export const Portfolio = () => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const { data } = useProject();

  const projects: ProjectProps[] = data?.data ?? [];

  return (
    <div id="portfolio" className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Portfolio</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>

      {projects?.map((item: ProjectProps) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
};
