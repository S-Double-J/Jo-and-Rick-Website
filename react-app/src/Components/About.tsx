import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
`;
const AboutImage = styled.img`
width: 500px`;

const AboutText = styled.p``;

function About() {
  return (
    <>
      <AboutDiv>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          repellendus animi debitis reprehenderit officia? Officia recusandae
          possimus fugit sit expedita.
        </AboutText>
        <AboutImage src="../src/Images/About Section/About1.jpg" />
      </AboutDiv>
    </>
  );
}

export default About;
