import styled from "styled-components";
import TrackButton from "../../buttons/TrackButton";

const Carousel = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`;

function AncestorCarousel() {
  const imgs = [
    "/Images/TheAncestorInMe/1-StoriesOnYourSkin.jpg",
    "/Images/TheAncestorInMe/2-Imbolc(Light'sComing).jpg",
    "/Images/TheAncestorInMe/3-SheMovesThroughHerPhases.jpg",
    "/Images/TheAncestorInMe/4-DitchesAndRamparts.jpg",
    "/Images/TheAncestorInMe/5-CommonLand.jpg",
    "/Images/TheAncestorInMe/6-BlackFeather.jpg",
    "/Images/TheAncestorInMe/7-Water.jpg",
    "/Images/TheAncestorInMe/8-TheAncestorInMe.jpg",
    "/Images/TheAncestorInMe/9-ALifeTimeOfDigging.jpg",
    "/Images/TheAncestorInMe/10-InSuspension.jpg",
    "/Images/TheAncestorInMe/11-BoneAndStone.jpg",
    "/Images/TheAncestorInMe/12-InDifferentWorlds.jpg",
    "/Images/TheAncestorInMe/13-Doggerland(OceansRise).jpg",
    "/Images/TheAncestorInMe/14-Rock.jpg",
  ];
  return (
    <>
    <Carousel>
      {imgs.map((img, index) => (
        <TrackButton src={img} key={index} />
      ))}
    </Carousel>
    </>
  );
}

export default AncestorCarousel;
