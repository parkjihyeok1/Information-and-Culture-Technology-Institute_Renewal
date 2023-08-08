import React, { useState } from "react";
import "./Page1.css";
import Purpose from "./Purpose";
import History from "./History";
import Greeting from "./Greeting"; // Import the Greeting component

function Page1() {
  const [showPurpose, setShowPurpose] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false); // Add state for Greeting component
  const [isPurposeActive, setIsPurposeActive] = useState(true);
  const [isHistoryActive, setIsHistoryActive] = useState(false);
  const [isGreetingActive, setIsGreetingActive] = useState(false); // Add state for Greeting component

  const handlePurposeClick = () => {
    setShowPurpose(true);
    setShowHistory(false);
    setShowGreeting(false); // Hide Greeting component when other buttons are clicked
    setIsPurposeActive(true);
    setIsHistoryActive(false);
    setIsGreetingActive(false); // Reset Greeting button state
  };

  const handleHistoryClick = () => {
    setShowPurpose(false);
    setShowHistory(true);
    setShowGreeting(false); // Hide Greeting component when other buttons are clicked
    setIsPurposeActive(false);
    setIsHistoryActive(true);
    setIsGreetingActive(false); // Reset Greeting button state
  };

  const handleGreetingClick = () => {
    setShowPurpose(false);
    setShowHistory(false);
    setShowGreeting(true);
    setIsPurposeActive(false);
    setIsHistoryActive(false);
    setIsGreetingActive(true);
  };

  return (
    <div className="page1">
      <div className="background-page1">
        <div className="page1_index">
          <h9>정보문화기술연구원</h9>
          <div className="button-group"> 
          <button
              className={isGreetingActive ? "active" : ""}
              onClick={handleGreetingClick}
            >
              원장인사말
            </button>
            <button
              className={isPurposeActive ? "active" : ""}
              onClick={handlePurposeClick}
            >
              목표및비전
            </button>
            <button
              className={isHistoryActive ? "active" : ""}
              onClick={handleHistoryClick}
            >
              연구원소개
            </button>
            
          </div>
          <div className="show">
            {showPurpose && <Purpose />}
            {showHistory && <History />}
            {showGreeting && <Greeting />} {/* Display Greeting component when the button is clicked */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
