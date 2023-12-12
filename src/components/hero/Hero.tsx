import './hero.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { imageVariant, scrollButtonVariant, textVariant } from '@/lib/variants';
import { useUser } from '@/query/user';

export const Hero = () => {
  const { data } = useUser();

  const user = data?.data ?? null;

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant(-500, 0)}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant(-500, 0)}>
            RUSDI AHMAD AZWARI
          </motion.h2>
          <motion.h1 variants={textVariant(-500, 0)}>
            A Backend Developer, not yet &#128517;
          </motion.h1>
          <motion.div variants={textVariant(-500, 0)} className="buttons">
            <motion.a
              variants={textVariant(-500, 0)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              href="#portfolio"
            >
              My lastest works
            </motion.a>
            <motion.a
              variants={textVariant(-500, 0)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              href={user?.resumeUrl}
              target="_blank"
            >
              Download CV
            </motion.a>
          </motion.div>
          <motion.div variants={scrollButtonVariant()} animate="scrollButton">
            <Image src="/images/scroll.png" alt="hero" height={50} width={50} />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="imageContainer"
        animate="animate"
        initial="initial"
        variants={imageVariant(500)}
      >
        <Image
          className="heroImage"
          src="/images/hero.png"
          alt="hero"
          height={700}
          width={700}
        />
      </motion.div>
    </div>
  );
};
