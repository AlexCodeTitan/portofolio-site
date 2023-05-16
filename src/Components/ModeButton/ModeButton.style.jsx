import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.mode ? "flex-start" : "flex-end")};
  justify-content: center;
  height: 90px;
  width: 40px;
  padding: 5px;
  border-radius: 30px;
  border: 4px solid var(--black);
  transition: 0.5s;
  cursor: pointer;
`;

export const BtnCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  color: var(--black);
  cursor: pointer;
`;
