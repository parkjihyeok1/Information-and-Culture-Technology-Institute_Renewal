import React from "react";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src="./logo.png" alt="" />
      </div>
      <div className="nav-links">
        <a href="#page1">소개</a>
        <a href="#page2">Q&A</a>
        <a href="#page3">자료실</a>
        <a href="#page4">게시판</a>
        <a href="#page5">오시는길</a>
      </div>
    </nav>
  );
}

export default Navigation;