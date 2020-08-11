import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-dark text-light">
      <div className="text-center py-3">
        <span>&#169;</span>Copyright: {props.website}
      </div>
    </footer>
  );
};

export default Footer;
