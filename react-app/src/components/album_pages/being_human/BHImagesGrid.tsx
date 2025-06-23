import styled from "styled-components";
import TrackButton from "../../buttons/TrackButton";
const AlbumGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 5px;
  @media (max-width: 1619px){
    grid-template-columns: repeat(auto-fill, 240px);
  }
  @media (max-width: 1559px){
    grid-template-columns: repeat(auto-fill, 230px);
  }
  @media (max-width: 1499px){
    grid-template-columns: repeat(auto-fill, 220px);
  }
  @media (max-width: 1439px){
    grid-template-columns: repeat(auto-fill, 210px);
  }
  @media (max-width: 1379px){
    grid-template-columns: repeat(auto-fill, 200px);
  }
  @media (max-width: 1319px){
    grid-template-columns: repeat(auto-fill, 190px);
  }
  @media (max-width: 1279px){
    grid-template-columns: repeat(auto-fill, 180px);
  }
  @media (max-width: 1239px){
    grid-template-columns: repeat(auto-fill, 170px);
  }
  @media (max-width: 1199px){
    grid-template-columns: repeat(auto-fill, 160px);
  }
  @media (max-width: 1079px){
    grid-template-columns: repeat(auto-fill, 200px);
  }
  @media (max-width: 909px){
    grid-template-columns: repeat(auto-fill, 190px);
  }
  @media (max-width: 869px){
    grid-template-columns: repeat(auto-fill, 180px);
  }
  @media (max-width: 829px){
    grid-template-columns: repeat(auto-fill, 170px);
  }
  @media (max-width: 799px){
    grid-template-columns: repeat(auto-fill, 160px);
  }
  @media (max-width: 759px){
    grid-template-columns: repeat(auto-fill, 150px);
  }
  @media (max-width: 710px){
    grid-template-columns: repeat(auto-fill, 140px);
  }
  @media (max-width: 670px){
    grid-template-columns: repeat(auto-fill, 130px);
  }
  @media (max-width: 630px){
    grid-template-columns: repeat(auto-fill, 120px);
  }
  @media (max-width: 590px){
    grid-template-columns: repeat(auto-fill, 110px);
  }
  @media (max-width: 550px){
    grid-template-columns: repeat(auto-fill, 100px);
  }
  @media (max-width: 510px){
    grid-template-columns: repeat(auto-fill, 200px);
  }
  `;

function BHImagesGrid() {
  const imgs = [
    "/Images/Being Human/1-I Can Invisible Myself.jpg",
    "/Images/Being Human/2-Awenydd.jpg",
    "/Images/Being Human/3-Rejoicing And Exalting.jpg",
    "/Images/Being Human/4-Standing Stone.jpg",
    "/Images/Being Human/5-I Am Making A Nest Of My Hair.jpg",
    "/Images/Being Human/6-Rain.jpg",
    "/Images/Being Human/7-Being Human.jpg",
    "/Images/Being Human/8-Stop This Worrying.jpg",
    "/Images/Being Human/9-Rise Up.jpg",
    "/Images/Being Human/10-Crow Weaves Stories.jpg",
    "/Images/Being Human/11-How Many Lives Did You Touch.jpg",
    "/Images/Being Human/12-Everything's Possible.jpg",
  ];
  return (
    <>
      <AlbumGrid>
        {imgs.map((img, index) => (
          <TrackButton src={img} key={index} />
        ))}
      </AlbumGrid>
    </>
  );
}

export default BHImagesGrid;