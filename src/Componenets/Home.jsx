import styles from "../Style.js"
import Laptopimg from "../assets/about.png";
import BlurText from "./Animations/Blurtext.jsx"
import Lanyard from "./Animations/Lanyard";
import { useEffect } from "react";






function Home() {
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
useEffect(() => {
  window.scrollTo(0, 0);
}, []);



  return (
    
    <section className='relative w-full mx-auto h-screen overflow-hidden dark:bg-gray-900 dark:text-white pt-16 md:pt-5 md:pl-5'>
      <div className="w-full flex flex-col md:flex-row gap-10 pl-4 md:pl-8 pr-0 relative md:ml-10 h-full">
        <div className='max-w-lg md:mt-20'>
          <BlurText
          text="Heyy there , I'm AYUSH 👋"
          delay={150}
          animateBy="words"
          direction="top"
         onAnimationComplete={handleAnimationComplete}
          className = "font-bold text-[#000000] lg:text-[70px] sm:text-[55px] xs:text-[50px] text-[40px] lg:leading-[80px] mt-2 text-black"
/>
          <p className={`${styles.heroSubText} mt-6 text-secondary text-black   dark:text-white`}>
          Aspiring Web Developer with a passion for building and learning.
          On a journey to become a skilled full-stack developer,
          through building beautiful and functional Software.
          <br />
          <br />
          Nothing excites me more than working on something that people enjoy seeing and using.
          </p>
          
       <button onClick={()=>window.open("F_RESUME.pdf", "_blank")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ">
        Grab a copy of my Resume
      </button>
        
        </div>
        {/* Lanyard for md+ screens, overlay only on right side */}
        <div className="absolute top-0 right-0 h-full w-1/2 flex items-center pointer-events-none z-20">
          <div className="hidden md:flex flex-1 justify-end items-center w-full md:w-auto pr-2 ml-8 z-10 pointer-events-auto mr-30 pt-20">
            <Lanyard position={[0, 0 , 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
        {/* Laptop image for small screens */}
        <div className="block md:hidden flex-1 flex justify-center items-center w-full pr-2 pt-8 max-h-full overflow-hidden">
          <img  
            src={Laptopimg} 
            alt="laptop" 
            className="w-full h-auto max-w-xs object-contain max-h-[50vh]"
          />
        </div>
      </div>
    </section>
  )
}

export default Home;