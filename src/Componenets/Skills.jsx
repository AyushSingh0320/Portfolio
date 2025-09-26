// import { useState } from "react"
// import { useInView } from "react-intersection-observer"
import Data from "../Skilldata/Data"
// import {motion} from "framer-motion";
import styles from "../Style";
import body from "../assets/biceps.png";


const SkillItem = ({ technology, index, isMobile }) => {
  // const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="flex gap-4" key={index} >
      <img src={technology.icon}  width={isMobile ? 50 : 61} height={isMobile ? 50 : 61}/>
    <div className="mt-4"> {technology.name} </div>
    </div>
  );
};

const Skills = () => {

  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width:800px)')
  //   setIsMobile(mediaQuery.matches)

  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches)
  //   }

  //   mediaQuery.addEventListener('change', handleMediaQueryChange)
  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQueryChange)
  //   }
  // },[])

  return (
    <div className="dark:bg-gray-900 dark:text-white">
    <div className='-mt-10 pt-20 dark:bg-gray-900 dark:text-white' id='Data'>

      <div className='mb-16 mr-2 md:ml-90 flex items-center gap-4'>
        <img
          className="w-20 h-20"
          src={body}
          altText="Ayushskill"
        />
        <h2 className={`${styles.sectionHeadText} dark:text-white`}>
          My Skills and Technology.
        </h2>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 ml-2 md:ml-5 mr-2 md:mr-5 mb-10 md:mb-20`}>
        {Data.map((Skill, index) => (
          <SkillItem key={index} technology={Skill} index={index}  />
        ))}
      </div>

     
      
    </div>
 </div>
   
  )
}
export default Skills ;