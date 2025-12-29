import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Notera ../ här under. Det betyder: Gå ut ur ServiceDetail-mappen, 
// gå in i Services-mappen och hitta Services.js
import { servicesData } from '../Services/Services'; 
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  
  // Vi letar i servicesData som vi precis importerade från grann-mappen
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container" style={{padding: '100px 0', textAlign: 'center'}}>
        <h2>Service not found</h2>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="detail-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="detail-overlay">
          <h1>{service.title}</h1>
        </div>
      </div>
      
      <div className="container detail-content">
        <Link to="/services" className="back-link">← Back to Services</Link>
        
        <div className="detail-grid">
          <div className="detail-text">
            <span className="subtitle">Luxury Management</span>
            <h2>{service.title}</h2>
            <div className="accent-line"></div>
            <p>{service.fullDetails}</p>
            <Link to="/contact" className="cta-button">Request a Quote</Link>
          </div>
          <div className="detail-image-side">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;