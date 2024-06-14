import React from 'react';
import '../assets/Css/Services.css'; // Ensure you have the correct path to your CSS file

const services = [
  {
    id: 1,
    icon: 'bx bxl-dribbble',
    title: 'Lorem Ipsum',
    description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    delay: '100'
  },
  {
    id: 2,
    icon: 'bx bx-file',
    title: 'Sed ut perspiciatis',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    delay: '200'
  },
  {
    id: 3,
    icon: 'bx bx-tachometer',
    title: 'Magni Dolores',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
    delay: '300'
  },
  {
    id: 4,
    icon: 'bx bx-world',
    title: 'Nemo Enim',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
    delay: '100'
  },
  {
    id: 5,
    icon: 'bx bx-slideshow',
    title: 'Dele cardo',
    description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur',
    delay: '200'
  },
  {
    id: 6,
    icon: 'bx bx-arch',
    title: 'Divera don',
    description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
    delay: '300'
  }
];

const ServiceItem = ({ icon, title, description, delay }) => (
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={delay}>
    <div className="icon-box">
      <div className="icon"><i className={icon}></i></div>
      <h4><a href="">{title}</a></h4>
      <p>{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <h3>Check our <span>Services</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="row">
          {services.map(service => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
