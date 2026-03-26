import { useState } from 'react';
import djangoCert from '../assets/udemy-django-cert.jpg';
import excelCert from '../assets/udemy-excel-cert.jpg'; // Your actual certificate

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certData = [
    {
      title: "Python Django - The Practical Guide", // Or Django!
      author: "Maximilian Schwarzmuller",
      issuer: "Udemy",
      date: "July 21, 2024",
      link: "https://www.udemy.com/certificate/UC-c4de9fac-f1cb-46b3-bfe3-ec88205366e5/",
      image: djangoCert 
    },
    {
      title: "Excel Essentials for the Real World",
      author: "Leila Gharani",
      issuer: "Udemy",
      date: "2022",
      link: "https://www.udemy.com/certificate/UC-7ea8b42d-0ad3-49de-af28-63e7a516710e/",
      image: excelCert
    },
    {
      title: "Complete SQL Bootcamp",
      author: "Jose Portilla",
      issuer: "Udemy",
      date: "2026",
      link: "#",
      image: "https://via.placeholder.com/600x400?text=SQL+Certificate"
    }
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certifications" className="section alt-bg">
      <h2 className="section-title">Certifications</h2>
      
      {/* New Grid Container */}
      <div className="certs-grid">
        
        {certData.map((cert, index) => (
          <div 
            className="cert-grid-card" 
            key={index} 
            onClick={() => setSelectedImage(cert.image)}
          >
            {/* Top half: The Image */}
            <div className="cert-card-img-container">
              <img src={cert.image} alt={cert.title} className="cert-card-img" />
              <div className="cert-hover-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
            
            {/* Bottom half: The Info */}
            <div className="cert-card-content">
              <h4>{cert.title}</h4>
              <p className="cert-author">By {cert.author}</p>
              
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>

              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                className="cert-link"
                onClick={(e) => e.stopPropagation()} 
              >
                Verify Certificate <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}

      </div>

      {/* The Modal / Lightbox (Stays exactly the same) */}
      {selectedImage && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage} alt="Certificate Full View" className="cert-modal-img" />
          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;