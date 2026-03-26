<<<<<<< HEAD
import myPic from '../assets/dashboard.png';
import itSup from '../assets/It_support.png';
import myPor from '../assets/my_portfolio.png'
=======
import React from 'react';
>>>>>>> 0dc2c45c79e37f5cc5c6b450be93a14cc4196a42

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
<<<<<<< HEAD

=======
        
>>>>>>> 0dc2c45c79e37f5cc5c6b450be93a14cc4196a42
        {/* Project Card 1 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
<<<<<<< HEAD
              <div className="card-image" style={{ backgroundImage: `url(${myPor})` }}></div>
              <div className="card-title">
                <h4>My Portfolio</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>My Portfolio</h4>
              <p>Developed a responsive portfolio web application using React to showcase technical skills, projects, and learning progress.</p>
              <div className="tech-stack">
                <span>React JS</span>
                <span>Responsive UI</span>
                <span>Git and Github</span>
              </div>
              {/* Added GitHub Link */}
              <a href="https://github.com/ym-abhishek/abhis-portfolio" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              {/* Note the React syntax for inline styles here */}
              <div className="card-image" style={{ backgroundImage: `url(${myPic})` }}></div>
              <div className="card-title">
                <h4>IT Support Troubleshooting Project</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>IT Support Troubleshooting Project</h4>
              <p>Troubleshooting steps for Improving Performance, Network Speed, Login Issue, Storage Issue etc.</p>
              <div className="tech-stack">
                <span>Troubleshooting</span>
                <span>Problem Solving</span>
                <span>Report Creation</span>
              </div>
              {/* Added GitHub Link */}
              <a href="https://github.com/ym-abhishek/Support_Engineer/tree/main/IT_Support_Lab_Project" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
=======
              {/* Note the React syntax for inline styles here */}
              <div className="card-image" style={{ backgroundImage: "url('https://via.placeholder.com/400x360')" }}></div>
              <div className="card-title">
                <h4>Data Visualization Dashboard</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>Data Visualization Dashboard</h4>
              <p>An interactive dashboard built to track key performance metrics across multiple datasets.</p>
              <div className="tech-stack">
                <span>Python</span>
                <span>Tableau</span>
                <span>SQL</span>
              </div>
>>>>>>> 0dc2c45c79e37f5cc5c6b450be93a14cc4196a42
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Project Card 3 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="card-image" style={{ backgroundImage: `url(${itSup})` }}></div>
              <div className="card-title">
                <h4>My portfolio</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>My portfolio</h4>
              <p>Analyzed IT Helpdesk Ticket dataset using Excel and created pivot tables and charts for insights.</p>
              <div className="tech-stack">
                <span>Excel</span>
                <span>Pivot Table</span>
                <span>Charts</span>
              </div>
              {/* Added GitHub Link */}
              <a href="https://github.com/ym-abhishek/Support_Engineer/tree/main/Excel_helpdesk_ticket_analysis" target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
=======
        {/* Project Card 2 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="card-image" style={{ backgroundImage: "url('https://via.placeholder.com/400x360')" }}></div>
              <div className="card-title">
                <h4>IT Service Desk Automation</h4>
              </div>
            </div>
            <div className="card-back">
              <h4>IT Service Desk Automation</h4>
              <p>Automated L1 support ticket routing and initial troubleshooting steps using scripts.</p>
              <div className="tech-stack">
                <span>ServiceNow</span>
                <span>Bash</span>
                <span>Jira</span>
              </div>
>>>>>>> 0dc2c45c79e37f5cc5c6b450be93a14cc4196a42
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;