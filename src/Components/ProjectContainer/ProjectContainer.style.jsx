import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10rem;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 40vh;
  margin-right: 10rem;
  padding: 2rem;
  background-color: var(--orange);
  color: var(--textWhite);
  border-radius: 5rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    opacity: 0.9;
    font-weight: 600;
  }

  span {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-bottom: 2rem;
  }

  a {
    color: inherit;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 40vw;
  height: 40vh;
  border-radius: 1rem;
  overflow: hidden;

  -webkit-box-shadow: 0px 1px 23px 6px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 1px 23px 6px rgba(0, 0, 0, 0.43);

  img {
    width: 100%;
    object-fit: cover;
  }
`;
