import { useState, useCallback } from "react";
import copoAmarelo from "../../assets/images/copo-amarelo.png";
import copoVermelho from "../../assets/images/copo-vermelho.png";
import copoVerde from "../../assets/images/copo-verde.png";
import copaoAmarelo from "../../assets/images/copao-amarelo.png";
import copaoVermelho from "../../assets/images/copao-red.png";
import copaoVerde from "../../assets/images/copao-verde.png";
import ellipseVerde from "../../assets/images/ellipse-green.png";
import ellipseVermelho from "../../assets/images/ellipse-red.png";
import ellipseAmarelo from "../../assets/images/ellipse-yellow.png";
import Button from "../Button/Button.jsx";
import {
  ButtonWrapper,
  Description,
  Figure,
  ImageSection,
  Main,
  MainCopo,
  Section,
  Subtitle,
  TextContainer,
  Thumbnail,
  Title,
} from "../Home/HomeStyle.jsx";
export default function Home() {
  const [corAtual, setCorAtual] = useState("verde");
  const cores = {
    verde: {
      backgroundImage: `url(${ellipseVerde})`,
      copo: copaoVerde,
    },
    vermelho: {
      backgroundImage: `url(${ellipseVermelho})`,
      copo: copaoVermelho,
    },
    amarelo: {
      backgroundImage: `url(${ellipseAmarelo})`,
      copo: copaoAmarelo,
    },
  };

  const handleChangeColor = useCallback((color) => {
    setCorAtual(color);
  }, []);

  return (
    <>
      <Main>
        <Section>
          <TextContainer>
            <Subtitle>Mais que Café</Subtitle>
            <Title>
              Isso é <span>Starbucks</span>
            </Title>
            <Description>
              A Starbucks oferece uma variedade de cafés de alta qualidade.
              Alguns dos cafés mais populares incluem o Caffè Americano, o
              Cappuccino, o Latte Macchiato e o Espresso. Além disso, a
              Starbucks oferece bebidas quentes e frias, doces diferenciados e
              sanduíches.
            </Description>
            <ButtonWrapper>
              <Button />
            </ButtonWrapper>
          </TextContainer>
        </Section>

        <Section>
          <Figure>
            <Thumbnail
              src={copoVerde}
              alt="Copo Verde"
              onClick={() => handleChangeColor("verde")}
            />
            <Thumbnail
              src={copoVermelho}
              alt="Copo Vermelho"
              onClick={() => handleChangeColor("vermelho")}
            />
            <Thumbnail
              src={copoAmarelo}
              alt="Copo Amarelo"
              onClick={() => handleChangeColor("amarelo")}
            />
          </Figure>
        </Section>

        <ImageSection
          className="image-section"
          style={{
            backgroundImage: cores[corAtual].backgroundImage,
          }}
        >
          <MainCopo
            src={cores[corAtual].copo}
            alt={`Copo ${corAtual}`}
            className="main-copo"
          />
        </ImageSection>
      </Main>
    </>
  );
}
