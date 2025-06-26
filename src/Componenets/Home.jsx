import styles from "../../Style"
import Laptopimg from "../assets/about.png";
import BlurText from "./Animations/Blurtext.jsx"



function Home() {
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <section className='relative w-full mx-auto h-screen'>
      <div className={`absolute inset-0 top-[5px] max-w-7xl mx-auto flex flex-col md:flex-row gap-10 pl-8 pr-0`}>
        <div className='max-w-lg md:mt-20'>
          <BlurText
  text="Heyy there , I'm AYUSH 👋"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className = "font-bold text-[#000000] lg:text-[70px] sm:text-[55px] xs:text-[50px] text-[40px] lg:leading-[80px] mt-2 text-black"
/>
          <p className={`${styles.heroSubText} mt-6 text-secondary text-black`}>
            Software engineer based in India, specializing in technical education through hands-on learning and building applications 
          </p>
          
       <button onClick={()=>window.open("/resume.pdf", "_blank")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 transition-transform duration-300 hover:scale-110 hover:shadow-xl active:scale-95">
        Grab a copy of my Resume
      </button>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto pr-8">
          <img 
            src={Laptopimg} 
            alt="laptop" 
          style = {{}}
          />
        </div>
      </div>
    </section>
  )
}

export default Home;