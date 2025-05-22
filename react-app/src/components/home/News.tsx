import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;
const NewsTitle = styled.p`
  font-size: 2rem;
`;
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
                  Jo and Rick have been working really hard on their third album
                  ‘Being Human’ and are really excited to announce that it is
                  now available on Bandcamp, Spotify and other streaming
                  platforms, with a limited edition CD.
                  <br />
                  Their music has expanded in depth and expression as their
                  working relationship has become more unified. It still remains
                  hard to classify but their ability to shift between
                  instruments and styles, yet still retain their unique
                  character is undeniable.
                  <br />
                  This album focusses on what it is to be human, the emotions,
                  the challenges, the relationships between people, places and
                  the natural world. <br />
                  They have collaborated further with friend Niall Ross on
                  various saxophones and Anne Wood on violin.
                </TextNormal>
              </NewAlbum>
              <JoNewsBox>
                <TextLargeBold>Jo's News</TextLargeBold>
                <JoNewsInnerFrame>
                  <JoNewsInnerBox>
                    <TextLarge>Podcasts & Book Talks</TextLarge>
                    <TextNormal>
                      As well as her book talks Jo has been involved in some
                      exciting podcasts recently. You can listen here to her
                      being interviewed by Emily Wilkinson on her Desire Lines
                      podcast talking about her nature writing, books, music,
                      landscape, creativity, women’s voices and healing.
                    </TextNormal>
                    <Link
                      href="https://open.spotify.com/episode/3aazfQgGdLbeVuUENGOVpe?si=a08c6c5f064d456e"
                      className="button"
                    >
                      <LinkText>Listen on Spotify</LinkText>
                    </Link>
                    <TextNormal>
                      Jo's books 'Finding Home - Journeys with the Hillforts of
                      Shropshire' and ‘Finding Beauty – A Year of Nature Outside
                      Your Door’ are still available for purchase.
                    </TextNormal>
                    <Link
                      href="https://www.etsy.com/uk/shop/WolfwordsShop?ref=shop-header-name&listing_id=1614372614&from_page=listing"
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
                      well as with private groups running a variety of workshops
                      showing how connection to the land can influence and
                      inspire creative expression.
                      <br />
                      <br />
                      This year Jo will be collaborating with a poet and nature
                      photographer Phil Barnet (Birds Knit my Bones Together),
                      running her art and poetry workshop on ‘Connecting to
                      Nature’ and featuring a new song ‘I am making a nest of my
                      hair’ with a series of natural sculpture workshops based
                      around the theme of nests and protection.
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
                      Artisans Collective and has a solo art exhibition of her
                      work at The Guildhall, Much Wenlock in August.
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
                Rick's tour with ‘When Mountains Meet’ last year took him all
                around Scotland performing his unique blend of drumming and
                percussion. The CD soundtrack to the show is now available on
                Bandcamp and has reached number sixteen in the European World
                Music Charts. There could be more performances on the cards this
                year in Britain and abroad. We’ll keep you posted on any
                exciting developments.
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
              <TextNormal>
                For dates and times of Rick's Drumming workshops please check
                the Herman Art's Website.
              </TextNormal>
              <Link
                href="https://www.hermon-arts.org.uk/whats-on"
                className="button"
              >
                <LinkText>Hermon Art's Website</LinkText>
              </Link>
              <Link href="http://www.eastorywilsound.co.uk" className="button">
                <LinkText>visit Rick's website</LinkText>
              </Link>
              <Link href="http://rickwilson.bandcamp.com" className="button">
                <LinkText>listen to Rick's music</LinkText>
              </Link>
            </RickNewsInnerBox>
          </RickNewsBox>
        </BentoFrame>
      </section>
    </>
  );
}

export default News;
