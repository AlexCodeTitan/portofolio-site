import React, { useState } from "react";
import { BtnCircle, ButtonWrapper } from "./ModeButton.style";
import { FaMoon, FaSun } from "react-icons/fa";

function ModeButton({ toggleTheme, theme }) {
  const [mode, setMode] = useState(theme);

  const handleMode = () => {
    setMode(!mode);
    toggleTheme();
  };

  return (
    <ButtonWrapper onClick={handleMode} mode={mode}>
      <BtnCircle>{mode ? <FaSun size={25} /> : <FaMoon size={25} />}</BtnCircle>
    </ButtonWrapper>
  );
}

export default ModeButton;
