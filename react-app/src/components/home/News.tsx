import styled from "styled-components";
import { Link } from "react-router-dom";
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
  padding-top: 200px;
  @media (max-width: 580px){
    padding-top: 50px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
  @media (max-width: 580px){
    flex-direction: column-reverse;
  }
`;

const BeautyBox = styled(Link)`
  position: relative;
  height: 30rem;
  max-height: 660px;
  min-height: 540px;
  min-width: 540px;
  width: 30rem;
  max-width: 660px;
  border-radius: 50%;
  margin-right: 50px;
  overflow: hidden;
      @media (max-width: 1200px){
    width: 400px;
    height: 400px;
    min-height:400px;
    min-width: 400px;
  }
      @media (max-width: 950px) {
    width: 300px;
    height: 300px;
    min-height:300px;
    min-width: 300px;
    margin-right: 30px;
  }
  @media (max-width: 710px){
    width: 250px;
    height: 250px;
    min-height:250px;
    min-width: 250px;
    margin-right: 20px
  }
  @media (max-width: 580px){
    margin: 10px;    
  }
`;

const MountainBox = styled(Link)`
  position: relative;
  height: 30rem;
  max-height: 660px;
  min-height: 540px;
  min-width: 540px;
  width: 30rem;
  max-width: 660px;
  border-radius: 50%;
  margin-left: 50px;
  overflow: hidden;
      @media (max-width: 1200px){
    width: 400px;
    height: 400px;
    min-height:400px;
    min-width: 400px;
  }
      @media (max-width: 950px) {
    width: 300px;
    height: 300px;
    min-height:300px;
    min-width: 300px;
    margin-left: 30px;
  }
  @media (max-width: 710px){
    width: 250px;
    height: 250px;
    min-height:250px;
    min-width: 250px;
    margin-left: 20px;
  }
  @media (max-width: 580px){
    margin: 10px;    
  }
`;

const ColorFilter = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  @media (hover : none) {
    opacity: 1;
  }
`;

const FindingBeauty1 = styled.div`
  position: absolute;
  background: url("/Images/News Section/Jo1.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  border-radius: 50%;
  border: 0;
  z-index: 0;
`;

const FindingBeauty2 = styled.div`
  position: absolute;
  background: url("/Images/About Section/FindingBeautyBook.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  @media (hover : none) {
    opacity: 1;
  }
`;

const WhereMountainsMeet1 = styled.div`
  position: absolute;
  background: url("/Images/News Section/Rick1.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  border-radius: 50%;
  border: 0;
`;

const WhereMountainsMeet2 = styled.div`
  position: absolute;
  background: url("/Images/News Section/Rick2.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  border: 0;
  z-index: 1;
  opacity: 0;
  @media (hover : none) {
    opacity: 1;
  }
`;

const NewsTitle = styled.p`
  font-size: 2rem;
`;

const NewsDescription = styled.p`
  position: absolute;
  font-size: 1.7rem;
  font-weight: 300;
  text-align: center;
  width: 90%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 3;
  opacity: 0;
  @media (hover : none) {
    opacity: 1;
  }
  @media (max-width: 950px){
    font-size: 1.3rem;
  }
  @media (max-width: 710px){
    font-size: 1.1rem;
  }
`
const Circle = styled.div`
  left: 5%;
  top: 5%;
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: 1px solid white;
  z-index: 2;
  opacity: 0;
  @media (hover : none) {
    opacity: 1;
  }
`;

function News() {
  return (
    <>
      <section id="News">
        <TitleBox>
          <NewsTitle>NEWS</NewsTitle>
        </TitleBox>
        <ButtonBox>
          <BeautyBox to="jo_news" className="news">
            <ColorFilter className="color-filter" />
            <Circle className="color-filter" />
            <FindingBeauty1 />
            <FindingBeauty2 className="color-filter"/>
            <NewsDescription className="color-filter">A YEAR OF NATURE ON YOUR DOORSTEP - JO'S LATEST BOOK AVAILABLE NOW // READ MORE</NewsDescription>
          </BeautyBox>
          <MountainBox to="rick_news" className="news">
            <ColorFilter className="color-filter" />
            <Circle className="color-filter" />
            <WhereMountainsMeet1 />
            <WhereMountainsMeet2 className="color-filter"/>
            <NewsDescription className="color-filter">RICK ON TOUR IN SCOTLAND - PERFORMING WHEN MOUNTAINS MEET // READ MORE</NewsDescription>
          </MountainBox>
        </ButtonBox>
      </section>
    </>
  );
}

export default News;
