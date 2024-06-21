import styled from "styled-components";
import { Link } from "react-router-dom";

const MusicBox = styled.section`
  padding-top: 200px;
  @media (max-width: 580px){
    padding-top: 50px;
  }
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
  @media (max-width: 580px){
    flex-direction: column-reverse;
  }
`;
const AncestorBox = styled(Link)`
  position: relative;
  width: 30rem;
  max-width: 660px;
  min-width: 540px;
  min-height: 540px;
  height: 30rem;
  max-height: 660px;
  margin-right: 50px;
  border-radius: 50%;
    @media (max-width: 1200px){
    width: 400px;
    height: 400px;
    min-height:400px;
    min-width: 400px;
  }
    @media (max-width: 950px) {
    width: 300px;
    height: 300px;
    min-height:300px;
    min-width: 300px;
    margin-right: 30px;
  }
    @media (max-width: 710px){
    width: 250px;
    height: 250px;
    min-height:250px;
    min-width: 250px;
    margin-right: 20px
  }
  @media (max-width: 580px){
    margin: 10px;
  }
`;
const WeavingBox = styled(Link)`
  position: relative;
  width: 30rem;
  max-width: 660px;
  min-width: 540px;
  min-height: 540px;
  height: 30rem;
  max-height: 660px;
  margin-left: 50px;
  border-radius: 50%;
    @media (max-width: 1200px){
    width: 400px;
    height: 400px;
    min-height:400px;
    min-width: 400px;
  }
    @media (max-width: 950px) {
    width: 300px;
    height: 300px;
    min-height:300px;
    min-width: 300px;
    margin-left: 30px;
  }
    @media (max-width: 710px){
    width: 250px;
    height: 250px;
    min-height:250px;
    min-width: 250px;
    margin-left: 20px
  }
  @media (max-width: 580px){
    margin: 10px;
  }
`;
const AncestorButton = styled.button`
  background-image: url("/Images/TheAncestorInMe/8-TheAncestorInMe.jpg");
  height: 100%;
  width: 100%;
  max-width: 660px;
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
    @media (hover : none) {
    opacity: 1;
  }
`;
const WeavingButton = styled.button`
  background: url("/Images/Weaving the World/AlbumCover.jpg");
  height: 100%;
  width: 100%;
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
    @media (hover : none) {
    opacity: 1;
  }
  @media (max-width: 950px){
    font-size: 1.5rem;
  }
  @media (max-width: 710px){
    font-size: 1.2rem;
  }
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
    @media (hover : none) {
    opacity: 1;
  }
  @media (max-width: 950px){
    font-size: 1rem;
  }
  @media (max-width: 710px){
    font-size: 0.9rem;
  }
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
    @media (hover : none) {
    opacity: 1;
  }
  @media (max-width: 950px){
    font-size: 1rem;
  }
  @media (max-width: 710px){
    font-size: 0.9rem;
  }
`;
const MusicTitle = styled.p`
  font-size: 2rem;
`;
const Circle = styled.div`
  left: 5%;
  top: 5%;
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: 1px solid white;
  z-index: 2;
  opacity: 0;
    @media (hover : none) {
    opacity: 1;
  }
`;

function Music() {
  return (
    <>
      <section id="Music">
        <MusicBox>
          <TitleBox>
            <MusicTitle>MUSIC</MusicTitle>
          </TitleBox>
          <ButtonBox>
            <AncestorBox className="music" to="the_ancestor_in_me">
              <ColorFilter className="color-filter" />
              <Circle className="color-filter" />
              <AncestorButton> </AncestorButton>
              <AlbumName className="color-filter">THE ANCESTOR IN ME</AlbumName>
              <Album className="color-filter">ALBUM</Album>
              <ClickToSeeTracks className="color-filter">
                CLICK TO SEE TRACKS
              </ClickToSeeTracks>
            </AncestorBox>
            <WeavingBox className="music" to="weaving_the_world">
              <ColorFilter className="color-filter" />
              <Circle className="color-filter" />
              <WeavingButton></WeavingButton>
              <AlbumName className="color-filter">WEAVING THE WORLD</AlbumName>
              <Album className="color-filter">ALBUM</Album>
              <ClickToSeeTracks className="color-filter">
                CLICK TO SEE TRACKS
              </ClickToSeeTracks>
            </WeavingBox>
          </ButtonBox>
        </MusicBox>
      </section>
    </>
  );
}

export default Music;
