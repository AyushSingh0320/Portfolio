import React , {useEffect} from 'react';
import Design from "../../assets/Projects/Design.png"
import Blog from "../../assets/Projects/Blog.png";
import { useLocation } from 'react-router-dom';

function ProjectDesc() {
  const location = useLocation();
  
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Get project ID from current path
  const projectId = location.pathname.replace('/projectdesc', '');

//   Project data
  const projectData = {
    "Design-it": {
      imgPath: Design,
      title: "Design-it",
      description: (
        <>
          <p>1. Developed a full-stack platform for Designers that serves 20+ RESTful API endpoints with JWT authentication.Implemented the Like/Unlike feature, and a real-time messaging system.</p>
          <p>2. Built scalable backend architecture with MongoDB database featuring 6 optimized collections, with complex MongoDB aggregation pipelines for like counting, user statistics, and filtering, and integrated Cloudinary API for secure file uploads with automatic image optimization and CDN delivery. Implemented compound indexes (sender-receiver-createdAt, receiver-isRead) for efficient message queries.</p>
          <p>3. Deployed production application on Digitalocean Droplets using Nginx reverse proxy, PM2 process management for zero-downtime restarts, SSL/TLS encryption, and MongoDB Atlas cloud database.</p>
          <p> 
            4. Implemented advanced frontend features, including responsive design across all devices, real-time like/unlike functionality with optimistic UI updates,dynamic filtering system with URL synchronization.
          </p>
          <p> 
            5. Use Email: DemoUser@gmail.com and Password: DemoUser123 at the time of Login to see all functionalities.
          </p>
          <p> 
            Tech Stack: <br/>
                        <span>Frontend - React.js , TailwindCSS. </span> <br />
                        <span>Backend - Node.js , Express.js , MongoDB , JWT (For Authentication).</span> <br />
                        <span>Cloud - DigitalOcean , MongoDB Atlas cloud database. Cloudinary.</span>
          </p>

        </>
      ),
      githubLink: "https://github.com/AyushSingh0320/Design-it",
      liveLink: "https://design-it.live/",
    },
    "Blog-App": {
       imgPath: Blog,
      title: "Blog-App", 
      description: <>
      <p>
        1.Built a blogging platform that allows users to sign up, log in, and securely manage their accounts.
      </p>
        <p>
          2. Authenticated users can create, edit, and delete blog posts using a rich text editor powered by TinyMCE, supporting images and advanced formatting.
        </p>
        <p>
          3. Used Appwrite as backend for Authentication, database, and file storage services, ensuring data security and scalability.
        </p>
        <p>
          4. Implemented state management with Redux Toolkit for efficient handling of user sessions and blog data.
        </p>
        <p>
          5. Designed a responsive UI with Tailwind CSS, ensuring optimal user experience across devices.
        </p>
        <p>
          Tech Stack: <br/>
          <span>Frontend - React.js , Redux Toolkit , TailwindCSS. </span> <br />
          <span>Backend - Appwrite (For Authentication, Database and Storage).</span> <br />
        </p>
     
      </>,
      githubLink: "https://github.com/AyushSingh0320/Blog-App",
      liveLink: "https://blog-app-p5cj.vercel.app/"
    },
    "Notes": {
      title: "Notes",
      description: "A feature-rich Notes App with functionality for pinning, archiving, and deleting notes. Utilized localStorage to persist user data across sessions, ensuring notes remain intact even after page refresh.",
      techStack: ["HTML", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/AyushSingh0320/NOTES-APP",
      liveLink: "https://notes-app-g8cs.vercel.app/"
    },
    "Currency Converter": {
      title: "Currency Converter",
      description: "A responsive currency converter that allows users to convert between major global currencies. Integrated with a live exchange rate API to fetch up-to-date conversion values",
      techStack: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/AyushSingh0320/Currency-converter",
      liveLink: "https://currency-converter-five-plum.vercel.app/"
    },
    "Password Generator": {
      title: "Password Generator",
      description: "A password generator that creates strong, random passwords based on user-defined length. Includes customizable options to add numbers and special symbols.",
      techStack: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/AyushSingh0320/Password-generator",
      liveLink: "https://password-generator-eta-ebon-40.vercel.app/"
    },
    "Form Validation": {
      title: "Form Validation",
      description: "Basic Registration Form validation using regex.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/AyushSingh0320/Form-validation",
      liveLink: "https://form-validation-rosy-iota.vercel.app/"
    }
  };

  const project = projectData[projectId];

  return (
    <div className="w-full min-h-screen py-20 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <img   
           src={project.imgPath} 
          alt="card-img" 
          className="w-full h-full object-cover"
        />
          <h1 className="text-4xl font-bold mt-3 mb-6 text-gray-900 dark:text-white">
            {project.title}
          </h1>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>
          
          
          <div className="flex gap-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              View on GitHub
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDesc;