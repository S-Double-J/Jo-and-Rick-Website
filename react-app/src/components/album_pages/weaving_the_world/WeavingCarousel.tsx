import styled from "styled-components";
import TrackButton from "../../buttons/TrackButton";

const Carousel = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`;

function WeavingCarousel() {
    const imgs = [
        "/Images/Weaving the World/1-TheTwoCaradocs.jpg",
        "/Images/Weaving the World/2-InTheHollowOfATree.jpg",
        "/Images/Weaving the World/3-AndIShallGoUntoAHare.jpg",
        "/Images/Weaving the World/4-IBelieve.jpg",
        "/Images/Weaving the World/5-WeavingTheWorld.jpg",
        "/Images/Weaving the World/6-CompanyOfAnimals.jpg",
        "/Images/Weaving the World/7-TheField.jpg",
        "/Images/Weaving the World/8-Cleehill.jpg",
        "/Images/Weaving the World/9-Runesong.jpg",
        "/Images/Weaving the World/10-UnderTheEndlessSky.jpg",
        "/Images/Weaving the World/11-TheLandTalksToMe.jpg",
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

export default WeavingCarousel;
