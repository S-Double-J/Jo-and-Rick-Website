import styled from "styled-components";

const FindingBeauty = styled.button`
background: url("./src/Images/News Section/Rick1.jpg");
height: 25rem;
width: 25rem;
background-size: cover;
border-radius: 50%;
border: 0;`;
const WhereMountainsMeet = styled.button`
background: url("./src/Images/News Section/Jo1.jpg");
height: 25rem;
width: 25rem;
background-size: cover;
border-radius: 50%;
border: 0;`;
function News() {
  return (
    <>
      <p>NEWS</p>
      <FindingBeauty></FindingBeauty>
      <WhereMountainsMeet></WhereMountainsMeet>
    </>
  );
}

export default News;
