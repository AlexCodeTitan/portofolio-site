import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-end;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 4rem 0 4rem 12rem;
  position: relative;
  z-index: 2;
`;

export const ContactHeader = styled.div`
  width: 26rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 10rem;
  background-color: var(--orange);
  color: var(--textWhite);
`;

export const ContactContainer = styled.div`
  width: 100%;
  /* border: 5px solid blue; */
`;

export const ContactFormBackdrop = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-color: var(--orange);
`;

export const FormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  top: -15vh;
  left: 5rem;
  height: 60vh;
  width: 45vw;
  background-color: var(--white);
  border: 4px solid var(--orange);
  padding: 2rem;
  & > div {
    display: flex;
    height: 90%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
`;

export const FormInput = styled.div`
  display: flex;
  width: 90%;

  h3 {
    background-color: var(--orange);
    color: var(--textWhite);
    padding: 0.5rem;
    font-size: 1.4rem;
    width: 30%;
    height: 3rem;
    text-align: start;
  }

  input {
    width: 70%;
    border: 2px solid var(--orange);
    padding: 0 0.5rem 0 0.5rem;
  }

  textarea {
    width: 70%;
    height: 10rem;
    border: 2px solid var(--orange);
    resize: none;
    padding: 0.5rem 0.5rem 0 0.5rem;
  }

  input,
  textarea {
    font-size: 1.2rem;
    color: var(--black);
    background-color: var(--white);

    &:focus {
      outline: none;
      border: 2px solid var(--green);
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: var(--textWhite);
  margin-right: 10rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 0 0 2rem 0;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1rem;
    p {
      margin-right: 1rem;
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 1.8rem;
  }
`;
