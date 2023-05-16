import React from "react";
import { BtnWraper } from "./CustomBtn.style";

function CustomBtn({ children }) {
  return <BtnWraper>{children}</BtnWraper>;
}

export default CustomBtn;
