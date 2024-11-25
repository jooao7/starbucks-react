import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }
`;

export const TextContainer = styled.div`
  max-width: 55%;
  margin: 2rem 0rem 0rem 2rem;

  @media (max-width: 600px) {
    max-width: 90%;
    margin: 1rem 0;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    max-width: 70%;
    margin: 1.5rem 1rem;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 96px;
  color: rgba(30, 50, 50, 1);

  span {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 96px;
    line-height: 144px;
    color: #00704a;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    span {
      font-size: 3rem;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 2.4rem;
    span {
      font-size: 3.5rem;
    }
  }
`;

export const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 77.45px;
  color: rgba(30, 50, 50, 1);

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: rgba(30, 50, 50, 1);
  letter-spacing: 0.1em;
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.4;
    align-items: center;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 5px;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    margin-top: 8px;
  }
`;

export const ImageSection = styled.div`
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  z-index: -100;
  padding: 8rem 8rem 0.6rem 0;
  right: 0;
  top: 1;
  transform: translateY(40%);

  @media (max-width: 600px) {
    padding: 6rem 0 0 2rem;
    transform: translateY(115%);
  }
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 4rem 0 0 0rem;
    transform: translateY(110%);
  }
`;

export const MainCopo = styled.img`
  width: 80%;
  transform: translateY(-40%) translateX(10%);

  @media (max-width: 600px) {
    width: 100%;
    transform: translateY(-10%) translateX(5%);
  }
  @media (min-width: 601px) and (max-width: 900px) {
    width: 60%;
    transform: translateY(-25%) translateX(-12%);
  }
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const Thumbnail = styled.img`
  width: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 1s ease;

  &:hover {
    transform: rotate(360deg);
  }

  @media (max-width: 600px) {
    width: 20%;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    width: 15%;
  }
`;
