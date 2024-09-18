import styled from "styled-components";
// import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

// const ButtonBox = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 5px;
//   @media (max-width: 580px) {
//     flex-direction: column-reverse;
//   }
// `;

// const BeautyBox = styled(Link)`
//   position: relative;
//   height: 30rem;
//   max-height: 660px;
//   min-height: 540px;
//   min-width: 540px;
//   width: 30rem;
//   max-width: 660px;
//   border-radius: 50%;
//   margin-right: 50px;
//   overflow: hidden;
//   @media (max-width: 1200px) {
//     width: 400px;
//     height: 400px;
//     min-height: 400px;
//     min-width: 400px;
//   }
//   @media (max-width: 950px) {
//     width: 300px;
//     height: 300px;
//     min-height: 300px;
//     min-width: 300px;
//     margin-right: 30px;
//   }
//   @media (max-width: 710px) {
//     width: 250px;
//     height: 250px;
//     min-height: 250px;
//     min-width: 250px;
//     margin-right: 20px;
//   }
//   @media (max-width: 580px) {
//     margin: 10px;
//   }
// `;

// const MountainBox = styled(Link)`
//   position: relative;
//   height: 30rem;
//   max-height: 660px;
//   min-height: 540px;
//   min-width: 540px;
//   width: 30rem;
//   max-width: 660px;
//   border-radius: 50%;
//   margin-left: 50px;
//   overflow: hidden;
//   @media (max-width: 1200px) {
//     width: 400px;
//     height: 400px;
//     min-height: 400px;
//     min-width: 400px;
//   }
//   @media (max-width: 950px) {
//     width: 300px;
//     height: 300px;
//     min-height: 300px;
//     min-width: 300px;
//     margin-left: 30px;
//   }
//   @media (max-width: 710px) {
//     width: 250px;
//     height: 250px;
//     min-height: 250px;
//     min-width: 250px;
//     margin-left: 20px;
//   }
//   @media (max-width: 580px) {
//     margin: 10px;
//   }
// `;

// const ColorFilter = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   background-color: rgba(0, 0, 0, 0.6);
//   z-index: 2;
//   top: 0;
//   left: 0;
//   position: absolute;
//   opacity: 0;
//   @media (hover: none) {
//     opacity: 1;
//   }
// `;

// const FindingBeauty1 = styled.div`
//   position: absolute;
//   background: url("/Images/News Section/Jo1.jpg");
//   height: 100%;
//   width: 100%;
//   background-size: cover;
//   border-radius: 50%;
//   border: 0;
//   z-index: 0;
// `;

// const FindingBeauty2 = styled.div`
//   position: absolute;
//   background: url("/Images/About Section/FindingBeautyBook.jpg");
//   height: 100%;
//   width: 100%;
//   background-size: cover;
//   background-position: center center;
//   border-radius: 50%;
//   z-index: 1;
//   opacity: 0;
//   @media (hover: none) {
//     opacity: 1;
//   }
// `;

// const WhereMountainsMeet1 = styled.div`
//   position: absolute;
//   background: url("/Images/News Section/Rick1.jpg");
//   height: 100%;
//   width: 100%;
//   background-size: cover;
//   border-radius: 50%;
//   border: 0;
// `;

// const WhereMountainsMeet2 = styled.div`
//   position: absolute;
//   background: url("/Images/News Section/Rick2.jpg");
//   height: 100%;
//   width: 100%;
//   background-size: cover;
//   background-position: center center;
//   border-radius: 50%;
//   border: 0;
//   z-index: 1;
//   opacity: 0;
//   @media (hover: none) {
//     opacity: 1;
//   }
// `;

const NewsTitle = styled.p`
  font-size: 2rem;
`;

// const NewsDescription = styled.p`
//   position: absolute;
//   font-size: 1.7rem;
//   font-weight: 300;
//   text-align: center;
//   width: 90%;
//   top: 45%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 50%;
//   z-index: 3;
//   opacity: 0;
//   @media (hover: none) {
//     opacity: 1;
//   }
//   @media (max-width: 950px) {
//     font-size: 1.3rem;
//   }
//   @media (max-width: 710px) {
//     font-size: 1.1rem;
//   }
// `;
// const Circle = styled.div`
//   left: 5%;
//   top: 5%;
//   position: absolute;
//   width: 90%;
//   height: 90%;
//   border-radius: 50%;
//   border: 1px solid white;
//   z-index: 2;
//   opacity: 0;
//   @media (hover: none) {
//     opacity: 1;
//   }
// `;

