import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [imageSrc, setImageSrc] = useState("./logo-back-remove.png");

  const handleMouseEnter = () => {
    setImageSrc("./logo_remove.png");
  };

  const handleMouseLeave = () => {
    setImageSrc("./logo-back-remove.png");
  };

  return (
    <nav className="navigation" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="logo">
        <Link to="/">
          <img src={imageSrc} alt="" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/page1">소개</Link>
        <Link to="/page2">연구센터</Link>
        <Link to="/page3">주요실적</Link>
        <Link to="/page4">자료실</Link>
        <Link to="/page5">게시판</Link>
      </div>
    </nav>
  );
}

export default Navigation;