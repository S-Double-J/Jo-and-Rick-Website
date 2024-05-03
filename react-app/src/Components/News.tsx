import styled from "styled-components";
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

const BeautyBox = styled.div`
  position: relative;
  height: 30rem;
  width: 30rem;
  border-radius: 50%;
  margin-right: 50px;
  overflow: hidden;
`;

const MountainBox = styled.div`
  position: relative;
  height: 30rem;
  width: 30rem;
  border-radius: 50%;
  margin-left: 50px;
  overflow: hidden;
`;

const ColorFilter = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
  opacity: 0;
`;

const FindingBeauty1 = styled.div`
  position: absolute;
  background: url("./src/Images/News Section/Jo1.jpg");
  height: 30rem;
  width: 30rem;
  background-size: cover;
  border-radius: 50%;
  border: 0;
  z-index: 0;
`;

const FindingBeauty2 = styled.div`
  position: absolute;
  background: url("./src/Images/News Section/Jo2.jpg");
  height: 1rem;
  width: 1rem;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  z-index: 1;
`;

const WhereMountainsMeet1 = styled.div`
  position: absolute;
  background: url("./src/Images/News Section/Rick1.jpg");
  height: 30rem;
  width: 30rem;
  background-size: cover;
  border-radius: 50%;
  border: 0;
`;

const WhereMountainsMeet2 = styled.div`
  position: absolute;
  background: url("./src/Images/News Section/Rick2.jpg");
  height: 1rem;
  width: 1rem;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  border: 0;
  z-index: 1;
`;

const NewsTitle = styled.p`
  font-size: 2rem;
`;

const NewsDescription = styled.p`
  position: absolute;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  height: 8.5rem;
  top: calc(50% - 6rem);
  border-radius: 50%;
  z-index: 3;
  opacity: 0;
`
function News() {
  return (
    <>
      <div>
        <TitleBox>
          <NewsTitle>NEWS</NewsTitle>
        </TitleBox>
        <ButtonBox>
          <BeautyBox className="hover-news">
            <ColorFilter className="color-filter" />
            <FindingBeauty1 />
            <FindingBeauty2 className="new-img"/>
            <NewsDescription className="color-filter">A YEAR OF NATURE ON YOUR DOORSTEP - JO'S LATEST BOOK AVAILABLE NOW // READ MORE</NewsDescription>
          </BeautyBox>
          <MountainBox className="hover-news">
            <ColorFilter className="color-filter" />
            <WhereMountainsMeet1 />
            <WhereMountainsMeet2 className="new-img"/>
            <NewsDescription className="color-filter">RICK ON TOUR IN SCOTLAND - PERFORMING WHEN MOUNTAINS MEET // READ MORE</NewsDescription>
          </MountainBox>
        </ButtonBox>
      </div>
    </>
  );
}

export default News;
