import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/Css/About.css';
import Aboutimg from '../assets/img/about.jpg';

const sectionContent = {
  title: "About",
  subtitle: "Find Out More About Us",
  description: "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.",
  sections: [
    {
      title: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        {
          icon: "bx bx-store-alt",
          title: "Ullamco laboris nisi ut aliquip consequat",
          description: "Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade"
        },
        {
          icon: "bx bx-images",
          title: "Magnam soluta odio exercitationem reprehenderi",
          description: "Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi"
        }
      ],
      extraInfo: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
  ]
};

function Feature({ icon, title, description }) {
  return (
    <li>
      <i className={icon}></i>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </li>
  );
}

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{sectionContent.title}</h2>
          <h3>{sectionContent.subtitle}</h3>
          <p>{sectionContent.description}</p>
        </div>

        {sectionContent.sections.map((section, index) => (
          <div className="row" key={index}>
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <img src={Aboutimg} className="img-fluid" alt="A descriptive view of what the image represents" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-left" data-aos-delay="200">
              <h3>{section.title}</h3>
              <p className="fst-italic">{section.content}</p>
              <ul>
                {section.features.map((feature, fIndex) => (
                  <Feature key={fIndex} {...feature} />
                ))}
              </ul>
              <p>{section.extraInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
