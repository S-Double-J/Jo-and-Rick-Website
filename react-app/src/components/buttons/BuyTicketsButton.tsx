import styled from "styled-components";

const Button = styled.a`
  position: relative;
  justify-content: center;
  width: 9.5rem;
  text-decoration: none;
  border-radius: 8rem;
  @media (max-width: 700px) {
    width: 7rem;
  }
  @media (max-width: 587px){
    width: 6rem;
  }
`;

const ButtonText = styled.p`
  font-size: 1rem;
  z-index: 2;
  @media (max-width: 700px){
    font-size: 0.8rem;
  }
  @media (max-width: 587px){
    font-size: 0.7rem;
  }
`;
interface ButtonProps {
  children: string;
  link: string;
}
function BuyTicketsButton({ children, link }: ButtonProps) {
  return (
    <Button href={link} className="button-small">
      <ButtonText className="font-color">{children}</ButtonText>
    </Button>
  );
}

export default BuyTicketsButton;