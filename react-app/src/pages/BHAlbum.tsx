import styled from "styled-components";
import BHImagesGrid from "../components/album_pages/being_human/BHImagesGrid";
import { Route, Routes, useLocation } from "react-router-dom";
import BeingHumanTracksObjArr from "../components/album_pages/being_human/tracks/BeingHumanTracksObjArr";
import AudioPlayer from "../components/album_pages/AudioPlayer";
import BHCarousel from "../components/album_pages/being_human/BHCarousel";
import { FaSpotify } from "react-icons/fa";
import React from "react";

const Spotify = styled(FaSpotify)`
  height: 40px;
  width: 40px;
`;
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
  text-decoration: none;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const ButtonText = styled.p``;
const PurchaseText = styled.p`
  font-size: 1rem;
`;
function BHAlbum() {
  const tracksObj = BeingHumanTracksObjArr || [];
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
    lyricsArr: string[][];
    audio: string;
  }) {
    return (
      <DetailsContainer id={id}>
        <TrackTitle>{title}</TrackTitle>
        <AudioPlayer id={id} src={audio}></AudioPlayer>
        <DescriptonAndLyricsContainer>
          <TrackDescription>{desc}</TrackDescription>
          <LyricsTitle>Lyrics</LyricsTitle>
          <Lyrics>
          {lyricsArr.map((p, i) => (
            <React.Fragment key={i}>
              {p.map((l, i) => {
                return <><span key={i}>{l}</span><br/></>;
              })}<br/><br/>
              
            </React.Fragment>
          ))}
        </Lyrics>
          <PurchaseText>
            You can listen to the album on bandcamp, or purchase it for download
            or on CD. Also available on Spotify and other streaming platforms.
          </PurchaseText>
          <ButtonContainer>
            <Button
              className="button"
              href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
            >
              <ButtonText>Buy Album</ButtonText>
            </Button>
            <a href="https://open.spotify.com/album/7aqR4wRMPJqMFmWKdmWDsR?si=CBKzaX2xSJS3PFnIPO0o6w">
              <Spotify className="icon" />
            </a>
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
    lyricsArr: string[][];
    audio: string;
  }) {
    return (
      <DetailsContainer id={id}>
        <TrackTitle>{title}</TrackTitle>
        <AudioPlayer id={id} src={audio}></AudioPlayer>
        <TrackDescription>{desc}</TrackDescription>
        <LyricsTitle>Lyrics</LyricsTitle>
        <Lyrics>
          {lyricsArr.map((p, i) => (
            <React.Fragment key={i}>
              {p.map((l, i) => {
                return <><span key={i}>{l}</span><br/></>;
              })}<br/><br/>
              
            </React.Fragment>
          ))}
        </Lyrics>
        <PurchaseText>
          You can listen to the album on bandcamp, or purchase it for download
          or on CD. Also available on Spotify and other streaming platforms.
        </PurchaseText>
        <ButtonContainer>
          <Button
            className="button"
            href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
          >
            <ButtonText>Buy Album</ButtonText>
          </Button>
          <a href="https://open.spotify.com/album/7aqR4wRMPJqMFmWKdmWDsR?si=CBKzaX2xSJS3PFnIPO0o6w">
            <Spotify className="icon" />
          </a>
        </ButtonContainer>
      </DetailsContainer>
    );
  }
  if (location.pathname === "/being_human") {
    if (window.innerWidth <= 500) {
      return (
        <ColorFilter>
          <AlbumTitle>Being Human</AlbumTitle>
          <TrackBox>
            <BHCarousel />
            <AlbumDescriptionsContainer>
              <AlbumDescription>
                Civilisations change but humans haven&#39;t. We are still the
                same mammal that evolved to be bipedal and walk across the earth
                thousands of years ago. Humanity, the ability to be
                compassionate, kind, humane - our emotions travel with us,
                coming and going on our journey through life. Lives enriched by
                contact with others and other species. Let&#39;s be better
                humans together.  If our music was difficult to assign a genre
                to on the previous albums, this presents a further challenge to
                those who need to do that. It remains acoustic. It remains heart
                to heart. Is that enough? What do you think? Answers on an email
                or postcard please… Special thanks to our wonderful friends
                Niall and Anne for their generous contributions.
              </AlbumDescription>
              <PurchaseText>
                You can listen to the album on bandcamp, or purchase it for
                download or on CD. Also available on Spotify and other streaming
                platforms.
              </PurchaseText>
              <ButtonContainer>
                <Button
                  className="button"
                  href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
                >
                  <ButtonText>Buy Album</ButtonText>
                </Button>
                <a href="https://open.spotify.com/album/7aqR4wRMPJqMFmWKdmWDsR?si=CBKzaX2xSJS3PFnIPO0o6w">
                  <Spotify className="icon" />
                </a>
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
              <AlbumTitle>Being Human</AlbumTitle>
              <AlbumDescription>
                Civilisations change but humans haven&#39;t. We are still the
                same mammal that evolved to be bipedal and walk across the earth
                thousands of years ago. Humanity, the ability to be
                compassionate, kind, humane - our emotions travel with us,
                coming and going on our journey through life. Lives enriched by
                contact with others and other species. Let&#39;s be better
                humans together.  If our music was difficult to assign a genre
                to on the previous albums, this presents a further challenge to
                those who need to do that. It remains acoustic. It remains heart
                to heart. Is that enough? What do you think? Answers on an email
                or postcard please… Special thanks to our wonderful friends
                Niall and Anne for their generous contributions.
              </AlbumDescription>
              <PurchaseText>
                You can listen to the album on bandcamp, or purchase it for
                download or on CD. Also available on Spotify and other streaming
                platforms.
              </PurchaseText>
              <ButtonContainer>
                <Button
                  className="button"
                  href="https://jojukes.bandcamp.com/album/the-ancestor-in-me"
                >
                  <ButtonText>Buy Album</ButtonText>
                </Button>
                <a href="https://open.spotify.com/album/7aqR4wRMPJqMFmWKdmWDsR?si=CBKzaX2xSJS3PFnIPO0o6w">
                  <Spotify className="icon" />
                </a>
              </ButtonContainer>
              <ClickInstructions>
                Click on an image to hear the song
              </ClickInstructions>
            </AlbumDescriptionsContainer>
          </TextBox>
          <TrackBox>
            <BHImagesGrid></BHImagesGrid>
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
            <BHCarousel></BHCarousel>
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
              <BHImagesGrid></BHImagesGrid>
            </TrackBox>
          </ColorFilter>
        </>
      );
    }
  }
}

export default BHAlbum;
