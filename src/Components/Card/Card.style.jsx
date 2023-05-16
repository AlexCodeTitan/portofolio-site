import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.8rem;
  width: 25%;
  aspect-ratio: 5/3;
  border-radius: 1rem;
  background-color: var(--orange);
  color: var(--textWhite);

  span {
    font-size: 1.6rem;
    font-weight: 700;
    opacity: 0.8;
  }

  p {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
`;
