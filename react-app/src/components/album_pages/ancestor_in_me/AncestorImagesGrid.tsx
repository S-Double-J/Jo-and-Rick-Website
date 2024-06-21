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

function AncestorImagesGrid() {
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
      <AlbumGrid>
        {imgs.map((img, index) => (
          <TrackButton src={img} key={index} />
        ))}
      </AlbumGrid>
    </>
  );
}

export default AncestorImagesGrid;