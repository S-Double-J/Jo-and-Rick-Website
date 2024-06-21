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

function WeavingImagesGrid() {
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
      <AlbumGrid>
        {imgs.map((img, index) => (
          <TrackButton src={img} key={index} />
        ))}
      </AlbumGrid>
    </>
  );
}

export default WeavingImagesGrid;
