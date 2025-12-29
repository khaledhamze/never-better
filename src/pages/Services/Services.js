import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

// Denna data exporteras så att ServiceDetail.js kan använda den också
export const servicesData = [
  {
    id: 1,
    slug: "corporate-events",
    title: "Corporate Events",
    shortDesc: "Professional conferences, seminars, and product launches.",
    fullDetails: "At NEVERBETTER, we understand that corporate events are a reflection of your brand. We provide end-to-end management for conferences, award ceremonies, and product launches in Dubai. Our team handles everything from technical production and stage design to guest registration and catering.",
    image: "/images/corporate.jpg"
  },
  {
    id: 2,
    slug: "wedding-planning",
    title: "Wedding Planning",
    shortDesc: "Elegant and romantic wedding planning to make your special day unforgettable.",
    fullDetails: "We turn your dream wedding into reality. From intimate gatherings to grand ballroom celebrations, our planners manage every detail. We assist with venue selection, floral arrangements, photography, and entertainment, ensuring a stress-free experience for the couple.",
    image: "/images/wedding.jpg"
  },
  {
    id: 3,
    slug: "private-parties",
    title: "Private Parties",
    shortDesc: "Birthdays, anniversaries, and exclusive celebrations with style.",
    fullDetails: "Whether it is a milestone birthday or a private gala, we bring the 'wow' factor. Our team specializes in themed decor, premium catering, and world-class entertainment to ensure your guests have an unforgettable night.",
    image: "/images/party.jpg"
  },
  {
    id: 4,
    slug: "exhibition-stands",
    title: "Exhibitions & Stands",
    shortDesc: "Innovative design and management for trade shows.",
    fullDetails: "Stand out in the crowd. We design and build custom exhibition stands that capture attention. From 3D design to on-site installation at DWTC or Dubai Expo, we manage the entire process to maximize your brand's impact.",
    image: "/images/exhibition.jpg"
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-hero" style={{ backgroundImage: "url('/images/Event.jpeg')" }}>
        <div className="hero-overlay">
          <h1>Our Services</h1>
          <div className="hero-line"></div>
          <p>Excellence in every detail, perfection in every event.</p>
        </div>
      </div>

      <div className="container services-container">
        <div className="services-intro">
          <h2>What We Do</h2>
          <p>NEVERBETTER provides luxury event management solutions in Dubai.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <Link to={`/services/${service.slug}`} className="view-more">View Details</Link>
                </div>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;