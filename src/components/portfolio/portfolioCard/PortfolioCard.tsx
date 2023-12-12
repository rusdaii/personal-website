// eslint-disable-next-line import-alias/import-alias

import './portfolioCard.scss';
import { useRef, RefObject } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { imageVariant, textVariant } from '@/lib/variants';

// eslint-disable-next-line import-alias/import-alias
import { ProjectProps } from '../type';

export const PortfolioCard = ({ item }: { item: ProjectProps }) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="projectContainer">
        <div className="wrapper">
          <motion.div
            className="imageContainer"
            ref={ref}
            whileInView="animate"
            variants={imageVariant(-200)}
            initial="initial"
            whileTap={{ scale: 1.5, zIndex: 1 }}
          >
            <Image
              src={item.imageUrl}
              alt="portfolio"
              width={500}
              height={500}
              loading="lazy"
              quality={100}
              className="image"
              style={{ objectFit: 'contain' }}
            ></Image>
          </motion.div>
          <motion.div
            className="textContainer"
            whileInView="animate"
            variants={textVariant(500, 0)}
            initial="initial"
            style={{ y }}
          >
            <h2>{item.name}</h2>
            <p className="description">{item.description}</p>
            <div className="buttons">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
              >
                <Link href={item.demoUrl} target="_blank">
                  See Demo
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
              >
                <Link href={item.sourceUrl} target="_blank">
                  Source Code
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
