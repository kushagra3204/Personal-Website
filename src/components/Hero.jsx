import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

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
      <ComputersCanvas/>

      <a href='#about'>
        <div className='absolute bottom-16 w-full flex justify-center items-center'>
            <div className='w-[32px] h-[60px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-2 h-2 rounded-full bg-white mb-1'
              />
            </div>        
        </div>
      </a>
    </section>
  )
}

export default Hero