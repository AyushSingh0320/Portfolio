import React from "react";
import {  useNavigate } from "react-router";
import ProjectCard from "./ProjectCard";
import Blog from "../../assets/Projects/Blog.png";
import Converter from "../../assets/Projects/Converter.png";
import Form from "../../assets/Projects/Form.png";
import Generator from "../../assets/Projects/Generator.png";
import Notes from "../../assets/Projects/Notes.png";
import Design from "../../assets/Projects/Design.png"
import project from "../../assets/project.png";
// import Data from "../Skilldata/Data"
import {html , css ,javascript , reactjs , tailwind , git ,  nodejs , MySQL , Redux , MongoDB , express , postman, JWT, RestApi, cloudinary, Digitalocean, Appwrite }  from  "../../assets/skills/index.js"

function Projects() {
  const Navigate = useNavigate();
  return (
    <div className="w-full min-h-screen py-20 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
         className="w-20 h-20"
            src={project}
            alt="Projects"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground dark:text-white">
            My Recent <span className="text-primary">Works</span>
          </h1>
        </div>
        <p className="text-center text-muted-foreground dark:text-gray-300 text-lg mb-12">
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pb-10">
          <div className="w-full max-w-sm">
            <ProjectCard
              Descriptionpath="/projectdescDesign-it"
              imgPath={Design}
              isBlog={false}
              title="Design-it"
              description="Click on the image to know more about the project"
              techstack={[ {src : reactjs, name : "React"},
                           {src: tailwind, name: "Tailwind CSS"},
                           {src : nodejs, name : "Node"},
                           {src : express, name : "Express"},
                           {src : MongoDB , name : "MongoDB"},
                           {src :  git , name : "Git"} ,
                           {src :postman , name : "Postman" },
                          {src : JWT , name : "JWT" },
                          {src : RestApi , name : "RestAPI" },
                          {src : cloudinary , name : "Cloudinary"},
                          {src : Digitalocean , name : "Digitalocean"}]}
              
              ghLink="https://github.com/AyushSingh0320/Design-it"
              demoLink="https://design-it.live/"
              />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              Descriptionpath="/projectdescBlog-App"
              imgPath={Blog}
              isBlog={false}
              title="Blog-App"
              description=<>
              <p>A full-stack blog application with features for creating, editing, and managing posts with user authentication.</p> 
              For detailed description click on the image 
              </>
             techstack={[
               {src: reactjs, name: "React"},
               {src: Redux, name: "Redux"},
               {src: tailwind, name: "Tailwind CSS"},
               {src: javascript, name: "JavaScript"},
               {src: Appwrite , name: "Appwrite"}
             ]}  
              ghLink="https://github.com/AyushSingh0320/Blog-App"
              demoLink="https://blog-app-p5cj.vercel.app/"
              />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              Descriptionpath="/projectdescNotes"
              imgPath={Notes}
              isBlog={false}
              title="Notes"
              description=<>
              <p>A feature-rich Notes Application.</p>
              For detailed description click on the image 
              </>
techstack={[
  {src: html, name: "HTML"},
  {src: tailwind, name: "Tailwind CSS"},
  {src: javascript, name: "JavaScript"}
]}
              ghLink="https://github.com/AyushSingh0320/NOTES-APP"
              demoLink="https://notes-app-g8cs.vercel.app/"              
            />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
              Descriptionpath="/projects"
              imgPath={Converter}
              isBlog={false}
              title="Converter"
              description="A responsive currency converter that allows users to convert between major global currencies.
Integrated with a live exchange rate API to fetch up-to-date conversion values"
techstack={[
  {src: reactjs, name: "React"},
  {src: tailwind, name: "Tailwind CSS"}
]}
              ghLink="https://github.com/AyushSingh0320/Currency-converter"
              demoLink="https://currency-converter-five-plum.vercel.app/"
            />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
            Descriptionpath="/projects"
              imgPath={Generator}
              isBlog={false}
              title="Generator"
              description="A password generator that creates strong, random passwords based on user-defined length.
Includes customizable options to add numbers and special symbols."
              techstack={[
                {src: reactjs, name: "React"},
                {src: tailwind, name: "Tailwind CSS"}
              ]}
              ghLink="https://github.com/AyushSingh0320/Password-generator"
              demoLink="https://password-generator-eta-ebon-40.vercel.app/"
            />
          </div>

          <div className="w-full max-w-sm">
            <ProjectCard
            Descriptionpath="/projects"
              imgPath={Form}
              isBlog={false}
              title="Form"
              description="Basic Registration Form validation using regex."
              techstack={[
                {src: html, name: "HTML"},
                {src: css, name: "CSS"},
                {src: javascript, name: "JavaScript"}
              ]}
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