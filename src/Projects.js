import react from 'react';
import "./Projects.css";

function Projects() {
    
    const projects = [
        {
          image: 'https://opengraph.githubassets.com/8396179…/vedic-lang/vedic',
          language: 'Rust',
          title: 'Vedic',
          description: 'Vedic is World first working Programming launguage in Sanskrit',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          image: 'https://repository-images.githubusercontent.com/314205765/0bb18d80-2b22-11eb-8f6f-ccf20c0c2679',
          language: 'JavaScript',
          title: 'Bhagavad Gita API',
          description: 'An opensource rest API on Vedic Scripture Shrimad Bhagavad Gita',
          githubLink: 'https://github.com/yourusername/project2'
        },
        {
          image: 'https://repository-images.githubusercontent.com/299325888/77f6e880-034c-11eb-8ee1-b44403c583c2',
          language: 'HTML',
          title: 'IPL Prediction',
          description: 'Predictive Analysis of an IPL Match using SVM Binary Classifier',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          image: 'https://repository-images.githubusercontent.com/302577255/baf4a800-0e84-11eb-9ccd-61f6eeec1ddb',
          language: 'HTML',
          title: 'LinkPe',
          description: 'Linkpe is a Node.js based API to generate shareable UPI Payment links',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          image: 'https://repository-images.githubusercontent.com/301684261/b94f3280-083b-11eb-84a9-dc749901f069',
          language: 'HTML',
          title: 'MovieInfo',
          description: 'Movie info app built with OMDb API that gets movie info from IMDb and Rotten Tomatoes.',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          image: 'https://repository-images.githubusercontent.com/176751084/75dfc580-1238-11eb-9ff5-7c3da715308e',
          language: 'Java',
          title: 'Shree Ganesh',
          description: 'This Astrology Android app provide solution of your life problem, based upon Krishna Jyotish Padathi.',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          image: 'https://opengraph.githubassets.com/2f30c8870e2a22d92bc4d0f3b5805254a2f8fa2f6d2e61e2390cc6b42aa014a0/PtPrashantTripathi/cloud-storage-system',
          language: 'Java',
          title: 'Cloud Storage System',
          description: 'An Online Cloud Storage System, with functionality to add/upload/modify data on the real-time cloud.',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          image: 'https://opengraph.githubassets.com/a335cde796caa2806e093167b7d0fc3bb73fb1cf53ff8380d112fc7712779bea/PtPrashantTripathi/Adhyatma',
          language: 'Php',
          title: 'Adhyatma',
          description: 'An Emotional State vedic scripture Quotes Serach Engain',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          image: 'https://opengraph.githubassets.com/a335cde796caa2806e093167b7d0fc3bb73fb1cf53ff8380d112fc7712779bea/PtPrashantTripathi/php-social-networking-site',
          language: 'Php',
          title: 'Php Social Networking Site',
          description: 'A social Networking Site for student to show there project works and skills',
          githubLink: 'https://github.com/yourusername/project1'
        },
      ];

    return (
        <div>
            <section id="projects">
                <h2>Projects And Work</h2>
                <div className="projects-cards-container">
                    {projects.map((project, index) => (
                        <div className="projects-card" key={index}>
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