import styled from "styled-components";
import TrackButton from "../../buttons/TrackButton";

const Carousel = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`;

function BHCarousel() {
  const imgs = [
    "/Images/Being Human/1-I Can Invisible Myself.jpg",
    "/Images/Being Human/2-Awenydd.jpg",
    "/Images/Being Human/3-Rejoicing and Exalting.jpg",
    "/Images/Being Human/4-Standing Stone.jpg",
    "/Images/Being Human/5-I am Making a Nest of my Hair.jpg",
    "/Images/Being Human/6-Rain.jpg",
    "/Images/Being Human/7-Being Human.jpg",
    "/Images/Being Human/8-Stop This Worrying.jpg",
    "/Images/Being Human/9-Rise Up.jpg",
    "/Images/Being Human/10-Crow Weaves Stories.jpg",
    "/Images/Being Human/11-How Many Lives Have You Touched.jpg",
    "/Images/Being Human/12-Everything's Possible.jpg",
  ];;
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

export default BHCarousel;
