import React from 'react';

const ScrollLink = ({ to, children, className, offset = 200, activeSection }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(to);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const isActive = activeSection === to;

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={`${className} ${isActive ? 'active-link' : ''}`}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
