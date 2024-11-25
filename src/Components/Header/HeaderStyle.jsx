import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 2em;

  @media (max-width: 760px) {
    padding: 2.5rem;
  }
`;

export const LogoStyle = styled.img`
  width: 6vw;
  height: auto;
  margin-left: 4em;

  @media (max-width: 760px) {
    margin-left: 0;
    width: 15vw;
    margin-top: 2rem;
  }
`;

export const UlStyle = styled.ul`
  display: flex;
  width: 30vw;
  height: 10vh;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 5rem;

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
`;
export const ListIten = styled.li`
  list-style: none;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 36px;
  color: #1e3932;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 760px) {
      font-size: 1rem;
    }
  }
`;
