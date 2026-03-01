import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        
        {/* Project Card 1 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
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
            </div>
          </div>
        </div>

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
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;