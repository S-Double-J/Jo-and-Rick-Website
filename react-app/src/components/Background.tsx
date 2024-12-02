import styled from "styled-components";
import "../app/App.css";

const Background1 = styled.div`
  background-image: url(/Images/TheAncestorInMe/12-InDifferentWorlds.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100svh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
  opacity: 1;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
const Background2 = styled.div`
  background-image: url(/Images/TheAncestorInMe/11-BoneAndStone.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100svh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0;
  box-sizing: border-box;
`;
const Background3 = styled.div`
  background-image: url(/Images/TheAncestorInMe/10-InSuspension.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100svh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0;
  box-sizing: border-box;
`;
const Background4 = styled.div`
  background-image: url(/Images/TheAncestorInMe/1-StoriesOnYourSkin.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100svh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0;
  box-sizing: border-box;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100svh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;
export const Background = () => {
  return (
    <>
      <ImgContainer id="bg-img-container">
        <Background1 className="bg-img-1" />
        <Background2 className="bg-img-2" />
        <Background3 className="bg-img-3" />
        <Background4 className="bg-img-4" />
      </ImgContainer>
    </>
  );
};
