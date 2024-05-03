import styled from "styled-components";
import EmailButton from "./Buttons/EmailButton";
import EmailButtonSmall from "./Buttons/EmailButtonSmall";

const ContactContainer = styled.div`
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  align-items: center;
  width: 80%;
  border: 0;
  position: relative;
  margin: 50px;
  padding: 20px;
`;
const LineLeft = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.7);
  position: absolute;
  height: calc(100% + 75px);
  align-self: center;
  left: -25px;
`;
const LineRight = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.7);
  position: absolute;
  height: calc(100% + 75px);
  align-self: center;
  right: -25px;
`;
const LineTop = styled.div`
  width: calc(100% + 75px);
  position: absolute;
  top: -25px;
  left: -37.5px;
  border: 1px solid rgba(255, 255, 255, 0.7);
`;
const LineBottom = styled.div`
  width: calc(100% + 75px);
  position: absolute;
  bottom: -25px;
  left: -37.5px;
  border: 1px solid rgba(255, 255, 255, 0.7);
`;
const ContactImg = styled.img`
  grid-column: 3 / 4;
  grid-row: 1 / 5;
  width: 100%;
`;

const ContactText = styled.p`
  grid-column: 1 / 3;
  grid-row: 1 / 5;
  font-size: 2rem;
  letter-spacing: 0.4rem;
  line-height: 3rem;
  padding: 100px 20px 10px 100px;
`;
const SamEmailDiv = styled.div`
  display: flex;
  grid-column: 1 / 4;
  grid-row: 6 / 7;
`;
const SamEmail = styled.p`
  font-size: 0.7rem;
`;

function Contact() {
  return (
    <>
      <ContactContainer>
        <LineLeft />
        <LineRight />
        <LineTop />
        <LineBottom />
        <ContactText>
          THANK YOU FOR VISITING OUR WEBSITE. IF YOU'D LIKE TO GET IN TOUCH THEN
          PLEASE EMAIL US AT
        </ContactText>
        <ContactImg src="../src/Images/Contact Section/Contact1.jpg"></ContactImg>
        <EmailButton>JOJUKESANDRICKWILSON@GMAIL.COM</EmailButton>
        <SamEmailDiv>
          <SamEmail>WEBSITE DESIGNED BY OTTAH DESIGN // ENQUIRE AT </SamEmail>
          <EmailButtonSmall>OTTAHDESIGN@GMAIL.COM</EmailButtonSmall>
          <SamEmail>FOR A FREE CONSULTATION</SamEmail>
        </SamEmailDiv>
      </ContactContainer>
    </>
  );
}

export default Contact;
