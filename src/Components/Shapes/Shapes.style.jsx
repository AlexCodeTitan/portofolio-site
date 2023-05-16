import styled from "styled-components";

export const ShapesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
`;

export const Circle = styled.div`
  position: absolute;
  color: var(--purple);
  top: 54%;
  left: 52%;
`;

export const Triangle = styled.div`
  position: absolute;
  color: var(--orange);
  top: 5%;
  left: 87%;
  transform: rotateZ(23deg);
`;

export const Square = styled.div`
  position: absolute;
  color: var(--green);
  top: 88%;
  left: 32%;
  transform: rotateZ(116deg);
`;

export const Hexagone = styled.div`
  position: absolute;
  color: var(--blue);
  top: 22%;
  left: 9%;
  transform: rotateZ(23deg);
`;
