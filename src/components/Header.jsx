export default function Header() {
  return (
    <header>
      <div className="name">
        <h1>Cindy Tang</h1>
      </div>
      <nav>
        <ul className="nav__links">
          <li><a href="#about">Home</a></li>
          <li><a href="Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="https://www.linkedin.com/in/cindy-tang-446a35181/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/cindyt0526" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
}
