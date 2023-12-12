import './about.scss';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { textVariant, titleVariant } from '@/lib/variants';

import { Skills } from './skills/Skills';

export const About = () => {
  return (
    <div id="about" className="about flex flex-col h-full justify-center">
      <motion.div
        whileInView="animate"
        variants={titleVariant()}
        initial="initial"
        className="title flex justify-center"
      >
        <h1 className="">
          <motion.b whileHover={{ color: 'orange' }}>Innovation</motion.b> is
          the outcome of{' '}
          <motion.b whileHover={{ color: 'orange' }}>a habit</motion.b>, not a
          random act.
        </h1>
      </motion.div>

      <div
        className="content flex md:grid lg:grid-cols-2 gap-8 justify-center items-center 
      py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <div className="imageContainer flex justify-center">
          <Image
            className="image"
            src="/images/avatar.jpg"
            width={400}
            height={400}
            alt="hero"
          />
        </div>
        <motion.div
          whileInView="animate"
          variants={textVariant(200, 0)}
          initial="initial"
          className="textContainer mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            <motion.b whileHover={{ color: 'orange' }}>About Me</motion.b>
          </h1>

          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 mb-8">
            <h1 className="text-4xl font-bold text-white">
              <motion.b whileHover={{ color: 'orange' }}>Skill Set</motion.b>{' '}
            </h1>
          </div>
          <Skills />
        </motion.div>
      </div>
    </div>
  );
};
