import styled from "styled-components";

export const Section = styled.section`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: #1e3932;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

export const StyledP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Img = styled.img`
  width: 526px;
  height: 367px;
  margin-right: 10em;

  @media (max-width: 1024px) {
    width: 400px;
    height: 300px;
    margin-right: 5em;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 225px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 400;
  margin-bottom: 0.5em;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const P = styled.p`
  font-size: 24px;
  line-height: 36px;
  width: 50%;
  margin-bottom: 1em;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  background-color: #037143;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 15px 60px;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px 40px;
    font-size: 18px;
  }
`;

export const TextDiv = styled.div`
  margin-left: 8em;

  @media (max-width: 1024px) {
    margin-left: 4em;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;
