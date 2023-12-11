import './about.scss';
import { useState, useTransition } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { imageVariant, textVariant, titleVariant } from '@/lib/variants';

import TabButton from './tabButton/TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

export const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

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
        <motion.div
          // whileInView="animate"
          // variants={imageVariant(-200)}
          // initial="initial"
          className="imageContainer flex justify-center"
        >
          <Image src="/images/avatar.jpg" width={400} height={400} alt="hero" />
        </motion.div>
        <motion.div
          whileInView="animate"
          variants={textVariant(200, 0)}
          initial="initial"
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            <motion.b whileHover={{ color: 'orange' }}>About</motion.b> Me
          </h1>

          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
