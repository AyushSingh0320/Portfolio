// import {motion} from 'framer-motion'

import styles from "../Style"
import TiltedCard from "./Animations/Tiltlecard";
import image from "../assets/IMAGE.jpg"
import graduation from "../assets/graduation.png";



// import {fadeIn, textVariant} from '../utils/motion'
// import SectionWrapper from '../hoc'
// import ServiceCard from './Cards/ServiceCard'

function About() {
  return (
    <div className='min-h-screen flex flex-col dark:bg-gray-900 dark:text-white'>
      <div className='flex-1'>
        <div className='pl-6 md:-mt-10 mt-10 pt-40 pb-24' id='about'>
          <div className='flex flex-col items-start pl-2 md:pl-9'>
            <img className="w-20 h-20 mb-1"
            src = {graduation}
            altText="Ayush"
            />
            <h2 className={`${styles.sectionHeadText} dark:text-white`}> Know Who <span className="text-blue-600"> I'M</span></h2>
          </div>
           
<div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mt-7  md:pl-5 pr-2 md:pr-9 gap-8">
  <div id="1" className="mt-7 text-secondary text-[17px] max-w-3xl leading-[30px] w-full  md:pl-9 text-left ">


    <h2 className="text-3xl">Heyy! I am <span className="text-blue-600 font-bold">Ayush singh</span> from Mumbai , India.<br/></h2><br/>
    I recently completed Engineering in <span className="text-blue-600 font-bold">Computer Science</span>. Im passionate and fresh web developer who loves turning ideas into interactive and responsive web experiences.Had a great command on <span className="text-blue-600 font-bold">MERN Stack</span> through building and deploying  <span className="text-blue-600 font-bold">Full Stack Projects, </span> which has helped me understand both the <span className="text-blue-600 font-bold">frontend and backend aspects of development.</span>
    <br/><br/>
    Beyond the MERN stack, I continuously explore modern tools and technologies like <span className="text-blue-600 font-bold">Redis, Docker,</span>  and <span className="text-blue-600 font-bold"> AWS</span> to broaden my skills and build scalable, production-ready applications.    <br/><br/>
    I’m a quick learner with a problem-solving mindset, and I love <span className="text-blue-600 font-bold">stepping out of my comfort zone</span> to take on new challenges that <span className="text-blue-600 font-bold">push me to grow.</span> 
    My ultimate goal is to evolve into a well-rounded full-stack developer who not only writes clean and efficient code but also <span className="text-blue-600 font-bold"> creates impactful solutions that make a difference.</span>
    <br/><br/>
  </div>
  <div className="max-w-xs md:max-w-[400px] md:mr-16 md:mb-16 mb-2 mx-auto w-full flex justify-center">
    <TiltedCard className="pb-18"
      imageSrc={image}
      altText="Ayush"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
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