import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <p>Copyright &copy; Movie Maker {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
