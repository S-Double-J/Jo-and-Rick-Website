import styled from "styled-components";
const GlobalButton = styled.div`
  border: 1px solid white;
  margin-top: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 3.5rem;
  width: 25rem;
  overflow: hidden;
  position: relative;
`;
const Gradient = styled.div`
  height: 10px;
  width: 10px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(160, 64, 182, 1) 100%
  );
  border: 0;
  top: -10px;
  left: -10px;
  position: absolute;
  z-index: 1;
`;

const ButtonText = styled.p`
  font-size: 1.5rem;
  z-index: 2;
`;

function AncestorButton() {
  return (
    <GlobalButton className="page-button">
      <Gradient className="button-gradient" />
      <ButtonText className="font-color">
        THE ANCESTOR IN ME // AVAILABLE NOW
      </ButtonText>
    </GlobalButton>
  );
}

export default AncestorButton;
