// import {motion} from 'framer-motion'

import styles from "../Style"
import TiltedCard from "./Animations/Tiltlecard";
import image from "../assets/IMAGE.jpg"


// import {fadeIn, textVariant} from '../utils/motion'
// import SectionWrapper from '../hoc'
// import ServiceCard from './Cards/ServiceCard'

function About() {
  return (
    <div className='min-h-screen flex flex-col dark:bg-gray-900 dark:text-white'>
      <div className='flex-1'>
        <div className='pl-6 md:-mt-10 mt-10 pt-40 pb-24' id='about'>
          <div className='flex flex-col items-start pl-2 md:pl-9'>
            <h2 className={`${styles.sectionHeadText} dark:text-white`}> Know Who <span className="text-blue-600"> I'M</span></h2>
          </div>
           
<div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-7 pl-2 md:pl-9 pr-2 md:pr-9 gap-8">
          <div id = "1"className='mt-7 text-secondary text-[17px] max-w-3xl leading-[30px] pl-2 md:pl-9'>
            <h2 className="text-3xl">Heyy! I am <span className="text-blue-600 font-bold" >Ayush singh</span> from Mumbai , India.<br/></h2><br/>
          
           I recently completed  Engineering in <span className="text-blue-600 font-bold" >Computer Science</span>. I'm passionate and fresh web developer who loves turning ideas into interactive and responsive web experiences.Had a great command  in <span className="text-blue-600 font-bold">Javascript</span> and its frameworks and
           libraries like <span className="text-blue-600 font-bold">React</span>  and <span className="text-blue-600 font-bold">Node.js</span> <br/>Currently diving deep into Node.js and Express.js through building projects.  <br/><br/>
             I&apos;m a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let&apos;s work together to bring your ideas to life!<br/><br/>
                       
          </div>
          <div className="flex-shrink-0 w-full max-w-xs md:max-w-[400px] md:mr-16 md:mb-16 mb-2">
<TiltedCard className="pb-18"
  imageSrc={image}
  altText="Ayush singh"
  containerHeight="350px"
  containerWidth="350px"
  imageHeight="350px"
  imageWidth="350px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
 
/>
</div>
          </div>
       </div>
      </div>

    </div>
  )
}
export default About;