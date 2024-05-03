import styled from "styled-components";

const GlobalButton = styled.button`
  background: transparent;
  color: white;
  font-size: 1em;
  border: 1px solid transparent;
  width: 8em;
  margin: 0.3em;
`;

interface ButtonProps {
  children: string;
}
function BuyTicketsButton({ children }: ButtonProps) {
  return <GlobalButton className="home-button">{children}</GlobalButton>;
}

export default BuyTicketsButton;