import './navbar.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GrGithub, GrLinkedin } from 'react-icons/gr';

// eslint-disable-next-line import-alias/import-alias
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#">rusdaii</Link>
        </motion.span>
        <div className="social">
          <motion.div whileHover={{ color: '#f48227' }}>
            <Link href="https://github.com/rusdaii" target="_blank">
              <GrGithub size={25} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: '#0077b5' }}>
            <Link href="https://www.linkedin.com/in/rusdaii/" target="_blank">
              <GrLinkedin size={25} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
