import React, { useState } from "react";
import "./Page3.css";
import BoardList from "./BoardList";
import BoardList4 from "./BoardList4";
import BoardList5 from "./BoardList5"; // Import the Greeting component

function Page3() {
  const [showBoardList, setShowBoardList] = useState(true);
  const [showBoardList4, setShowBoardList4] = useState(false);
  const [showBoardList5, setShowBoardList5] = useState(false); // Add state for Greeting component
  const [isBoardListActive, setIsBoardListActive] = useState(true);
  const [isBoardList4Active, setIsBoardList4Active] = useState(false);
  const [isBoardList5Active, setIsBoardList5Active] = useState(false); // Add state for Greeting component

  const handleBoardListClick = () => {
    setShowBoardList(true);
    setShowBoardList4(false);
    setShowBoardList5(false); // Hide Greeting component when other buttons are clicked
    setIsBoardListActive(true);
    setIsBoardList4Active(false);
    setIsBoardList5Active(false); // Reset Greeting button state
  };

  const handleBoard4ListClick = () => {
    setShowBoardList(false);
    setShowBoardList4(true);
    setShowBoardList5(false); // Hide Greeting component when other buttons are clicked
    setIsBoardListActive(false);
    setIsBoardList4Active(true);
    setIsBoardList5Active(false); // Reset Greeting button state
  };

  const handleBoardList5Click = () => {
    setShowBoardList(false);
    setShowBoardList4(false);
    setShowBoardList5(true);
    setIsBoardListActive(false);
    setIsBoardList4Active(false);
    setIsBoardList5Active(true);
  };

  return (
    <div className="page3">
      <div className="background-page3">
        <div className="page3_index">
          <h9>주요실적</h9>
          <div className="button-group3"> 
          <button
              className={isBoardList4Active ? "active" : ""}
              onClick={handleBoard4ListClick}
            >
              사업실적/지적재산권
            </button>
            <button
              className={isBoardListActive ? "active" : ""}
              onClick={handleBoardListClick}
            >
              논문실적
            </button>
            <button
              className={isBoardList5Active ? "active" : ""}
              onClick={handleBoardList5Click}
            >
              학술회의,MOU
            </button>
            
          </div>
          <div className="show">
            {showBoardList && <BoardList />}
            {showBoardList4 && <BoardList4 />}
            {showBoardList5 && <BoardList5 />} {/* Display Greeting component when the button is clicked */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
