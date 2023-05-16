import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 60px;
  z-index: 100;
  padding: 0;
  ${({ shadow }) =>
    shadow
      ? "background-color: var(--white); box-shadow: 0px 6px 10px 1px rgba(133, 133, 133, 0.45); opacity: 0.9;"
      : ""}
`;

export const NavLink = styled.a`
  margin: 1rem 2.5rem 0 2.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  ${({ active }) =>
    active === "active"
      ? "text-decoration: underline;"
      : "text-decoration: none;"}
`;

export const SideBar = styled.div`
  position: fixed;
  top: 30;
  left: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 85vh;
  padding-left: 6rem;
  z-index: 3;
`;

export const SideDecoration = styled.span`
  height: 50vh;
  width: 3px;
  margin-bottom: 2rem;
  background-color: var(--black);
`;
