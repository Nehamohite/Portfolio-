import { motion } from "framer-motion";
import {hero} from '../assets';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center flex-col sm:flex-row h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 top-[120px] max-w-1/2  mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Neha</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develope 3D visuals,user <br className="sm:blocker hidden "/> interfaces and web applications</p>

        </div>
      
      </div>
      <div className="sm:w-1/2 w-[80%]">
        <img src={hero} alt="" />
      </div>
     
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
