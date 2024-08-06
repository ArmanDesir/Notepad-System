import "../assets/navbar.css";

import { useState } from "react";

const Navbar_main = ({
  setOpen,
  state,
  dispatch,
  palettes,
  currentPalette,
  setCurrentPalette,
}) => {
  const [onPalette, setOnPalette] = useState(false);

  const handlePalette = (item) => {
    setCurrentPalette(item);
    dispatch({ type: "SET_PALETTE", payload: item });
    setOnPalette(false);
  };
  return (
    <div
      className={`navbar ${
        state?.palette ? state?.palette?.name : currentPalette?.name
      }`}
    >
      <div className="nav-wrapper container">
        <span className="logo">Notepal</span>
        <div className="nav-options">
          <div className="nav-icon">
            <div className={`palettes ${onPalette && "active"}`}>
              {palettes.map((palette) => (
                <div
                  onClick={() => handlePalette(palette)}
                  key={palette?.id}
                  style={{ backgroundColor: `${palette?.color}` }}
                  className={`palette-item ${
                    currentPalette?.id === palette?.id && "active"
                  }`}
                ></div>
              ))}
            </div>
            <i
              onClick={() => setOnPalette((prev) => !prev)}
              className="fa-solid fa-circle-half-stroke"
            ></i>
          </div>
          <div className="nav-icon" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar_main