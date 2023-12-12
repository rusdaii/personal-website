import { RefObject, useRef } from 'react';
import './contact.scss';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

import { textVariant } from '@/lib/variants';

export const Contact = () => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={textVariant(0, 500)}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={textVariant(0, 500)}>
        <motion.h1 variants={textVariant(0, 500)}>Get In Touch</motion.h1>
        <motion.div className="item" variants={textVariant(0, 500)}>
          <h2>Mail</h2>
          <span>
            <a href="mailto:rusdaii.html@gmail.com">rusdaii.html@gmail.com</a>
          </span>
        </motion.div>
        <motion.div className="item" variants={textVariant(0, 500)}>
          <h2>Linkedin</h2>
          <span>
            <Link href="https://www.linkedin.com/in/rusdaii/" target="_blank">
              Rusydi Ahmad Azwari
            </Link>
          </span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="mailSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="-0.5 0 25 25">
            <motion.path
              strokeWidth={0.7}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992 M1.00977 
                15.39H5.00977 M1.00977 18.39H11.0098 M9.00977 21.39H19.0098C20.0706 21.39 
                21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 
                17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 
                3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 
                3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
            />
          </svg>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={8} placeholder="Message" required />
          <button type="submit">Send</button>
        </motion.form>
      </div>
    </motion.div>
  );
};
