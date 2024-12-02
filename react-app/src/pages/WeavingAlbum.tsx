import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import WeavingImagesGrid from "../components/album_pages/weaving_the_world/WeavingImagesGrid";
import WeavingTracksObjArr from "../components/album_pages/weaving_the_world/tracks/WeavingTracksObjArr";
import AudioPlayer from "../components/album_pages/AudioPlayer";
import WeavingCarousel from "../components/album_pages/weaving_the_world/WeavingCarousel";

const Lyrics = styled.p`
  font-size: 1.3rem;
`;
const LyricsTitle = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;
const TrackDescription = styled.p``;
const TrackTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;
const ColorFilter = styled.div`
  height: calc(100svh - 117px);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  overflow: hidden;
  backdrop-filter: blur(5px);
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const TrackBox = styled.div`
  width: 50%;
  height: 90%;
  margin: 10px;
  overflow: auto;
  @media (max-width: 500px){
    width: 95%;
    height: 100%;
    margin: 0;
  }
`;
const TextBox = styled.div`
  width: 50%;
  height: 100%;
  margin: 10px 40px;
  overflow-y: auto;
`;
const DescriptonAndLyricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 70%;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

`;
const AlbumDescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  @media (max-width: 1030px) {
    padding-top: 50px;
  }
  @media (max-width: 815px) {
    padding-top: 25px;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
`;
const AlbumTitle = styled.p`
  text-align: center;
  font-size: 2rem;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
const AlbumDescription = styled.p`
  font-size: 1.2rem;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
const ClickInstructions = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-top: 100px;
  @media (max-width: 700px) {
    font-size: 0.8rem;
    padding-top: 25px;
  }
`;
const Button = styled.a`
  border-radius: 8rem;
  width: 8rem;
  margin-left: 20px;
  margin-right: 20px;
  text-decoration: none;
  margin-bottom: 20px;

`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonText = styled.p``;
const PurchaseText = styled.p`
  font-size: 1rem;
`;

function WeavingAlbum() {
  const tracksObj = WeavingTracksObjArr || [];
  const location = useLocation();
  function CreateElement({
    id,
    title,
    desc,
    lyricsArr,
    audio,
  }: {
    id: string;
    title: string;
    desc: string;
    lyricsArr: string[];
    audio: string;
  }) {
    return (
      <DetailsContainer id={id}>
        <TrackTitle>{title}</TrackTitle>
        <AudioPlayer id={id} src={audio}></AudioPlayer>
        <DescriptonAndLyricsContainer>
          <TrackDescription>{desc}</TrackDescription>
          <LyricsTitle>Lyrics</LyricsTitle>
          {lyricsArr.map((p) => (
            <Lyrics key={p}>{p}</Lyrics>
          ))}
          <PurchaseText>
            This album will be coming to spotify soon! You can listen to the
            album on bandcamp, or purchase it for download or on CD.
          </PurchaseText>
          <ButtonContainer>
            <Button
              className="button"
              href="https://jojukes.bandcamp.com/album/weaving-the-world"
            >
              <ButtonText>Buy Album</ButtonText>
            </Button>
          </ButtonContainer>
        </DescriptonAndLyricsContainer>
      </DetailsContainer>
    );
  }
  function CreateMobileElement({
    id,
    title,
    desc,
    lyricsArr,
    audio,
  }: {
    id: string;
    title: string;
    desc: string;
    lyricsArr: string[];
    audio: string;
  }) {
    return (
      <DetailsContainer id={id}>
        <TrackTitle>{title}</TrackTitle>
        <AudioPlayer id={id} src={audio}></AudioPlayer>
        <TrackDescription>{desc}</TrackDescription>
        <LyricsTitle>Lyrics</LyricsTitle>
        {lyricsArr.map((p) => (
          <Lyrics key={p}>{p}</Lyrics>
        ))}
        <PurchaseText>
          This album will be coming to spotify soon! You can listen to the album
          on bandcamp, or purchase it for download or on CD.
        </PurchaseText>
        <ButtonContainer>
          <Button
            className="button"
            href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
          >
            <ButtonText>Buy Album</ButtonText>
          </Button>
        </ButtonContainer>
      </DetailsContainer>
    );
  }
  if (location.pathname === "/weaving_the_world") {
    if (window.innerWidth <= 500) {
      return (
        <ColorFilter>
          <AlbumTitle>Weaving The World</AlbumTitle>
          <TrackBox>
            <WeavingCarousel />
            <AlbumDescriptionsContainer>
              <AlbumDescription>
                These songs are a celebration of the natural world. They tell of
                a hidden, secret and ancient landscape on my doorstep and the
                voices of the ancestors and wildlife living amongst them. The
                natural world continues to be my greatest source of pleasure,
                inspiring my writing, music and artwork. If we truly look at the
                world around us, we start to remember we are part of it. In
                doing so we fall in love with it, and then we begin to care.
                Maybe these are just love songs then, love songs to the land.
              </AlbumDescription>
              <PurchaseText>
                This album will be coming to spotify soon! You can listen to the
                album on bandcamp, or purchase it for download or on CD.
              </PurchaseText>
              <ButtonContainer>
                <Button
                  className="button"
                  href="https://jojukes.bandcamp.com/album/weaving-the-world"
                >
                  <ButtonText>Buy Album</ButtonText>
                </Button>
              </ButtonContainer>
              <ClickInstructions>
                Click on an image to hear the song
              </ClickInstructions>
            </AlbumDescriptionsContainer>
          </TrackBox>
        </ColorFilter>
      );
    } else {
    return (
      <ColorFilter>
        <TextBox>
          <AlbumDescriptionsContainer>
            <AlbumTitle>Weaving The World</AlbumTitle>
            <AlbumDescription>
              These songs are a celebration of the natural world. They tell of a
              hidden, secret and ancient landscape on my doorstep and the voices
              of the ancestors and wildlife living amongst them. The natural
              world continues to be my greatest source of pleasure, inspiring my
              writing, music and artwork. If we truly look at the world around
              us, we start to remember we are part of it. In doing so we fall in
              love with it, and then we begin to care. Maybe these are just love
              songs then, love songs to the land.
            </AlbumDescription>
            <PurchaseText>
              This album will be coming to spotify soon! You can listen to the
              album on bandcamp, or purchase it for download or on CD.
            </PurchaseText>
            <ButtonContainer>
              <Button
                className="button"
                href="https://jojukes.bandcamp.com/album/weaving-the-world"
              >
                <ButtonText>Buy Album</ButtonText>
              </Button>
            </ButtonContainer>
            <ClickInstructions>
              Click on an image to hear the song
            </ClickInstructions>
          </AlbumDescriptionsContainer>
        </TextBox>
        <TrackBox>
          <WeavingImagesGrid></WeavingImagesGrid>
        </TrackBox>
      </ColorFilter>
    );
  }
  } else {
    if (window.innerWidth <= 500) {
      return (
        <ColorFilter>
          <AlbumTitle>Weaving The World</AlbumTitle>
          <TrackBox>
            <WeavingCarousel></WeavingCarousel>
            <Routes>
              {tracksObj.map((obj) => (
                <Route
                  path={obj.id}
                  element={
                    <CreateMobileElement
                      id={obj.id}
                      title={obj.title}
                      desc={obj.description}
                      lyricsArr={obj.lyrics}
                      audio={obj.audio}
                    />
                  }
                />
              ))}
            </Routes>
          </TrackBox>
        </ColorFilter>
      );
    } else {
    return (
      <>
        <ColorFilter>
          <TextBox>
            <Routes>
              {tracksObj.map((obj) => (
                <Route
                  path={obj.id}
                  element={
                    <CreateElement
                      id={obj.id}
                      title={obj.title}
                      desc={obj.description}
                      lyricsArr={obj.lyrics}
                      audio={obj.audio}
                    />
                  }
                />
              ))}
            </Routes>
          </TextBox>
          <TrackBox>
            <WeavingImagesGrid></WeavingImagesGrid>
          </TrackBox>
        </ColorFilter>
      </>
    );
  }
}
}

export default WeavingAlbum;
