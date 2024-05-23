import React from 'react';
import './App.css';

function App() {
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
      image: 'https://opengraph.githubassets.com/4237be505f82a1e68a987225dd43a9e268a6ee32e7767382053f23ad85ceaeab/PtPrashantTripathi/cloud-storage-system',
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
  const socialMedia = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile', logo: '<i class="zmdi zmdi-facebook"></i>' }, 
    { name: 'GitHub', url: 'https://github.com/yourusername', logo: 'path/to/github-logo.png' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', logo: 'path/to/twitter-logo.png' },
    { name: 'Facebook', url: 'https://facebook.com/yourusername', logo: 'path/to/facebook-logo.png' },
    { name: 'Instagram', url: 'https://instagram.com/yourusername', logo: 'path/to/instagram-logo.png' },
    { name: 'YouTube', url: 'https://youtube.com/yourusername', logo: 'path/to/youtube-logo.png' },
    { name: 'Medium', url: 'https://medium.com/@yourusername', logo: 'path/to/medium-logo.png' }
  ];
  return (
    <div className="App">
      <div class="bg bg-img"></div>
      <header className="header">
        <div><i class="zmdi zmdi-menu"></i></div>
        <h2>Suraj Guduru</h2>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div><i class="zmdi zmdi-more-vert"></i></div>

      </header>
      <section id="about">
        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/140954256?s=400&v=4" alt="Profile-Photo" />
          <div className="card-content">
            <h2>Suraj Guduru</h2>
            <p>Developer • Otaku • Learner</p>
            <button id = "resume"><a href = "#">Download Resume</a></button>
            <button id = "contact-btn"><a href = "#">Contact</a></button>
            <p>💻 I’m Currently studying at Scaler School of Technology 🚀</p>
            <p>👨👨‍🎓 Experience Level: 0 years</p>
            <p>🧩 Interested In: Technology, Astronomy, Space</p>
            <p>💡 Equipments: Knowledge, Java, C, Python, WebDev, Backend Development</p>
            <p>⚡ Fun Fact: Prefer Chai ☕ over coffee</p>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <h2>What I Do</h2>
        <div className="portfolio-cards-container">
          <div className="portfolio-card">
            <i class="zmdi zmdi-code font-blue profile-icon"></i>
            <h3>Developer</h3>
            <p>
              I am a data engineer with 3+ years of experience working on Azure cloud. I have a strong background in ETL processes and have successfully completed multiple projects involving data ingestion, transformation, and loading. I am highly proficient in Python and have a strong understanding of SQL and data management principles. I am able to work effectively in both individual and team environments and am committed to delivering high-quality results.
            </p>
          </div>
          <div className="portfolio-card">
            <i class="zmdi zmdi-format-color-text font-green profile-icon"></i>
            <h3>Otaku</h3>
            <p>
              I am an Otaku, which is a term used to describe someone who is deeply passionate about anime and manga. As an Otaku, I have a deep appreciation for the art, storytelling, and cultural significance of these mediums. I enjoy immersing myself in the rich and diverse world of anime and manga, and I am always eager to learn more about new series and creators. My love for Otaku culture goes beyond just consuming media, as I also enjoy participating in fan communities and events, and sharing my enthusiasm with others. Being an Otaku is a big part of my identity, and I am proud to be a part of this vibrant and creative community.
            </p>
          </div>
          <div className="portfolio-card">
            <i class="zmdi zmdi-book font-yellow profile-icon"></i>
            <h3>Learner</h3>
            <p>
              I am constantly learning and growing in my field. I am passionate about creating innovative solutions and using technology to solve real-world problems. I have a strong foundation in programming languages such as Java and Python, and am always eager to expand my skillset and take on new challenges. Whether I am working on a solo project or collaborating with a team, I thrive in a fast-paced and dynamic environment. I am excited to continue my career as a developer and make a positive impact in the tech industry.
            </p>
          </div>
        </div>
      </section>
      <section id="interests">
        <h2>Interests</h2>
        <div className="interests-cards-container">
          <div className="interests-card">
            <i class="zmdi zmdi-tv font-blue interest-icon"></i>
            <h3>Movie</h3>
          </div>
          <div className="interests-card">
            <i class="zmdi zmdi-radio font-blue interest-icon"></i>
            <h3>Music</h3>
          </div>
          <div className="interests-card">
            <i class="zmdi zmdi-smartphone font-blue interest-icon"></i>
            <h3>Gaming</h3>
          </div>
          <div className="interests-card">
            <i class="zmdi zmdi-camera font-blue interest-icon"></i>
            <h3>Photography</h3>
          </div>
          <div className="interests-card">
            <i class="zmdi zmdi-library font-blue interest-icon"></i>
            <h3>Reading</h3>
          </div>
          <div className="interests-card">
            <i class="zmdi zmdi-airplane font-blue interest-icon"></i>
            <h3>Traveling</h3>
          </div>
        </div>
      </section>
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
      <section id="contact">
        <h2>Contact</h2>
        <div class="contact-card">
          <div class="social-media-links-container">
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-facebook font-white back-facebook zmdi-hc-3x"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-github font-white back-black zmdi-hc-3x"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-twitter font-white back-twitter zmdi-hc-3x"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-instagram font-white back-instagram zmdi-hc-3x"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-youtube-play font-white back-youtube zmdi-hc-3x"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-reddit font-white back-reddit zmdi-hc-3x"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-linkedin font-white back-linkedin zmdi-hc-3x"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
