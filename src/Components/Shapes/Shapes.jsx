import React from "react";
import {
  Circle,
  Hexagone,
  ShapesWrapper,
  Square,
  Triangle,
} from "./Shapes.style";
import { FiCircle, FiHexagon, FiSquare, FiTriangle } from "react-icons/fi";

function Shapes() {
  return (
    <ShapesWrapper>
      <Circle>
        <FiCircle size={100} />
      </Circle>
      <Hexagone>
        <FiHexagon size={100} />
      </Hexagone>
      <Triangle>
        <FiTriangle size={100} />
      </Triangle>
      <Square>
        <FiSquare size={100} />
      </Square>
      <Triangle>
        <FiTriangle size={100} />
      </Triangle>
    </ShapesWrapper>
  );
}

export default Shapes;
