import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 4rem 0 4rem 12vw;
  position: relative;
  * {
    z-index: 2;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 16rem;

  h3 {
    font-size: 2rem;
  }

  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 2rem;
  }

  button {
    margin-top: 2rem;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 65%;
  height: calc(100vh - 60px);
  overflow: hidden;

  img {
    height: 120vh;
    z-index: 5;
    margin-bottom: -42%;
    filter: grayscale(1) brightness(1.2);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 2rem;
  left: 0;

  h1 {
    font-size: 26rem;
    /* font-weight: 500; */
    color: var(--orange);
  }
`;
