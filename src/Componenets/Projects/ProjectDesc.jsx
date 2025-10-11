import React , {useEffect} from 'react';
import Design from "../../assets/Projects/Design.png"
import Blog from "../../assets/Projects/Blog.png";
import Notes from "../../assets/Projects/Notes.png";
import Backend from "../../assets/Projects/Backend.png"
import { useLocation , useNavigate } from 'react-router-dom';

function ProjectDesc() {
  const location = useLocation();
  const navigate = useNavigate();

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
          <p> • Developed a full-stack platform for Designers that serves 20+ RESTful API endpoints with JWT authentication.Implemented the Like/Unlike feature, and a real-time messaging system.</p>
          <p> • Built scalable backend architecture with MongoDB database featuring 6 optimized collections, with complex MongoDB aggregation pipelines for like counting, user statistics, and filtering, and integrated Cloudinary API for secure file uploads with automatic image optimization and CDN delivery. Implemented compound indexes for efficient message queries.</p>
          <p> • Deployed production application on Digitalocean Droplets using Nginx reverse proxy, PM2 process management for zero-downtime restarts, SSL/TLS encryption, and MongoDB Atlas cloud database.</p>
          <p> 
            • Implemented advanced frontend features, including responsive design across all devices, real-time like/unlike functionality with optimistic UI updates,dynamic filtering system with URL synchronization.
          </p>
          <p> 
            • Use Email: DemoUser@gmail.com and Password: DemoUser123 at the time of Login to see all functionalities.
          </p>
          <p> 
            • Tech Stack: <br/>
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
        • Built a blogging platform that allows users to sign up, log in, and securely manage their accounts.
      </p>
        <p>
          • Authenticated users can create, edit, and delete blog posts using a rich text editor powered by TinyMCE, supporting images and advanced formatting.
        </p>
        <p>
          • Used Appwrite as backend for Authentication, database, and file storage services, ensuring data security and scalability.
        </p>
        <p>
          • Implemented state management with Redux Toolkit for efficient handling of user sessions and blog data.
        </p>
        <p>
          • Designed a responsive UI with Tailwind CSS, ensuring optimal user experience across devices.
        </p>
        <p>
          • Tech Stack: <br/>
          <span>Frontend - React.js , Redux Toolkit , TailwindCSS. </span> <br />
          <span>Backend - Appwrite (For Authentication, Database and Storage).</span> <br />
        </p>
     
      </>,
      githubLink: "https://github.com/AyushSingh0320/Blog-App",
      liveLink: "https://blog-app-p5cj.vercel.app/"
    },
    "Notes": {
       imgPath: Notes,
      title: "Notes",
      description: <>
      <p>
        The Notes Application is a feature-rich web app that helps users organize their ideas and tasks efficiently. Built with JavaScript and localStorage, it ensures data persistence directly in the browser.
      </p>
        <p> 
      •	Note Management: Users can create, update, delete notes with ease.
        </p>
        <p> 
      •	Pin & Unpin: Important notes can be pinned to appear at the top.
        </p>
        <p> 
      •	Archive: Notes can be archived to declutter the main view while keeping them     accessible.
        </p>
        <p> 
      •	Delete: Users can permanently remove notes they no longer need.
        </p>
          <p> 
      •LocalStorage Integration: All notes are saved in localStorage, so data persists even   after refreshing the browser.
        </p>
         <p> 
      • Responsive UI: Clean and mobile-friendly design built with HTML, CSS.
        </p>
      </>, 
      githubLink: "https://github.com/AyushSingh0320/NOTES-APP",
      liveLink: "https://notes-app-g8cs.vercel.app/"
    },
    "Chat-Backend": {
    imgPath: Backend,
      title: "AI-Powered Chat Backend with Subscription System.",
      description:<>
    <p>
    • Built a backend system with JWT + OTP authentication, chatrooms, and AI-powered messaging using the Gemini API.
    </p>
     <p>
    • Implemented BullMQ queues for asynchronous Gemini requests and Redis caching for OTP, Chatrooms and performance optimization.
    </p>
    <p>
    • Added subscription model with Stripe Sandbox, handling upgrades/downgrades via secure webhooks.
    </p>
    <p>
    • Implemented rate limiting to restrict Basic users to 5 requests/day while Pro users get unlimited access.
    </p>
     <p>
    • Built robust error handling and validation across endpoints, ensuring consistent status codes and secure API interactions.
    </p>
    <p>
    • Delivered a Postman collection with saved responses to simplify testing and demonstrate functionality. The link attached with this project is a link of postman with response body for each and every api.
    </p>
     <p>
    • Tech Stack: Node.js, Express.js, MongoDB, JWT (For Authentication), Redis, Stripe, Gemini API.
    </p>
      </>,

      githubLink: "https://github.com/AyushSingh0320/Gemini-backend-Clone",
      liveLink: "https://security-technologist-95598416-4425624.postman.co/workspace/Ayush-Singh's-Workspace~bd694baf-6cb4-4f46-8121-336e952774e3/collection/46997584-b78b1c66-2442-4163-82b3-67f074ce8af1?action=share&creator=46997584"
    },
  };

  const project = projectData[projectId];

  return (
    <div className="w-full min-h-screen py-20 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-4xl">
         {/* <button 
          onClick={() => navigate('/')}
          className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
        >
          ← Back to Projects
        </button> */}
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