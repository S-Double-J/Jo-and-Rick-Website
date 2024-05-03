import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const TextBox = styled.div`
  display: flex;
  margin: 50px;
  width: 30rem;
  height: 20rem;
  margin: 50px;
  align-items: center;
  align-self: center;
`;
const AboutImage = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 50%;
  margin: 50px;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

function About() {
  return (
    <>
      <AboutDiv>
        <TextBox>
          <AboutText>
            Jo Jukes is a songwriter, artist, poet and author focussing on
            connection to land and the natural world. Rick Wilson was drummer in
            post punk groups Family Fodder and The Work and is a
            multi-instrumentalist with years of diverse musical experience.
            Together they marry Jo’s emotive lyrics with Rick's distinctive
            world drum percussion.
          </AboutText>
        </TextBox>
        <AboutImage src="../src/Images/About Section/About1.jpg" />
      </AboutDiv>
    </>
  );
}

export default About;
