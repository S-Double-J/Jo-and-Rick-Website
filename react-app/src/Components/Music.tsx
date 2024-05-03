import styled from "styled-components";
const MusicBox = styled.div`
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 30rem;
`;
const AncestorBox = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  margin-right: 50px;
  border-radius: 50%;
`;
const WeavingBox = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  margin-left: 50px;
  border-radius: 50%;
`;
const AncestorButton = styled.button`
  background-image: url("./src/Images/TheAncestorInMe/8-TheAncestorInMe.jpg");
  height: 30rem;
  width: 30rem;
  background-size: cover;
  border-radius: 50%;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
`;
const ColorFilter = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: absolute;
  opacity: 0;
`;
const WeavingButton = styled.button`
  background: url("./src/Images/Weaving the World/AlbumCover.jpg");
  height: 30rem;
  width: 30rem;
  background-size: cover;
  border-radius: 50%;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
`;
const AlbumName = styled.p`
  font-size: 2rem;
  height: 2.2rem;
  font-weight: 300;
  z-index: 2;
  position: absolute;
  text-align: center;
  top: 32%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
`;
const Album = styled.p`
  font-size: 1.5rem;
  height: 1.7rem;
  font-weight: 300;
  z-index: 3;
  position: absolute;
  text-align: center;
  top: 43.5%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
`;
const ClickToSeeTracks = styled.p`
  font-size: 1.5rem;
  height: 1.7rem;
  font-weight: 300;
  z-index: 3;
  position: absolute;
  text-align: center;
  top: 52%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
`;
const MusicTitle = styled.p`
  font-size: 2rem;
`;
const Circle = styled.div`
  left:5%;
  top:5%;
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: 1px solid white;
  z-index: 2;
  opacity: 0;
`;

function Music() {
  return (
    <>
      <MusicBox>
        <TitleBox>
          <MusicTitle>MUSIC</MusicTitle>
        </TitleBox>
        <ButtonBox>
          <AncestorBox className="hover-music">
            <ColorFilter className="color-filter" />
            <Circle className="color-filter"/>
            <AncestorButton> </AncestorButton>
            <AlbumName className="color-filter">THE ANCESTOR IN ME</AlbumName>
            <Album className="color-filter">ALBUM</Album>
            <ClickToSeeTracks className="color-filter">
              CLICK TO SEE TRACKS
            </ClickToSeeTracks>
          </AncestorBox>
          <WeavingBox className="hover-music">
            <ColorFilter className="color-filter" />
            <Circle className="color-filter"/>
            <WeavingButton></WeavingButton>
            <AlbumName className="color-filter">WEAVING THE WORLD</AlbumName>
            <Album className="color-filter">ALBUM</Album>
            <ClickToSeeTracks className="color-filter">
              CLICK TO SEE TRACKS
            </ClickToSeeTracks>
          </WeavingBox>
        </ButtonBox>
      </MusicBox>
    </>
  );
}

export default Music;
