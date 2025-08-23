import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Data from "../Skilldata/Data"
import {motion} from "framer-motion";
import styles from "../Style";
import ProgressLine from "../progresslines/Progressline";

const SkillItem = ({ technology, index, isMobile }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="flex gap-2" key={index} ref={ref}>
      <img src={technology.icon} label= {technology.name} width={isMobile ? 50 : 61} height={isMobile ? 50 : 61}/>
      {/* <ProgressLine
        index={index}
        isVisible={inView}
        isMobile={isMobile}
        label={technology.name}
        visualParts={[
          {
            percentage: technology.progress.toString().concat("%"),
            color: "#2b77e7",
          },
        ]}
      /> */}
    </div>
  );
};

const Skills = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:800px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])

  return (
    <div className="dark:bg-gray-900 dark:text-white">
    <div className='-mt-10 pt-20 dark:bg-gray-900 dark:text-white' id='Data'>

      <motion.div className='mb-16 ml-2 md:ml-90'>
        <h2 className={`${styles.sectionHeadText}  dark:text-white`}>My Skills and Technology.</h2>
      </motion.div>

      <div className={`flex flex-row flex-wrap justify-between ml-2 md:ml-5 mr-2 md:mr-5 mb-10 md:mb-20 ${isMobile ? "gap-3" : "gap-10"}`}>
        {Data.map((Skill, index) => (
          <SkillItem key={index} technology={Skill} index={index} isMobile={isMobile} />
        ))}
      </div>

     
      
    </div>
 </div>
   
  )
}
export default Skills ;