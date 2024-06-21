import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled(Link)`
  z-index: 0;
  position: relative;
  display: block;
  @media (max-width: 500px){
    width: 300px;
    height: 300px;
    margin: 2px;
  }  
  @media (max-width: 360px){
    width: 250px;
    height: 250px;
    margin: 2px;
  }
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
    @media (max-width: 500px){
    width: 300px;
    height: 300px;
  } 
  @media (max-width: 360px){
    width: 250px;
    height: 250px;
  }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;
const ColorFilter = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  @media (hover : none){
    opacity: 1;
  }
`;
const TextBox = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
const TrackName = styled.p`
  font-size: 1.5em;
  width: 100%;
  z-index: 2;
  opacity: 0;
  @media (hover : none){
    opacity: 1;
  }
  margin-bottom: 0px;
  @media (max-width: 630px){
    font-size: 1.2em;
  }
  @media (max-width: 550px){
    font-size: 1.1em;
  }
  @media (max-width: 510px){
    font-size: 1.5em;
  }
`;
const ClickToPlay = styled.p`
  font-size: 1em;
  width: 100%;
  z-index: 2;
  opacity: 0;
  @media (hover : none){
    opacity: 1;
  }
  margin-top: 6px;
  @media (max-width: 630px){
    font-size: 0.8em;
  }
  @media (max-width: 550px){
    font-size: 0.7em;
  }
  @media (max-width: 510px){
    font-size: 1em;
  }
`;

function FindTrackName(string: string) {
  const fileName = (string.split("/").pop() as string) || "";
  const titleRegex = /[A-Za-z\'()]/g;
  const trackArray = fileName.match(titleRegex);

  const formattedTrackArray: string[] = [];
  if (trackArray) {
    for (let i = 0; i < trackArray.length; i++) {
      const currentChar = trackArray[i];
      const previousChar = trackArray[i - 1];

      if (i >= 1) {
        if (currentChar.match(/[A-Z]/) && previousChar !== "(") {
          formattedTrackArray.push(" ");
        }
        if (currentChar === "(") {
          formattedTrackArray.push(" ");
        }
      }
      formattedTrackArray.push(currentChar);
    }
  }

  const trackName = formattedTrackArray.join("").trim().slice(0, -3);

  return trackName;
}
function FindRouteNumber(string: string) {
  const routeRegex = /\d/g;
  const fileName = (string.split("/").pop() as string);
  const routeNumberArr = fileName.match(routeRegex);
  const routeNumber = routeNumberArr?.join("") || "";
  return routeNumber;
}
interface TrackProps {
  key: number;
  src: string;
}
function TrackButton({ src, key }: TrackProps) {
  const routeNumber = FindRouteNumber(src).toString();

  return (
    <>
      <Container className="track-button" to={routeNumber}>
        <ColorFilter className="color-filter" />
        <TextBox>
          <TrackName className="color-filter">{FindTrackName(src)}</TrackName>
          <ClickToPlay className="color-filter">Click to play</ClickToPlay>
        </TextBox>
        <Image key={key} src={src} />
      </Container>
    </>
  );
}

export default TrackButton;
