import styled from "styled-components";

const AncestorButton = styled.button`
  background: url("./src/Images/TheAncestorInMe/8-TheAncestorInMe.jpg");
  height: 25rem;
  width: 25rem;
  background-size: cover;
  border-radius: 50%;
  border: 0;
`;
const WeavingButton = styled.button`
  background: url("./src/Images/Weaving the World/AlbumCover.jpg");
  height: 25rem;
  width: 25rem;
  background-size: cover;
  border-radius: 50%;
  border: 0;
`;

function Music() {
  return (<>
  <p>MUSIC</p>
  <AncestorButton></AncestorButton>
  <WeavingButton></WeavingButton>
  </>);
}

export default Music;
