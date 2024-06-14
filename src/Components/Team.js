import React from 'react';
import '../assets/Css/Team.css'; // Ensure you have the correct path to your CSS file

// Import images
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';
import team4 from '../assets/img/team/team-4.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Walter White',
    role: 'Chief Executive Officer',
    imgSrc: team1,
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Jhonson',
    role: 'Product Manager',
    imgSrc: team2,
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'William Anderson',
    role: 'CTO',
    imgSrc: team3,
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 4,
    name: 'Amanda Jepson',
    role: 'Accountant',
    imgSrc: team4,
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  }
];

const TeamMember = ({ name, role, imgSrc, socialLinks }) => (
  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
    <div className="member">
      <div className="member-img">
        <img src={imgSrc} className="img-fluid" alt={name} />
        <div className="social">
          <a href={socialLinks.twitter}><i className="bi bi-twitter"></i></a>
          <a href={socialLinks.facebook}><i className="bi bi-facebook"></i></a>
          <a href={socialLinks.instagram}><i className="bi bi-instagram"></i></a>
          <a href={socialLinks.linkedin}><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div className="member-info">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <h3>Our Hardworking <span>Team</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="row">
          {teamMembers.map(member => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
