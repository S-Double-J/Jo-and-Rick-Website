import styled from "styled-components";
import EmailLarge from "../buttons/EmailLarge";
import EmailSmall from "../buttons/EmailSmall";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 80vw;
  position: relative;
  margin: 50px;
  padding: 20px;
  margin-top: 200px;
  @media (max-width: 750px) {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }
`;

const LineTop = styled.div`
  width: calc(100% + 75px);
  position: absolute;
  top: -25px;
  left: -37.5px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  @media (max-width: 520px) {
    width: calc(100% + 35px);
    top: -10px;
    left: -17.5px;
  }
`;
const LineBottom = styled.div`
  width: calc(100% + 75px);
  position: absolute;
  bottom: -25px;
  left: -37.5px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  @media (max-width: 520px) {
    width: calc(100% + 35px);
    bottom: -10px;
    left: -17.5px;
  }
`;
const ContactImg = styled.img`
  width: 100%;
  border-radius: 3%;
  @media (max-width: 650px){
    display: none;
  }
`;

const ContactText = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  line-height: 1.4rem;
  @media (max-width: 1110px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
  @media (max-width:750px){
    font-size: 0.8rem;
    line-height: 1rem;
  };
`;
const SamEmailDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10vw;
  @media (max-width: 805px) {
    flex-direction: column;
  }
`;
const SmallText = styled.p`
  font-size: 0.7rem;
  margin: 0;
  @media (max-width: 1115px) {
    font-size: 0.6rem;
  }
  @media (max-width: 965px) {
    font-size: 0.5rem;
  }
  @media (max-width: 465px){
    font-size: 0.4rem;
  }
`;
const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  border-right: 1px solid white;
  margin-right: 40px;
  @media (max-width: 650px){
    border-right: 0;
    margin-right: 0;
  }
`;
function Contact() {
  return (
    <section id="Contact">
      <ContactContainer>
        <LineTop />
        <LineBottom />
        <TopDiv>
          <TextDiv>
            <ContactText id="contact-text">
              THANK YOU FOR VISITING OUR WEBSITE. FOR MORE INFO AND BOOKINGS
              PLEASE EMAIL US AT
            </ContactText>
            <EmailLarge>JOJUKESANDRICKWILSON@GMAIL.COM</EmailLarge>
          </TextDiv>
          <ContactImg src="/Images/Contact Section/Contact1.jpg"></ContactImg>
        </TopDiv>
        <BottomDiv>
          <SamEmailDiv>
            <SmallText id="sam-text-left">
              Website by Sam Jukes // enquire at
            </SmallText>
            <EmailSmall>SAMJUKES.DEV@GMAIL.COM</EmailSmall>
            <SmallText id="sam-text-right">for a free consultation</SmallText>
          </SamEmailDiv>
          <SmallText>All art on this website was made by Jo Jukes</SmallText>
        </BottomDiv>
      </ContactContainer>
    </section>
  );
}

export default Contact;
