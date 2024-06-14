import React from 'react';
import '../assets/Css/Features.css';

function Features() {
  const featureData = [
    {
      icon: "bx bxl-dribbble",
      title: "Lorem Ipsum",
      description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      delay: "100",
      link: "#"
    },
    {
      icon: "bx bx-file",
      title: "Sed ut perspiciatis",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      delay: "200",
      link: "#"
    },
    {
      icon: "bx bx-tachometer",
      title: "Magni Dolores",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      delay: "300",
      link: "#"
    },
    {
      icon: "bx bx-world",
      title: "Nemo Enim",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      delay: "400",
      link: "#"
    }
  ];

  const renderFeatureBox = (feature, index) => (
    <div key={index} className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box" data-aos="fade-up" data-aos-delay={feature.delay}>
        <div className="icon"><i className={feature.icon}></i></div>
        <h4 className="title"><a href={feature.link}>{feature.title}</a></h4>
        <p className="description">{feature.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {featureData.map(renderFeatureBox)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
