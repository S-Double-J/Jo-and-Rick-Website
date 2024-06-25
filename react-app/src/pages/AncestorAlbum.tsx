import styled from "styled-components";
import AncestorImagesGrid from "../components/album_pages/ancestor_in_me/AncestorImagesGrid";
import { Route, Routes, useLocation } from "react-router-dom";
import AncestorTracksObjArr from "../components/album_pages/ancestor_in_me/tracks/AncestorTracksObjArr";
import AudioPlayer from "../components/album_pages/AudioPlayer";
import AncestorCarousel from "../components/album_pages/ancestor_in_me/AncestorCarousel";

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
  background: rgba(0, 0, 0, 0.76);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  overflow: hidden;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const TrackBox = styled.div`
  width: 50%;
  height: 90%;
  margin: 10px;
  overflow: auto;
  @media (max-width: 500px) {
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
  padding-top: 50px;
  @media (max-width: 900px) {
    padding-top: 25px;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
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
function AncestorAlbum() {
  const tracksObj = AncestorTracksObjArr || [];
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
              href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
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
  if (location.pathname === "/the_ancestor_in_me") {
    if (window.innerWidth <= 500) {
      return (
        <ColorFilter>
          <AlbumTitle>The Ancestor In Me</AlbumTitle>
          <TrackBox>
            <AncestorCarousel />
            <AlbumDescriptionsContainer>
              <AlbumDescription>
                If the songs on Weaving the World were love songs to the land,
                then this second album is for the ancestors. It tells the
                stories of my family, rural workers moving after the enclosures
                to the industrial heartlands of the north. No longer working
                above the ground, but below it in the coal mines of Sheffield.
                Songs of our early ancestors and the changing shape of the
                earth, our place on it and our relationship to it. Zithers,
                harps, melodeons, drums, guitars, sickles, slates, sticks and
                stones. The land itself makes the sounds and we the players
                journey through the rhythms and beats, harmonies and voices.
              </AlbumDescription>
              <PurchaseText>
                This album will be coming to spotify soon! You can listen to the
                album on bandcamp, or purchase it for download or on CD.
              </PurchaseText>
              <ButtonContainer>
                <Button
                  className="button"
                  href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
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
          <TextBox id="text-box">
            <AlbumDescriptionsContainer>
              <AlbumTitle>The Ancestor In Me</AlbumTitle>
              <AlbumDescription>
                If the songs on Weaving the World were love songs to the land,
                then this second album is for the ancestors. It tells the
                stories of my family, rural workers moving after the enclosures
                to the industrial heartlands of the north. No longer working
                above the ground, but below it in the coal mines of Sheffield.
                Songs of our early ancestors and the changing shape of the
                earth, our place on it and our relationship to it. Zithers,
                harps, melodeons, drums, guitars, sickles, slates, sticks and
                stones. The land itself makes the sounds and we the players
                journey through the rhythms and beats, harmonies and voices.
              </AlbumDescription>
              <PurchaseText>
                This album will be coming to spotify soon! You can listen to the
                album on bandcamp, or purchase it for download or on CD.
              </PurchaseText>
              <ButtonContainer>
                <Button
                  className="button"
                  href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
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
            <AncestorImagesGrid></AncestorImagesGrid>
          </TrackBox>
        </ColorFilter>
      );
    }
  } else {
    if (window.innerWidth <= 500) {
      return (
        <ColorFilter>
          <AlbumTitle>The Ancestor In Me</AlbumTitle>
          <TrackBox>
            <AncestorCarousel></AncestorCarousel>
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
            <TextBox id="text-box">
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
              <AncestorImagesGrid></AncestorImagesGrid>
            </TrackBox>
          </ColorFilter>
        </>
      );
    }
  }
}

export default AncestorAlbum;
