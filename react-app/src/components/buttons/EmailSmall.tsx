import styled from "styled-components";
import "./buttons.css";
const Button = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  border-radius: 8rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  @media (max-width: 710px) {
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  }
`;

const ButtonText = styled.p`
  font-size: 0.7rem;
  z-index: 2;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  @media (max-width: 1115px) {
    font-size: 0.6rem;
  }
  @media (max-width: 965px){
    font-size: 0.5rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
  @media (max-width: 585px){
    font-size: 0.4rem;
  }

`;
interface ButtonProps {
  children: string;
}
function EmailSmall({ children }: ButtonProps) {
  return (
    <Button href="mailto:samjukes.dev@gmail.com" className="button-small">
      <ButtonText className="font-color">{children}</ButtonText>
    </Button>
  );
}

export default EmailSmall;
