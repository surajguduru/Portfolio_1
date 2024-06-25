import react from 'react';
import "./Projects.css";

function Projects() {
    
    const projects = [
      {
        id: 1,
        image: 'https://opengraph.githubassets.com/2f3/surajguduru/UniversityAdmissions',
        language: 'Java • SQL',
        title: 'University Admission Management System',
        description: 'A University Admission Management System built with Java and SQL that can be used to manage student admissions, courses, and faculty.',
        githubLink: 'https://github.com/surajguduru/UniversityAdmissions'
      },
        {
          id: 2,
          image: 'https://opengraph.githubassets.com/2f3/surajguduru/ECommerceStore',
          language: 'HTML • CSS • JavaScript',
          title: 'E Commerce Store',
          description: 'A basic E Commerce Store built with HTML, CSS and JavaScript along with the cart functionality.',
          githubLink: 'https://github.com/surajguduru/ECommerceStore'
        },
        {
          id: 3,
          image: 'https://opengraph.githubassets.com/2f3/surajguduru/SST-WebDev/tree/main/KanbanBoard',
          language: 'HTML • CSS • JavaScript',
          title: 'Kanban Board',
          description: 'A Kanban Board built with HTML, CSS and JavaScript that can be used to manage tasks and projects. You can also prioritize your tasks.',
          githubLink: 'https://github.com/surajguduru/SST-WebDev/tree/main/KanbanBoard1'
        },
        {
          id: 4,
          image: 'https://opengraph.githubassets.com/2f3/surajguduru/SST-WebDev/tree/main/KanbanBoard',
          language: 'HTML • CSS • JavaScript',
          title: 'Tic Tac Toe MultiPlayer',
          description: 'A simple Tic Tac Toe game built using HTML, CSS and JavaScript.',
          githubLink: 'https://github.com/surajguduru/SST-WebDev/tree/main/TicTacToe'
        },
        {
          id: 5,
          image: 'https://opengraph.githubassets.com/2f3/surajguduru/Quiz-App',
          language: 'HTML • CSS • JavaScript',
          title: 'Quiz App',
          description: 'A Quiz App built with HTML, CSS and JavaScript that can be used to conduct quizzes and tests online',
          githubLink: 'https://github.com/surajguduru/Quiz-App'
        },
        {
          id: 6,
          image: 'https://opengraph.githubassets.com/2f3/surajguduru/TerminalImageEditor',
          language: 'Java',
          title: 'Terminal based Image Editor',
          description: 'A Command Line Image Editor built with Java that can perform basic image editing operations.',
          githubLink: 'https://github.com/yourusername/project2'
        }
        // {
        //   image: 'https://opengraph.githubassets.com/2f30c8870e2a22d92bc4d0f3b5805254a2f8fa2f6d2e61e2390cc6b42aa014a0/PtPrashantTripathi/cloud-storage-system',
        //   language: 'Java',
        //   title: 'Cloud Storage System',
        //   description: 'An Online Cloud Storage System, with functionality to add/upload/modify data on the real-time cloud.',
        //   githubLink: 'https://github.com/yourusername/project1'
        // },
        // {
        //   image: 'https://opengraph.githubassets.com/a335cde796caa2806e093167b7d0fc3bb73fb1cf53ff8380d112fc7712779bea/PtPrashantTripathi/Adhyatma',
        //   language: 'Php',
        //   title: 'Adhyatma',
        //   description: 'An Emotional State vedic scripture Quotes Serach Engain',
        //   githubLink: 'https://github.com/yourusername/project1'
        // },
        // {
        //   image: 'https://opengraph.githubassets.com/a335cde796caa2806e093167b7d0fc3bb73fb1cf53ff8380d112fc7712779bea/PtPrashantTripathi/php-social-networking-site',
        //   language: 'Php',
        //   title: 'Php Social Networking Site',
        //   description: 'A social Networking Site for student to show there project works and skills',
        //   githubLink: 'https://github.com/yourusername/project1'
        // },
      ];

    return (
        <div>
            <section id="projects">
                <h2>Projects And Work</h2>
                <div className="projects-cards-container">
                    {projects.map((project) => (
                        <div className="projects-card" key={project.id}>
                            <div className="projects-card-image-container">
                                <img src={project.image} alt={project.title} className="projects-card-image" />
                            </div>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link back-black">
                                <i class="zmdi zmdi-github-alt font-white github-logo"></i>
                            </a>
                            <div className="projects-card-content">
                                <h3>{project.language}</h3>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;