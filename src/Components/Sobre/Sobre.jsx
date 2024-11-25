import SobreImg from "../../assets/images/sobre.png";
import { Button, H2, Img, P, Section, StyledP, TextDiv } from "./SobreStyle";

const Sobre = () => {
  return (
    <Section>
      <div>
        <Img src={SobreImg} alt="" />
      </div>
      <TextDiv>
        <StyledP>PREPARAÇÃO</StyledP>
        <H2>Níveis de torra</H2>
        <P>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </P>
        <Button>SAIBA MAIS</Button>
      </TextDiv>
    </Section>
  );
};
export default Sobre;
