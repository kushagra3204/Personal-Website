import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {programming} from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText}`}><span className="text-[#915eff]">Kushagra Agarwal</span></h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>Software Developer | Competitive Programmer | Student</p>
          
        </div>
      </div>
      
      <div className="xl:h-[600px] lg:h-[600px] md:h-[550px] sm:flex hidden bottom-4 absolute justify-center items-center w-full">
        <ComputersCanvas/>
      </div>
      <div className="w-full absolute flex justify-center items-center bottom-20 md:hidden xl:hidden lg:hidden sm:hidden">
        <img src={programming} className="h-[270px] w-[270px]" />
      </div>
      
      <a href='#about'>
        <div className='absolute bottom-16 w-full right-0'>
          <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='scroll-down'
          />
        </div>
      </a>
    </section>
  )
}

export default Hero