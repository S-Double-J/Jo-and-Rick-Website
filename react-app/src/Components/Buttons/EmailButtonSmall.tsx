import styled from "styled-components";
const GlobalButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
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
  font-size: 0.7rem;
  z-index: 2;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
`;
interface ButtonProps {
  children: string;
}
function EmailButtonSmall({ children }: ButtonProps) {
  return (
    <GlobalButton className="page-button">
      <Gradient className="button-gradient"/>
      <ButtonText className="font-color">{children}</ButtonText>
    </GlobalButton>
  );
}

export default EmailButtonSmall;
