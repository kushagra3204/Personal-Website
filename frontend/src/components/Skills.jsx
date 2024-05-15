import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import {sectionWrapper} from '../hoc'
import { technologies } from '../constants'
import { Tilt } from 'react-tilt'


const SkillContainer = (container) => {
  return (
    <Tilt className='lg:w-[90px] sm:w-[80px] xs:w-[70px] w-[60px] green-pink-gradient p-[1px] lg:rounded-[20px] sm:rounded-[16px] xs:rounded-[14px] rounded-[12px] shadow-card'>
      
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary lg:rounded-[20px] sm:rounded-[16px] xs:rounded-[14px] rounded-[12px] lg:h-[90px] sm:h-[80px] xs:h-[70px] h-[60px] flex justify-evenly items-center flex-col'
        >
          <img
            src={container.icon}
            title={container.name}
            alt='web-development'
            className='lg:h-16 lg:w-16 sm:h-14 sm:w-14 xs:h-12 xs:w-12 h-10 w-10 object-contain'
          />
        </div>
    </Tilt>
  );
}

const Skills = () => {
  return (
    <div>
        <motion.div 
            variants={textVariant()}
            className='mt-5'
        >
            <p className={styles.sectionSubText}>Languages & Frameworks Worked with</p>
            <h2 className={styles.sectionHeadText}>Skills</h2>
        </motion.div>
        <motion.div className='flex flex-row flex-wrap justify-center lg:gap-12 sm:gap-10 xs:gap-8 gap-6 mt-10' variants={fadeIn("","",0.1,1)}>
            {technologies.map((technology) => (
            <div key={technology.name}>
                <SkillContainer icon={technology.icon} name={technology.name}/>
            </div>
            ))}
        </motion.div>
    </div>
    
  );
}

export default sectionWrapper(Skills,"skills")