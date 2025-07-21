import styles from "../Style.js"
import Laptopimg from "../assets/about.png";
import BlurText from "./Animations/Blurtext.jsx"




function Home() {
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <section className='relative w-full mx-auto h-screen overflow-y-auto dark:bg-gray-900 dark:text-white pt-10'>
      <div className=" w-full flex flex-col md:flex-row gap-10 pl-4 md:pl-30 pr-0">
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
          Currently exploring backend development through building Application.
          </p>
          
       <button onClick={()=>window.open("/Final Resume (2).pdf", "_blank")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ">
        Grab a copy of my Resume
      </button>
        
        </div>
        <div className="flex justify-end md:justify-end items-center w-full md:w-auto pr-2 pt-30">
           <img  
          src={Laptopimg} 
           alt="laptop" 
         className="w-full h-auto max-w-md md:max-w-xl md:h-[400px] object-contain mb-25 max-h-[40vh] sm:max-h-none ml-2 md:ml-25"
           />
         </div>
      </div>
      
    
    </section>
  )
}

export default Home;