const BentoFrame = styled.div`
  display: flex;
  padding: 0px 200px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
  @media screen and (max-width: 1600px) {
    padding: 0px 100px;
  }
`;
const LeftFrame = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;
const RickNewsBox = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 350px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  @media screen and (max-width: 850px) {
    max-width: none;
  }
`;
const LatestNewsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;
const JoNewsBox = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;
const TextLargeBold = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;
const TextLarge = styled.p`
  font-size: 1.8rem;
  margin: 10px 0px;
`;
const TextNormal = styled.p`
  font-size: 1rem;
  margin: 10px 0px;
`;
const RickNewsInnerBox = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  border: 2px solid #949494;
`;
const NewAlbum = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  align-self: stretch;
  border-radius: 20px;
  border: 2px solid #949494;
`;
const JoNewsInnerFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
`;
const JoNewsInnerBox = styled.div`
  display: flex;
  min-width: 240px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 20px;
  border: 2px solid #949494;
`;
const Link = styled.a`
  border-radius: 8rem;
  text-decoration: none;
  width: 12rem;
  @media (max-width: 900px) {
    width: 12rem;
  }
`;
const LinkText = styled.p`
  font-size: 1rem;
`;
const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  color: rgb(0, 140, 255);
  font-size: 3em;
  margin: 0px 10px;
  transition: 0.3s ease;
  &:hover {
    color: rgb(0, 35, 133);
    cursor: pointer;
  }
