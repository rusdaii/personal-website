import './portfolio.scss';
import { useRef, RefObject } from 'react';

import { motion, useScroll, useSpring } from 'framer-motion';

import { useProject } from '@/query/project';

import { PortfolioCard } from './portfolioCard/PortfolioCard';
import { ProjectProps } from './type';

//
//   {
//     id: 1,
//     title: 'React Commerce',
//     img: '/images/portfolio.png',
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut
//           corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.`,
//   },
//   {
//     id: 2,
//     title: 'Next.js Blog',
//     img: '/images/portfolio.png',
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut
//           corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.`,
//   },
//   {
//     id: 3,
//     title: 'Vanilla JS App',
//     img: '/images/portfolio.png',
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut
//     corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.`,
//   },
//   {
//     id: 4,
//     title: 'Music App',
//     img: '/images/portfolio.png',
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut
//           corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.`,
//   },
// ];

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

  console.log(projects);

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
