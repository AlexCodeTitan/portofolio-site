import styled from "styled-components";

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 8rem;
  height: 8rem;
  padding: 1rem 1rem;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background-color: var(--purple);
  color: var(--textWhite);
  cursor: default;
  transition: 0.5s;

  h4 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    transition: 0.5s;
  }

  &:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    padding: 1.5rem 1rem 1rem 1rem;

    h4 {
      margin-top: 1rem;
      font-size: 1.4rem;
    }

    > *:first-child {
      scale: 130%;
      transition: 1s;
      transform: rotateZ(360deg);
    }
  }
`;
