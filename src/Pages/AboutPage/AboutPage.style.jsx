import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 60px);
  width: 100%;
  padding: 4rem 4vw 4rem 12vw;
  position: relative;
  * {
    z-index: 2;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;

  h1 {
    position: relative;
    padding: 2rem;
    z-index: 2;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 14rem;
  height: 8rem;
  border-radius: 60%;
  transform: rotateZ(-15deg);
  background-color: var(--green);
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 4rem;
`;
