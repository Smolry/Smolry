import "./App.css";
import aboutImg from "./img/img2.JPG";
import befit from "./img/befit.png";
import PFT from "./img/personal-finance-tracker.png";
import PMT from "./img/project-management-tool.jpg";

function App() {
  const openSafe = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="App">
      <nav className="navbar">
        <h1 className="brand">logo</h1>
        <div className="toggle-btn">
          <span></span>
          <span></span>
        </div>
        <ul className="links-container">
          <li className="links-item">
            <a href="#home" className="link active">home</a>
          </li>
          <li className="links-item">
            <a href="#project-section" className="link">projects</a>
          </li>
          <li className="links-item">
            <a href="#about-section" className="link">about</a>
          </li>
          <li className="links-item">
            <a href="#contact-section" className="link">contact</a>
          </li>
        </ul>
      </nav>

      {/* HOME */}
      <section className="home" id="home">
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="highlight">hi, </span>i am aniket
          </h1>
          <p className="info">Lets connect and inspire each other.</p>
          <a href="#contact-section" className="btn">contact</a>
        </div>

        <div className="banner-svg" style={{ width: "100%", margin: "32px 0" }}>
          <svg
            viewBox="0 0 900 220"
            width="100%"
            height="220"
            style={{ borderRadius: "16px", display: "block" }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="bannerGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#232526" />
                <stop offset="100%" stopColor="#2EA043" />
              </linearGradient>
            </defs>
            <rect width="900" height="220" fill="url(#bannerGradient)" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="48"
              fontWeight="bold"
              fill="#fff"
              style={{ letterSpacing: "2px", fontFamily: "inherit" }}
            >
              Hi, I'm Aniket
            </text>
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about-section">
        <h2 className="heading">
          about <span className="highlight">me</span>
        </h2>
        <p className="sub-heading">Curious and striving</p>
        <div className="separator"></div>

        <div className="about-me-container">
          <div className="left-col">
            <img src={aboutImg} className="about-image" alt="Aniket profile" />
          </div>
          <div className="right-col">
            <p className="about-para">
              I am a curious individual who likes to learn by experimenting.
              Although I have interest in many fields, softwares, applications,
              and large scale systems is what peaks my interest.
            </p>
            <a
              href="https://smolry.github.io/resume/resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              download cv
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="project-section">
        <h2 className="heading">Projects</h2>
        <div className="separator"></div>

        <div className="project-container">

          {/* Project 1 */}
          <div className="project-card">
            <div
              className="project-preview"
              onClick={() => openSafe("https://project-management-tool-sigma-snowy.vercel.app/")}
            >
              <img src={PMT} alt="Project Management tool" />
              <div className="overlay">Click to open</div>
            </div>

            <div
              className="project-info"
              onClick={() => openSafe("https://project-management-tool-sigma-snowy.vercel.app/")}
            >
              <h3>Project Management Tool</h3>
              <p>React, Express, Node.js, MongoDB, Auth0</p>
              <div className="project-links">
                <a href="https://github.com/smolry/project-management-tool/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://project-management-tool-sigma-snowy.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div
              className="project-preview"
              onClick={() => openSafe("https://personal-finance-tracker-smolry.streamlit.app/")}
            >
              <img src={PFT} alt="Personal Finance Tracker" />
              <div className="overlay">Click to open</div>
            </div>

            <div
              className="project-info"
              onClick={() => openSafe("https://personal-finance-tracker-smolry.streamlit.app/")}
            >
              <h3>Personal Finance Tracker</h3>
              <p>Python, Streamlit, SQLite</p>
              <div className="project-links">
                <a href="https://github.com/smolry/Personal-Finance-Tracker/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://personal-finance-tracker-smolry.streamlit.app/" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div
              className="project-preview"
              onClick={() => openSafe("https://befit.infinityfreeapp.com/")}
            >
              <img src={befit} alt="Gym Management System" />
              <div className="overlay">Click to open</div>
            </div>

            <div
              className="project-info"
              onClick={() => openSafe("https://befit.infinityfreeapp.com/")}
            >
              <h3>Gym Management System</h3>
              <p>PHP, MySQL, HTML, CSS</p>
              <div className="project-links">
                <a href="https://github.com/smolry/befit/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://befit.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-container" id="contact-section">
        <h2 className="heading">
          Contact <span className="highlight">Me</span>
        </h2>
        <div className="separator"></div>

        <ul className="contact-list">
          <li>
            <strong>Email:</strong> aniket.behera.0301@gmail.com
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/aniket-behera-6a1192231/" target="_blank" rel="noopener noreferrer">
              Aniket Behera
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/Smolry/" target="_blank" rel="noopener noreferrer">
              Smolry
            </a>
          </li>
          <li>
            <strong>Address:</strong> Pune, India 411013
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
