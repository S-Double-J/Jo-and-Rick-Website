import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  @media (max-width: 580px){
    flex-direction: column-reverse;
    padding-top: 50px;
  }
`;
const TextBox = styled.div`
  display: flex;
  margin-right: 50px;
  width: 30rem;
  min-width: 540px;
  min-height: 540px;
  height: 20rem;
  align-items: center;
  align-self: center;
  @media (max-width: 1200px){
    width: 400px;
    height: 400px;
    min-height:400px;
    min-width: 400px;
  }
  @media (max-width: 950px) {
    width: 300px;
    height: 300px;
    min-height:300px;
    min-width: 300px;
  }
  @media (max-width: 710px){
    width: 250px;
    height: 250px;
    min-height:250px;
    min-width: 250px;
  }
  @media (max-width: 580px) {
    margin: 0;    
  }
`;
const AboutImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 10%;
  border-radius: 50%;
  z-index: 0;
`;
const ColorFilter = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: absolute;
  opacity: 0;
    @media (hover : none) {
    opacity: 1;
  }
`;
const LargeText = styled.p`
  font-size: 2rem;
  height: 2.2rem;
  font-weight: 300;
  z-index: 2;
  position: absolute;
  text-align: center;
  top: 32%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
    @media (hover : none) {
    opacity: 1;
  }
  @media (max-width: 950px){
    font-size: 1.5rem;
  }
  @media (max-width: 710px){
    font-size: 1.2rem;
  }
`;
const SmallText = styled.p`
  font-size: 1.5rem;
  height: 1.7rem;
  font-weight: 300;
  z-index: 3;
  position: absolute;
  text-align: center;
  top: 43.5%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
    @media (hover : none) {
    opacity: 1;
  }
  @media (max-width: 950px){
    font-size: 1.2rem;
  }
  @media (max-width: 710px){
   font-size: 0.9rem;
  }
`;
const Circle = styled.div`
  left: 5%;
  top: 5%;
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: 1px solid white;
  z-index: 2;
  opacity: 0;
    @media (hover : none) {
    opacity: 1;
  }
`;
const LinkBox = styled(Link)`
  position: relative;
  width: 30rem;
  max-width: 660px;
  min-width: 540px;
  min-height: 540px;
  height: 30rem;
  max-height: 660px;
  border-radius: 50%;
  @media (max-width: 1200px){
    width: 400px;
    height: 400px;
    min-height:400px;
    min-width: 400px;
  }
  @media (max-width: 950px) {
    width: 300px;
    height: 300px;
    min-height:300px;
    min-width: 300px;
  }
  @media (max-width: 710px){
    width: 250px;
    height: 250px;
    min-height:250px;
    min-width: 250px;
  }
  @media (max-width: 580px) {
    margin: 0;    
  }
`;

const AboutText = styled.p`
  font-size: 1.5rem;
  line-height: 1.8rem;
  @media (max-width: 950px){
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media (max-width: 710px){
    font-size: 0.9rem;
    line-height: 1rem;
  }
`;

function About() {
  return (
    <>
      <section id="About">
        <AboutDiv>
          <TextBox>
            <AboutText>
              Jo Jukes is a songwriter, artist, poet and author focusing on
              connection to the land and the natural world. Rick Wilson was drummer
              in post punk groups Family Fodder and The Work and is a
              multi-instrumentalist with years of diverse musical experience.
              Together they marry Jo’s emotive lyrics with Rick's distinctive
              world drum percussion.
            </AboutText>
          </TextBox>
          <LinkBox to="about" className="about">
            <AboutImage src="/Images/About Section/About1.jpg" />
            <Circle className="color-filter" />
            <LargeText className="color-filter">ABOUT</LargeText>
            <SmallText className="color-filter">CLICK TO READ MORE</SmallText>
            <ColorFilter className="color-filter" />
          </LinkBox>
        </AboutDiv>
      </section>
    </>
  );
}

export default About;
