import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import '../assets/Css/Portfolio.css';
// Import images
import image1 from '../assets/img/portfolio/portfolio-1.jpg';
import image2 from '../assets/img/portfolio/portfolio-2.jpg';
import image3 from '../assets/img/portfolio/portfolio-3.jpg';
import image4 from '../assets/img/portfolio/portfolio-4.jpg';
import image5 from '../assets/img/portfolio/portfolio-5.jpg';
import image6 from '../assets/img/portfolio/portfolio-6.jpg';
import image7 from '../assets/img/portfolio/portfolio-7.jpg';
import image8 from '../assets/img/portfolio/portfolio-8.jpg';
import image9 from '../assets/img/portfolio/portfolio-9.jpg';

const portfolioItems = [
  { id: 1, title: 'App 1', category: '.filter-app', image: image1 },
  { id: 2, title: 'Web 3', category: '.filter-web', image: image2 },
  { id: 3, title: 'App 2', category: '.filter-app', image: image3 },
  { id: 4, title: 'Card 2', category: '.filter-card', image: image4 },
  { id: 5, title: 'Web 2', category: '.filter-web', image: image5 },
  { id: 6, title: 'App 3', category: '.filter-app', image: image6 },
  { id: 7, title: 'Card 1', category: '.filter-card', image: image7 },
  { id: 8, title: 'Card 3', category: '.filter-card', image: image8 },
  { id: 9, title: 'Web 3', category: '.filter-web', image: image9 }
];

const PortfolioSection = () => {
  const isotope = useRef();
  const glightbox = useRef();

  useEffect(() => {
    // Initialize Isotope
    if (!isotope.current) {
      isotope.current = new Isotope('.portfolio-container', {
        itemSelector: '.portfolio-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.portfolio-item'
        }
      });
    }

    // Event delegation for filtering
    const filters = document.querySelectorAll('#portfolio-flters li');
    filters.forEach(filter => {
      filter.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        isotope.current.arrange({ filter: filterValue });
        filters.forEach(btn => btn.classList.remove('filter-active'));
        this.classList.add('filter-active');
      });
    });

    // Initialize GLightbox
    glightbox.current = GLightbox({
      selector: '.portfolio-lightbox'
    });

    // Cleanup function
    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
      if (glightbox.current) {
        glightbox.current.destroy();
      }
    };
  }, []);

  // JSX for component rendering
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <h3>Check our <span>Portfolio</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          {/* <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div> */}
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {portfolioItems.map(item => (
            <div className={`col-lg-4 col-md-6 portfolio-item ${item.category}`} key={item.id}>
              <img src={item.image} className="img-fluid" alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>{item.category.substring(7)}</p> {/* Remove '.filter-' prefix */}
                <a href={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={item.title}><i className="bx bx-plus"></i></a>
                <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
