import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar">
          <h1 className="brand">logo</h1>
          <div className="toggle-btn">
            <span></span>
            <span></span>
          </div>
          <ul className="links-container">
            <li className="links-item"><a href="#" className="link active">home</a></li>
            <li className="links-item"><a href="#project-section" className="link">project</a></li>
            <li className="links-item"><a href="#about-section" className="link">about</a></li>
            <li className="links-item"><a href="#contact-section" className="link">contact</a></li>
          </ul>
        </nav>
        <section className="home">
          <div className="hero-content">
            <h1 className="hero-heading"><span className="highlight">hi, </span>i am aniket</h1>
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
        <section className="about" id="about-section">
          <h2 className="heading">about <span className="highlight">me</span></h2>
          <p className="sub-heading">Curious and striving </p>
          <div className="seperator"></div>
          <div className="about-me-container">
            <div className="left-col">
              <img src="/img/img2.jpeg" className="about-image" alt="" />
            </div>
            <div className="right-col">
              <p className="about-para">I am a curious individual who likes to learn by experimenting, although i have interest in many fields, softwares, applications, large scale systems is what peaks my interest. </p>
              <a href="https://smolry.github.io/resume/resume.pdf" className="btn">download cv</a>
            </div>
          </div>
        </section>
        <section className="projects" id="project-section">
          <h2 className='heading'><span >Projects</span></h2>
          <div className="seperator"></div>
          <div className='project-container'>

          <div className="project-card" style={{ "--bg": "#2EA043" }}>
  <div
    className="project-preview"
    style={{ position: "relative", cursor: "pointer" }}
    onClick={() => window.open("https://project-management-tool-sigma-snowy.vercel.app/", "_blank")}
    title="Open Live Project"
  >
    <iframe
      src="https://project-management-tool-sigma-snowy.vercel.app/"
      loading="lazy"
      title="Project Preview"
      style={{ pointerEvents: "none", width: "100%", height: "100%", border: "none" }}
      onError={e => {
        e.target.style.display = "none";
        const fallback = e.target.parentNode.querySelector('.iframe-fallback-img');
        if (fallback) fallback.style.display = "flex";
      }}
    ></iframe>
    <div
      className="iframe-fallback-img"
      style={{
        display: "none",
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "#232526",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "12px",
        zIndex: 2,
      }}
    >
      <img
        src="/img/project-management-tool.png"
        alt="Project Screenshot"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "10px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.18)"
        }}
      />
      <span style={{ color: "#fff", marginTop: "12px" }}>Preview unavailable. Showing screenshot.</span>
    </div>
  </div>
  <div className="project-info" onClick={() => window.open("https://project-management-tool-sigma-snowy.vercel.app/","_blank")}>
    <h3>Project-Management-Tool</h3>
    <p>Tech Stack: React, Express, Node.js, MongoDB, Auth0 Api</p>
    <div className="project-links">
      <a href="https://github.com/smolry/project-management-tool/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://project-management-tool-sigma-snowy.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>
</div>

<div className="project-card" style={{ "--bg": "#2EA043" }}>
  <div
    className="project-preview"
    style={{ position: "relative", cursor: "pointer" }}
    onClick={() => window.open("https://personal-finance-tracker-smolry.streamlit.app/", "_blank")}
    title="Open Live Project"
  >
    <iframe
      src="https://personal-finance-tracker-smolry.streamlit.app/"
      loading="lazy"
      title="Project Preview"
      style={{ pointerEvents: "none", width: "100%", height: "100%", border: "none" }}
      onError={e => {
        e.target.style.display = "none";
        const fallback = e.target.parentNode.querySelector('.iframe-fallback-img');
        if (fallback) fallback.style.display = "flex";
      }}
    ></iframe>
    <div
      className="iframe-fallback-img"
      style={{
        display: "none",
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "#232526",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "12px",
        zIndex: 2,
      }}
    >
      <img
        src="/img/personal-finance-tracker.png"
        alt="Project Screenshot"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "10px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.18)"
        }}
      />
      <span style={{ color: "#fff", marginTop: "12px" }}>Preview unavailable. Showing screenshot.</span>
    </div>
  </div>
  <div className="project-info" onClick={() => window.open("https://personal-finance-tracker-smolry.streamlit.app/","_blank")}>
    <h3>Personal Finance Tracker</h3>
    <p>Tech Stack: Python using Streamlit library , Sqlite</p>
    <div className="project-links">
      <a href="https://github.com/smolry/Personal-Finance-Tracker/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://personal-finance-tracker-smolry.streamlit.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>
