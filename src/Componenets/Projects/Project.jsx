import React from "react";
import ProjectCard from "./ProjectCard";
import Blog from "../../assets/Projects/Blog.png";
import Converter from "../../assets/Projects/Converter.png";
import Form from "../../assets/Projects/Form.png";
import Generator from "../../assets/Projects/Generator.png";
import Notes from "../../assets/Projects/Notes.png";
import Design from "../../assets/Projects/Design.png"

function Projects() {
  return (
    <div className="w-full min-h-screen py-20 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground dark:text-white">
          My Recent <span className="text-primary">Works</span>
        </h1>
        <p className="text-center text-muted-foreground dark:text-gray-300 text-lg mb-12">
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pb-10">
          <div className="w-full max-w-sm">
            <ProjectCard
              imgPath={Design}
              isBlog={false}
              title="Design-it"
              description="A full-stack web application that enables designers to connect, share, and collaborate.
Users can upload their designs to a public gallery and manage a personalized dashboard by adding a profile picture and bio."
              techstack = "ReactJS, NodeJS, ExpressJS, MongoDB, JWT for Authentication"
              
              ghLink="https://github.com/AyushSingh0320/Design-it"
              />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog-App"
              description="This project is a modern blogging platform which allows users to sign up, log in, and securely manage their accounts. Authenticated users can create, edit, and delete blog posts using a rich text editor powered by TinyMCE."
            techstack = "React , TailwindCSS , Appwrite."
              ghLink="https://github.com/AyushSingh0320/Blog-App"
              demoLink="https://blog-app-p5cj.vercel.app/"
              />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              imgPath={Notes}
              isBlog={false}
              title="Notes"
              description="A feature-rich Notes App with functionality for pinning, archiving, and deleting notes.
Utilized localStorage to persist user data across sessions, ensuring notes remain intact even after page refresh."
techstack = "HTML , TailwindCSS , Javascript."
              ghLink="https://github.com/AyushSingh0320/NOTES-APP"
              demoLink="https://notes-app-g8cs.vercel.app/"              
            />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              imgPath={Converter}
              isBlog={false}
              title="Converter"
              description="A responsive currency converter that allows users to convert between major global currencies.
Integrated with a live exchange rate API to fetch up-to-date conversion values"
techstack = "React , TailwindCSS"
              ghLink="https://github.com/AyushSingh0320/Currency-converter"
              demoLink="https://currency-converter-five-plum.vercel.app/"
            />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              imgPath={Generator}
              isBlog={false}
              title="Generator"
              description="A password generator that creates strong, random passwords based on user-defined length.
Includes customizable options to add numbers and special symbols."
              techstack = "React , TailwindCSS"
              ghLink="https://github.com/AyushSingh0320/Password-generator"
              demoLink="https://password-generator-eta-ebon-40.vercel.app/"
            />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              imgPath={Form}
              isBlog={false}
              title="Form"
              description="Basic Registration Form validation using regex."
              techstack = "HTML , CSS , Javascript"
              ghLink="https://github.com/AyushSingh0320/Form-validation"
              demoLink="https://form-validation-rosy-iota.vercel.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;