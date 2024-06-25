import styled from "styled-components";

const ColorFilter = styled.div`
  height: calc(100svh - 117px);
  background: rgba(0, 0, 0, 0.76);
  display: flex;
  justify-content: center;
  z-index: -1;
  overflow: auto;
`;
const Container = styled.div`
  width: 80vw;
`;
const RicksNews = styled.p`
  font-size: 2.5rem;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
const Text = styled.p`
  font-size: 1.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
const Image = styled.img`
  border-radius: 25px;
  width: 40vw;
  margin: 50px;
  @media (max-width: 900px) {
    margin: 25px;
  }
  @media (max-width: 550px) {
    float: left;
    margin: 0;
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;
const ImageNoFloat = styled.img`
  border-radius: 25px;
  width: 80vw;
  margin: 50px;
  @media (max-width: 900px) {
    margin: 25px;
  }
  @media (max-width: 550px) {
    margin: 0;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;
const Title = styled.p`
  font-size: 2rem;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 700px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
const FloatBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
  @media (max-width: 550px) {
    display: inline-block;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Link = styled.a`
  border-radius: 8rem;
  text-decoration: none;
  width: 20rem;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 12rem;
  }
`;
const LinkText = styled.p`
  font-size: 1.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

function RickNews() {
  if (window.innerWidth <= 700) {
    return (
      <ColorFilter>
        <Container>
          <RicksNews>Rick's News</RicksNews>
          <Title>Other Music Projects</Title>
          <FloatBox>
            <ImageNoFloat
              src="Images/News Section/NewsImages/WhenMountainsMeet.jpg"
              alt="When Mountains Meet"
            />
            <Text>
              The early part of this year saw Rick spending time recording the
              music for the Scottish tour of ‘When Mountains Meet’. Six
              musicians contributed to these sessions which happened at the
              wonderful Castlesound studios, south of Edinburgh. The final
              mixdowns are now completed and are now available in CD form and on
              Bandcamp, accompanying the tour which ran from April to June 2024. For
              the show, the music was all performed live. All the music was
              written by Anne Wood and the piece tells the true story of her
              going to find her estranged father in Pakistan.
            </Text>
            <Link href="https://www.whenmountainsmeet.com/" className="button">
              <LinkText>When Mountains Meet</LinkText>
            </Link>
          </FloatBox>
          <Title>Drumming Workshops</Title>
          <FloatBox>
            <Image
              src="Images/News Section/Rick1.jpg"
              alt="Rick Drumming Workshops"
            />
            <Text>
              As well as working with musical partner Jo, Rick runs regular
              monthly drumming and rhythm workshops at Hermon Arts in Oswestry,
              Shropshire and is also available to private groups for booking.
            </Text>
            <Text>
              Rick is also trialing a second monthly drumming session at Hafan
              Yr Afon, Newtown, Powys.
            </Text>
            <Link href="http://www.eastorywilsound.co.uk" className="button">
              <LinkText>visit Rick's website</LinkText>
            </Link>
            <Link href="http://rickwilson.bandcamp.com" className="button">
              <LinkText>listen to Rick's music</LinkText>
            </Link>
          </FloatBox>
        </Container>
      </ColorFilter>
    );
  }
  return (
    <ColorFilter>
      <Container>
        <RicksNews>Rick's News</RicksNews>
        <Title>Other Music Projects</Title>
        <Box>
          <TextBox>
            <Text>
              The early part of this year saw Rick spending time recording the
              music for the Scottish tour of ‘When Mountains Meet’. Six
              musicians contributed to these sessions which happened at the
              wonderful Castlesound studios, south of Edinburgh. The final
              mixdowns are now completed and are now available in CD form and on
              Bandcamp, accompanying the tour which ran from April to June 2024. For
              the show, the music was all performed live. All the music was
              written by Anne Wood and the piece tells the true story of her
              going to find her estranged father in Pakistan.
            </Text>
            <Link href="https://www.whenmountainsmeet.com/" className="button">
              <LinkText>When Mountains Meet</LinkText>
            </Link>
          </TextBox>
          <Image
            src="Images/News Section/NewsImages/WhenMountainsMeet.jpg"
            alt="When Mountains Meet"
          />
        </Box>
        <Title>Drumming Workshops</Title>
        <Box>
          <Image
            src="Images/News Section/Rick1.jpg"
            alt="Rick Drumming Workshops"
          />
          <TextBox>
            <Text>
              As well as working with musical partner Jo, Rick runs regular
              monthly drumming and rhythm workshops at Hermon Arts in Oswestry,
              Shropshire and is also available to private groups for booking.
            </Text>
            <Text>
              Rick is also trialing a second monthly drumming session at Hafan
              Yr Afon, Newtown, Powys.
            </Text>
            <Link href="http://www.eastorywilsound.co.uk" className="button">
              <LinkText>visit Rick's website</LinkText>
            </Link>
            <Link href="http://rickwilson.bandcamp.com" className="button">
              <LinkText>listen to Rick's music</LinkText>
            </Link>
          </TextBox>
        </Box>
      </Container>
    </ColorFilter>
  );
}

export default RickNews;
