import styled from "styled-components";
import "./buttons.css"
const Button = styled.a`
  margin: 0.3rem;
  display: flex;
  text-align: center;
  text-decoration: none;
  border-radius: 8rem;
`;
const ButtonText = styled.p`
  font-size: 1rem;
  z-index: 2;
  letter-spacing: 0.2rem;
  @media (max-width:1110px){
    font-size: 0.8rem;
    letter-spacing: 0rem;
  }
  @media (max-width: 750px){
    font-size: 0.6rem;
  }`;
interface ButtonProps {
  children: string;
}
function EmailLarge({ children }: ButtonProps) {
  return <Button href="mailto:jojukesandrickwilson@gmail.com" className="button">
    <ButtonText className="font-color">{children}</ButtonText></Button>;
}

export default EmailLarge;