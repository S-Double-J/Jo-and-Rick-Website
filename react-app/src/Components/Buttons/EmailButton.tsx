import styled from "styled-components";
const GlobalButton = styled.div`
  margin: 0.3rem;
  grid-column: 1 / 4;
  grid-row: 5 / 6;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Gradient = styled.div`
  height: 1px;
  width: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(160, 64, 182, 1) 100%
  );
  border: 0;
  border-radius: 3rem;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 1;
`;

const ButtonText = styled.p`
  font-size: 2rem;
  z-index: 2;
  padding-left: 2rem;
  padding-right: 2rem;
`
interface ButtonProps {
  children: string;
}
function EmailButton({ children }: ButtonProps) {
  return <GlobalButton className="page-button">
    <Gradient className="button-gradient"/>
    <ButtonText className="font-color">{children}</ButtonText></GlobalButton>;
}

export default EmailButton;