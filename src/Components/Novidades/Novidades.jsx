import {
  Button,
  H2,
  Img,
  P,
  Section,
  StyledP,
  TextDiv,
} from "./NovidadesStyle";

const Novidades = () => {
  return (
    <Section>
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
      <div>
        <Img src="/src/assets/images/novidades.png" alt="" />
      </div>
    </Section>
  );
};
export default Novidades;
