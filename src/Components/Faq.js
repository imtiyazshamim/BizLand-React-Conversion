import React, { useState } from 'react';
import '../assets/Css/Faq.css';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);  // Toggle or close if already open
  };

  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>F.A.Q</h2>
          <h3>Frequently Asked <span>Questions</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <ul className="faq-list">
              <li>
                <div 
                  className={`collapsed question ${open === 1 ? '' : 'collapsed'}`} 
                  onClick={() => toggle(1)}
                >
                  Non consectetur a erat nam at lectus urna duis? 
                  <i className={`bi bi-chevron-${open === 1 ? 'up' : 'down'} icon-show`}></i>
                </div>
                <div className={`collapse ${open === 1 ? 'show' : ''}`} data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>

              <li>
                <div 
                  className={`collapsed question ${open === 2 ? '' : 'collapsed'}`} 
                  onClick={() => toggle(2)}
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? 
                  <i className={`bi bi-chevron-${open === 2 ? 'up' : 'down'} icon-show`}></i>
                </div>
                <div className={`collapse ${open === 2 ? 'show' : ''}`} data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div 
                  className={`collapsed question ${open === 3 ? '' : 'collapsed'}`} 
                  onClick={() => toggle(3)}
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? 
                  <i className={`bi bi-chevron-${open === 3 ? 'up' : 'down'} icon-show`}></i>
                </div>
                <div className={`collapse ${open === 3 ? 'show' : ''}`} data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.
                  </p>
                </div>
              </li>

              <li>
                <div 
                  className={`collapsed question ${open === 4 ? '' : 'collapsed'}`} 
                  onClick={() => toggle(4)}
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? 
                  <i className={`bi bi-chevron-${open === 4 ? 'up' : 'down'} icon-show`}></i>
                </div>
                <div className={`collapse ${open === 4 ? 'show' : ''}`} data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div 
                  className={`collapsed question ${open === 5 ? '' : 'collapsed'}`} 
                  onClick={() => toggle(5)}
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor consequat? 
                  <i className={`bi bi-chevron-${open === 5 ? 'up' : 'down'} icon-show`}></i>
                </div>
                <div className={`collapse ${open === 5 ? 'show' : ''}`} data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                  </p>
                </div>
              </li>

              <li>
                <div 
                  className={`collapsed question ${open === 6 ? '' : 'collapsed'}`} 
                  onClick={() => toggle(6)}
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? 
                  <i className={`bi bi-chevron-${open === 6 ? 'up' : 'down'} icon-show`}></i>
                </div>
                <div className={`collapse ${open === 6 ? 'show' : ''}`} data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