</div>

<div className="project-card" style={{ "--bg": "#2EA043" }}>
  <div
    className="project-preview"
    style={{ position: "relative", cursor: "pointer" }}
    onClick={() => window.open("https://befit.infinityfreeapp.com/", "_blank")}
    title="Open Live Project"
  >
    <iframe
      src="https://befit.infinityfreeapp.com/"
      loading="lazy"
      title="Project Preview"
      style={{ pointerEvents: "none", width: "100%", height: "100%", border: "none" }}
      onError={e => {
        e.target.style.display = "none";
        const fallback = e.target.parentNode.querySelector('.iframe-fallback-img');
        if (fallback) fallback.style.display = "flex";
      }}
    ></iframe>
    <div
      className="iframe-fallback-img"
      style={{
        display: "none",
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "#232526",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "12px",
        zIndex: 2,
      }}
    >
      <img
        src="/img/befit.png"
        alt="Project Screenshot"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "10px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.18)"
        }}
      />
      <span style={{ color: "#fff", marginTop: "12px" }}>Preview unavailable. Showing screenshot.</span>
    </div>
  </div>
  <div className="project-info" onClick={() => window.open("https://befit.infinityfreeapp.com/","_blank")}>
    <h3>Gym Management System</h3>
    <p>Tech Stack: PHP, MySql, HTML+CSS</p>
    <div className="project-links">
      <a href="https://github.com/smolry/befit/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://befit.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>
</div>

<div className="project-card" style={{ "--bg": "#2EA043" }}>
  <div
    className="project-preview"
    style={{ position: "relative", cursor: "pointer" }}
    onClick={() => window.open("https://befit.infinityfreeapp.com/", "_blank")}
    title="Open Live Project"
  >
    <iframe
      src="https://befit.infinityfreeapp.com/"
      loading="lazy"
      title="Project Preview"
      style={{ pointerEvents: "none", width: "100%", height: "100%", border: "none" }}
      onError={e => {
        e.target.style.display = "none";
        const fallback = e.target.parentNode.querySelector('.iframe-fallback-img');
        if (fallback) fallback.style.display = "flex";
      }}
    ></iframe>
    <div
      className="iframe-fallback-img"
      style={{
        display: "none",
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "#232526",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "12px",
        zIndex: 2,
      }}
    >
      <img
        src="/img/game-engine.png"
        alt="Project Screenshot"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "10px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.18)"
        }}
      />
      <span style={{ color: "#fff", marginTop: "12px" }}>Preview unavailable. Showing screenshot.</span>
    </div>
  </div>
  <div className="project-info" onClick={() => window.open("https://github.com/smolry/game-engine/","_blank")}>
    <h3>Game Engine</h3>
    <p>Tech Stack: pure python, using pygame module</p>
    <div className="project-links">
      <a href="https://github.com/smolry/game-engine/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://befit.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>
</div>
          </div>
        </section>
        <section className='contact-container' id='contact-section'>
            <h2 className="heading">Contact <span className="highlight">Me</span></h2>
            <div className="seperator"></div>
            <ul className="contact-list">
              <li>
                <strong>Email:</strong>
                <a href="mailto:aniket.behera.0301@gmail.com" style={{ marginLeft: '8px' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zm0 12H4V8.489l7.445 4.653a1 1 0 0 0 1.11 0L20 8.489V18z"/>
                  </svg>
                </a>
                aniket.behera.0301@gmail.com
              </li>
              <li>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/aniket-behera-6a1192231/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                  </svg>
                </a>
                Aniket Behera
              </li>
              <li>
                <strong>GitHub:</strong>
                <a href="https://github.com/Smolry/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                Smolry
              </li>
              <li>
                <strong>Address:</strong>
                <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Pune, India 411013
                </span>
              </li>
            </ul>
        </section>
      </div>
    </>
  );
}

export default App;
