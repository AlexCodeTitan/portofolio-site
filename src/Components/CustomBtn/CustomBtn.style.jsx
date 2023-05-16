import styled from "styled-components";

export const BtnWraper = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 3rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background-color: var(--green);
  color: var(--white);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--orange);
    transition: 0.3s;
  }
`;
