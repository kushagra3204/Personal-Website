import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from "../hoc"
import { projects } from '../constants'
import { Tilt } from 'react-tilt'
import { github } from "../assets";
import { githubBorder2 } from '../assets'

const ProjectContainer = (container) => {
  return (
    <Tilt 
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='p-[1px] rounded-2xl lg:w-[320px] sm:w-[280px] xs:w-[260px] w-[240px] green-pink-gradient'>
        <motion.div className='p-3 bg-tertiary relative w-full min-h-[230px] rounded-2xl' > 
        <hr className='absolute inset-0 flex justify-center items-center lg:mt-10 sm:mt-10 mt-9 border-1' />
        <hr className='absolute inset-0 flex justify-center items-center lg:my-14 sm:my-12 my-11 border-1' />
        <div className='absolute inset-0 flex justify-center my-4'>
          <img src={githubBorder2} className='absolute lg:h-16 lg:w-16 sm:h-14 sm:w-14 h-12 w-12'/>
        </div>
        
        <div className="absolute inset-0 flex justify-center my-7 card-img_hover">
            <div
              onClick={()=> window.open(container.links,"_blank")} className="black-gradient lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        <p className='relative lg:mt-20 sm:mt-18 xs:mt-16 mt-14 text-white font-bold lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px]'>{container.title}</p>
        <p className='relative lg:mt-4 sm:mt-3 xs:mt-3 mt-1 lg:text-[14px] sm:text-[13px] xs:text-[13px] text-[12px] '><span className='text-white font-bold '>Technologies used:</span> {container.tech}</p>
        <p className='lg:text-[14px] sm:text-[13px] xs:text-[13px] text-[12px] mt-2'><span className='text-white font-bold '>About:</span> {container.about}</p>
        </motion.div>
    </Tilt>
  );
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
          <motion.div 
            className='mt-6 gap-7 flex flex-row overflow-x-auto p-4'
            variants={fadeIn("left","spring",0.1,1)}
          >
            {projects.map((project) => (
            <div key={project.title}>
                <ProjectContainer  title={project.title} tech={project.tech} about={project.about} links={project.links}/>
            </div>
            ))}
          </motion.div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default sectionWrapper(Projects,"projects")