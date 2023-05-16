import styled from "styled-components";

export const PortofolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: calc(100vh - 60px); */
  padding: 4rem 4rem 4rem 12vw;
  position: relative;

  &:nth-child(even) {
    & > div:first-child {
      flex-direction: row-reverse;
    }
  }

  * {
    z-index: 2;
  }
`;

////////////////////////////////////////////

// export const ImagesWrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 60%;

//   border: 1px solid red;
// `;

// export const ImageContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40%;
//   background-color: var(--green);
//   border: 5px solid var(--green);
//   border-radius: 5px;

//   ${(props) => (props.active ? "position: absolute; top: 0; left: 0;" : "")}

//   &:nth-child(odd) {
//     transform: translateX(-30%);
//   }

//   &:nth-child(even) {
//     transform: translate(30%);
//   }

//   img {
//     width: 100%;
//     object-fit: fill;
//   }
// `;
