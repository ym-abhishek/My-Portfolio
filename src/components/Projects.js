import myPic from '../assets/dashboard.png';
import itSup from '../assets/It_support.png';
import myPor from '../assets/my_portfolio.png';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">

        {/* Project Card 1: Portfolio */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="card-image" style={{ backgroundImage: `url(${myPor})` }}></div>
              <div className="card-title">
                <h4>My Portfolio</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>My Portfolio</h4>
              <p>Developed a responsive portfolio web application using React to showcase technical skills and projects.</p>
              <div className="tech-stack">
                <span>React JS</span>
                <span>Responsive UI</span>
                <span>Git and Github</span>
              </div>
              <a href="https://github.com/ym-abhishek/abhis-portfolio" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2: IT Support Troubleshooting */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="card-image" style={{ backgroundImage: `url(${myPic})` }}></div>
              <div className="card-title">
                <h4>IT Support Troubleshooting</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>Troubleshooting Project</h4>
              <p>Steps for Improving Performance, Network Speed, Login issues, and Storage issues.</p>
              <div className="tech-stack">
                <span>Troubleshooting</span>
                <span>Problem Solving</span>
                <span>Report Creation</span>
              </div>
              <a href="https://github.com/ym-abhishek/Support_Engineer/tree/main/IT_Support_Lab_Project" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3: Helpdesk Analysis */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="card-image" style={{ backgroundImage: `url(${itSup})` }}></div>
              <div className="card-title">
                <h4>Helpdesk Ticket Analysis</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>Excel Analysis</h4>
              <p>Analyzed IT Helpdesk Ticket dataset using Excel and created pivot tables for insights.</p>
              <div className="tech-stack">
                <span>Excel</span>
                <span>Pivot Table</span>
                <span>Charts</span>
              </div>
              <a href="https://github.com/ym-abhishek/Support_Engineer/tree/main/Excel_helpdesk_ticket_analysis" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div> {/* End of projects-grid */}
    </section>
  );
};

export default Projects;