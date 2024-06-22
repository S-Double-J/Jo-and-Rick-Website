import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ColorFilter = styled.div`
  height: calc(100vh - 117px);
  background: rgba(0, 0, 0, 0.76);
  display: flex;
  justify-content: center;
  z-index: -1;
  overflow: auto;
`;
const Container = styled.div`
  width: 80vw;
`;
const JosNews = styled.p`
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
const SmallerText = styled.p`
  font-size: 1rem;
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
`;
const Image = styled.img`
  border-radius: 25px;
  width: 40vw;
  margin: 50px;
  @media (max-width: 900px) {
    margin: 25px
  }
  @media (max-width: 550px){
    float: left;
    margin: 0;
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;
const Title = styled.p`
  font-size: 2rem;
  margin-top: 50px;
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
  @media (max-width: 700px){
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
  @media (max-width: 700px){
    margin-bottom: 10px;
  }
  @media (max-width: 550px){
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
  margin-bottom: 50px;
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
const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  color: rgb(0, 140, 255);
  font-size: 4rem;
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.3s ease;
  &:hover {
    color: rgb(0, 35, 133);
    cursor: pointer;
  }
  @media (max-width: 900px) {
    font-size: 3rem;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const SocialBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function JoNews() {
  if (window.innerWidth <= 700) {
    return (
      <ColorFilter>
        <Container>
          <JosNews>Jo's News</JosNews>
          <Title>Book Talks</Title>
          <FloatBox>
            <Image
              src="Images/News Section/NewsImages/JoDoingBookTalk.jpg"
              alt="Jo Doing Book Talk"
            />
              <Text>
                As well as her music with Rick, Jo is conducting a series of
                book launch talks in independent bookshops about her second book
                ‘Finding Beauty – A Year of Nature Outside Your Door’. Some of
                these will include performing songs with Rick that started life
                as stories or poems within the book.
              </Text>
              </FloatBox>
            <TextBox>
              <SmallerText>The dates so far are;</SmallerText>
              <SmallerText>
                The Poetry Pharmacy – Bishops Castle Saturday 30th March 2pm
              </SmallerText>
              <SmallerText>Shrewsbury Museum and Art Gallery 22nd June @ 10:30am-12:00pm</SmallerText>
              <SmallerText>
                Castle Bookshop –Events in the bookshop Secret Garden as part of
                the Ludlow Fringe Festival – Saturday 13th July 6pm
              </SmallerText>
              <Link
                href="https://www.etsy.com/uk/listing/1614372614/finding-beauty-a-year-of-nature-outside"
                className="button"
              >
                <LinkText>Purchase Jo's Book</LinkText>
              </Link>
            </TextBox>
          <Title>Art and Jewellery</Title>
          <FloatBox>
            <Image
              src="Images/News Section/NewsImages/JoEarrings.jpg"
              alt="Jo jewellery"
            />
              <Text>
                As part of the Twelve Artisans collective, Jo will be selling
                her art, jewellery, books and CDs at the Twelve Artisans
                Collective summer show on Saturday 27th & 28th July and their
                Christmas Fair on Saturday 30th November & Sunday 1st December
                both at Jackfield Village Hall, Shropshire.
              </Text>
              <SocialBox>
                <SocialLink href="https://www.facebook.com/profile.php?id=100095584871985">
                  <FaFacebook />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/12_artisans/">
                  <FaInstagram />
                </SocialLink>
              </SocialBox>
          </FloatBox>
          <Title>Workshops</Title>
          <FloatBox>
            <Image
              src="Images/About Section/JoMakingJewelry.jpg"
              alt="Jo Making Jewelry"
            />
              <Text>
                Jo continues to deliver creative workshops in a variety of
                mediums from silversmithing, ancient crafting, song and movement
                to shiatsu healing. She works on retreats, arts council funded
                projects as well as with private groups. This July sees her
                running a new workshop at Festival at the Edge called ‘Land to
                Verse, Story to Song' showing how connection to the land can
                influence and inspire creative expression.
              </Text>
          </FloatBox>
            <TextBox>
              <Text>
                Next year Jo will be part of a touring art exhibition at Into
                the Wild festival in Norfolk running her art and poetry workshop
                on ‘Connecting to Nature’ and featuring a new song ‘I am making
                a nest of my hair’ running a series of natural sculpture
                workshops around the theme of nests and protection.
              </Text>
              <Link href="https://jojukes.wordpress.com/" className="button">
                <LinkText>visit Jo's website</LinkText>
              </Link>
            </TextBox>
        </Container>
      </ColorFilter>
    );
  } else {
    return (
      <ColorFilter>
        <Container>
          <JosNews>Jo's News</JosNews>
          <Title>Book Talks</Title>
          <Box>
            <Image
              src="Images/News Section/NewsImages/JoDoingBookTalk.jpg"
              alt="Jo Doing Book Talk"
            />
            <TextBox>
              <Text>
                As well as her music with Rick, Jo is conducting a series of
                book launch talks in independent bookshops about her second book
                ‘Finding Beauty – A Year of Nature Outside Your Door’. Some of
                these will include performing songs with Rick that started life
                as stories or poems within the book.
              </Text>
              <SmallerText>The dates so far are;</SmallerText>
              <SmallerText>
                The Poetry Pharmacy – Bishops Castle Saturday 30th March 2pm
              </SmallerText>
              <SmallerText>Shrewsbury Museum and Art Gallery @ 10:30am-12:00pm</SmallerText>
              <SmallerText>
                Castle Bookshop –Events in the bookshop Secret Garden as part of
                the Ludlow Fringe Festival – Saturday 13th July 6pm
              </SmallerText>
              <Link
                href="https://www.etsy.com/uk/listing/1614372614/finding-beauty-a-year-of-nature-outside"
                className="button"
              >
                <LinkText>Purchase Jo's Book</LinkText>
              </Link>
            </TextBox>
          </Box>
          <Title>Art and Jewellery</Title>
          <Box>
            <TextBox>
              <Text>
                As part of the Twelve Artisans collective, Jo will be selling
                her art, jewellery, books and CDs at the Twelve Artisans
                Collective summer show on Saturday 27th & 28th July and their
                Christmas Fair on Saturday 30th November & Sunday 1st December
                both at Jackfield Village Hall, Shropshire.
              </Text>
              <SocialBox>
                <SocialLink href="https://www.facebook.com/profile.php?id=100095584871985">
                  <FaFacebook />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/12_artisans/">
                  <FaInstagram />
                </SocialLink>
              </SocialBox>
            </TextBox>
            <Image
              src="Images/News Section/NewsImages/JoEarrings.jpg"
              alt="Jo jewellery"
            />
          </Box>
          <Title>Workshops</Title>
          <Box>
            <Image
              src="Images/About Section/JoMakingJewelry.jpg"
              alt="Jo Making Jewelry"
            />
            <TextBox>
              <Text>
                Jo continues to deliver creative workshops in a variety of
                mediums from silversmithing, ancient crafting, song and movement
                to shiatsu healing. She works on retreats, arts council funded
                projects as well as with private groups. This July sees her
                running a new workshop at Festival at the Edge called ‘Land to
                Verse, Story to Song' showing how connection to the land can
                influence and inspire creative expression.
              </Text>
              <Text>
                Next year Jo will be collaborating with a poet and nature photographer, running her art and poetry workshop
                on ‘Connecting to Nature’ and featuring a new song ‘I am making
                a nest of my hair’ with a series of natural sculpture
                workshops based around the theme of nests and protection.
              </Text>
              <Link href="https://jojukes.wordpress.com/" className="button">
                <LinkText>visit Jo's website</LinkText>
              </Link>
            </TextBox>
          </Box>
        </Container>
      </ColorFilter>
    );
  }
}

export default JoNews;