`;
const SocialBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
function News() {
  return (
    <>
      <section id="News">
        <TitleBox>
          <NewsTitle>NEWS</NewsTitle>
        </TitleBox>
        <BentoFrame>
          <LeftFrame>
            <LatestNewsBox>
              <TextLargeBold>Latest News</TextLargeBold>
              <NewAlbum>
                <TextLarge>Jo and Rick's Third Album</TextLarge>
                <TextNormal>
                  After a busy summer playing at festivals and in Norfolk and
                  Scotland, Jo and Rick are looking forward to an autumn
                  performing locally in the Welsh Marches and working on songs
                  from their upcoming third album 'Being Human'. <br />
                  <br />
                  Jo is running a series of creative workshops focussing on
                  connecting to nature and looking forward to a new arts
                  collaboration next year involving poetry, sculpture and song.
                  <br />
                  Rick continues to run his monthly drum sessions in Oswestry
                  and his work as touring percussionist with 'When Mountains
                  Meet' could see another running in Scotland next year. 
                </TextNormal>
              </NewAlbum>
              <JoNewsBox>
                <TextLargeBold>Jo's News</TextLargeBold>
                <JoNewsInnerFrame>
                  <JoNewsInnerBox>
                    <TextLarge>Book Talks</TextLarge>
                    <TextNormal>
                      As well as her music with Rick, Jo is conducting a series
                      of book launch talks in independent bookshops about her
                      second book ‘Finding Beauty – A Year of Nature Outside
                      Your Door’. Some of these will include performing songs
                      with Rick that started life as stories or poems within the
                      book.
                      <br />
                      <br />
                      The dates so far are;
                      <br />
                      <br />
                      The Poetry Pharmacy – Bishops Castle Saturday 30th March @
                      2pm
                      <br />
                      <br /> Shrewsbury Museum and Art Gallery @ 10:30am-12:00pm
                      <br />
                      <br />
                      Castle Bookshop –Events in the bookshop Secret Garden as
                      part of the Ludlow Fringe Festival – Saturday 13th July @
                      6pm
                    </TextNormal>
                    <Link
                      href="https://www.etsy.com/uk/listing/1614372614/finding-beauty-a-year-of-nature-outside"
                      className="button"
                    >
                      <LinkText>Purchase Jo's Book</LinkText>
                    </Link>
                  </JoNewsInnerBox>
                  <JoNewsInnerBox>
                    <TextLarge>Workshops</TextLarge>
                    <TextNormal>
                      Jo continues to deliver creative workshops in a variety of
                      mediums from silversmithing, ancient crafting, song and
                      movement to shiatsu healing. <br />
                      She works on retreats, arts council funded projects as
                      well as with private groups.
                      <br />
                      This July sees her running a new workshop at Festival at
                      the Edge called ‘Land to Verse, Story to Song' showing how
                      connection to the land can influence and inspire creative
                      expression. <br />
                      <br />
                      Next year Jo will be collaborating with a poet and nature
                      photographer, running her art and poetry workshop on
                      ‘Connecting to Nature’ and featuring a new song ‘I am
                      making a nest of my hair’ with a series of natural
                      sculpture workshops based around the theme of nests and
                      protection.
                    </TextNormal>
                    <Link
                      href="https://jojukes.wordpress.com/"
                      className="button"
                    >
                      <LinkText>visit Jo's website</LinkText>
                    </Link>
                  </JoNewsInnerBox>
                  <JoNewsInnerBox>
                    <TextLarge>Art and Jewellery</TextLarge>
                    <TextNormal>
                      As part of the Twelve Artisans collective, Jo will be
                      selling her art, jewellery, books and CDs at the Twelve
                      Artisans Collective summer show on Saturday 27th & 28th
                      July and their Christmas Fair on Saturday 30th November &
                      Sunday 1st December both at Jackfield Village Hall,
                      Shropshire.
                    </TextNormal>
                    <SocialBox>
                      <SocialLink href="https://www.facebook.com/profile.php?id=100095584871985">
                        <FaFacebook />
                      </SocialLink>
                      <SocialLink href="https://www.instagram.com/12_artisans/">
                        <FaInstagram />
                      </SocialLink>
                    </SocialBox>
                  </JoNewsInnerBox>
                </JoNewsInnerFrame>
              </JoNewsBox>
            </LatestNewsBox>
          </LeftFrame>
          <RickNewsBox>
            <TextLargeBold>Rick's News</TextLargeBold>
            <RickNewsInnerBox>
              <TextLarge>When Mountains Meet</TextLarge>
              <TextNormal>
                The early part of this year saw Rick spending time recording the
                music for the Scottish tour of ‘When Mountains Meet’. Six
                musicians contributed to these sessions which happened at the
                wonderful Castlesound studios, south of Edinburgh. The final
                mixdowns are now completed and are now available in CD form and
                on Bandcamp, accompanying the tour which ran from April to June
                2024. For the show, the music was all performed live. All the
                music was written by Anne Wood and the piece tells the true
                story of her going to find her estranged father in Pakistan.
              </TextNormal>
              <Link
                href="https://www.whenmountainsmeet.com/"
                className="button"
              >
                <LinkText>When Mountains Meet</LinkText>
              </Link>
            </RickNewsInnerBox>
            <RickNewsInnerBox>
              <TextLarge>Drumming Workshops</TextLarge>
              <TextNormal>
                As well as working with musical partner Jo, Rick runs regular
                monthly drumming and rhythm workshops at Hermon Arts in
                Oswestry, Shropshire and is also available to private groups for
                booking. Rick is also trialing a second monthly drumming session
                at Hafan Yr Afon, Newtown, Powys.
              </TextNormal>
                <Link
                  href="http://www.eastorywilsound.co.uk"
                  className="button"
                >
                  <LinkText>visit Rick's website</LinkText>
                </Link>
                <Link href="http://rickwilson.bandcamp.com" className="button">
                  <LinkText>listen to Rick's music</LinkText>
                </Link>
            </RickNewsInnerBox>
          </RickNewsBox>
        </BentoFrame>
        {/* <ButtonBox>
          <BeautyBox to="jo_news" className="news">
            <ColorFilter className="color-filter" />
            <Circle className="color-filter" />
            <FindingBeauty1 />
            <FindingBeauty2 className="color-filter" />
            <NewsDescription className="color-filter">
              A YEAR OF NATURE ON YOUR DOORSTEP - JO'S LATEST BOOK AVAILABLE NOW
              // READ MORE
            </NewsDescription>
          </BeautyBox>
          <MountainBox to="rick_news" className="news">
            <ColorFilter className="color-filter" />
            <Circle className="color-filter" />
            <WhereMountainsMeet1 />
            <WhereMountainsMeet2 className="color-filter" />
            <NewsDescription className="color-filter">
              RICK ON TOUR IN SCOTLAND - PERFORMING WHEN MOUNTAINS MEET // READ
              MORE
            </NewsDescription>
          </MountainBox>
        </ButtonBox> */}
      </section>
    </>
  );
}

export default News;
