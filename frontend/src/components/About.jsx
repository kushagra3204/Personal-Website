import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import {sectionWrapper} from '../hoc'
import { github } from '../assets'
import { linkedin } from '../assets'
import { instagram } from '../assets'
import { codechef } from '../assets'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mt-5 sm:mt-10 xs:mt-10'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("","",0.1,1)}
      >
        <p className={`${styles.sectionText} mt-4 text-secondary text-[17px] max-w-3xl `}>
          Third year CSE Undergrad Student with excellent problem solving skills and a strong ability to collaborate in a team.
          Dedicated and enthusiastic learner interested in solving real world problems. Programmer who has a
          strong interest in Competitive Programming and Software Development and wants to learn and
          explore new technologies and ready to collaborate any day - any time on new projects.
          <br/>
          Feel free to contact & to collaborate with me on any project :)
        </p>
      </motion.div>
      <motion.div className='mt-5' variants={textVariant()}>
        <h1 className={styles.sectionHeadText}>Connect</h1>
      </motion.div>
      <motion.div className='bg-tertiary rounded-[20px] py-2 px-3 min-h-[50px] flex justify-evenly items-center '
        variants={fadeIn("","",0.1,1)}
      >
        <motion.a className='p-3' variants={fadeIn("right","spring",0.1,1)} href='https://github.com/kushagra3204' target='_blank' rel="noreferrer"><img src={github} className="sm:w-16 xs:w-10" height={40} width={40}/></motion.a>
        <motion.a className='p-3'variants={fadeIn("right","spring",0.2,2)} href='https://www.linkedin.com/in/kushagra3204' target='_blank' rel="noreferrer"><img src={linkedin} className="sm:w-16 xs:w-10" height={40} width={40}/></motion.a>
        <motion.a className='p-3'variants={fadeIn("right","spring",0.3,3)} href='https://www.instagram.com/kushagra_3204/' target='_blank' rel="noreferrer"><img src={instagram} className="sm:w-16 xs:w-10" height={40} width={40}/></motion.a>
        <motion.a className='p-3'variants={fadeIn("right","spring",0.4,4)} href='https://www.codechef.com/users/kushagra_3204' target='_blank' rel="noreferrer"><img src={codechef} className="sm:w-20 xs:w-14" height={40} width={40}/></motion.a>
      </motion.div>
    </>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export default sectionWrapper(About,"about")