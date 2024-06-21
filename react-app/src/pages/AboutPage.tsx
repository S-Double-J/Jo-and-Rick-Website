import styled from "styled-components";

const ColorFilter = styled.div`
  height: calc(100vh - 117px);
  width: 100%;
  background: rgba(0, 0, 0, 0.76);
  display: flex;
  justify-content: center;
  z-index: -1;
  overflow: auto;
  @media (max-width: 500px){
  }
`;
const Name = styled.p`
  font-size: 2.5rem;
`;
const Text = styled.p`
  font-size: 1.5rem;
  margin-left: 50px;
  margin-right: 50px;
  @media (max-width: 900px){
    font-size: 1.2rem;
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 800px){
    font-size: 1rem;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
const Image = styled.img`
  border-radius: 25px;
  width: 35vw;
`;
const MobileImageLeft = styled.img`
width: 50%;
border-radius: 25px;
float: left;
margin: 10px;
`;
const MobileImageRight = styled.img`
width: 50%;
border-radius: 25px;
float: right;
margin: 10px;
`;
const Container = styled.div`
  width: 80vw;
  @media (max-width: 500px){
    width: 90vw;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 500px){
    margin-top: 40px;
    margin-bottom: 40px;
    display: inline-block;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Link = styled.a`
  border-radius: 8rem;
  text-decoration: none;
  width: 15rem;
  @media (max-width: 900px){
    width: 12rem;
  }
  @media (max-width: 800px){
    width: 10rem;
  }
  @media (max-width: 500px){
    left: 50%;
    transform: translate( -50%, 0%)
  }
`;
const LinkText = styled.p`
  font-size: 1.5rem;
  @media (max-width: 900px){
    font-size: 1.2rem;
  }
  @media (max-width: 800px){
    font-size: 1rem;
  }
  `;

function AboutPage() {
  if (window.innerWidth <= 500){
    return (
      <ColorFilter>
      <Container>
        <Name>Jo</Name>
        <Box>
          <MobileImageLeft
            src="public/Images/About Section/Jo singing .jpg"
            alt="Jo singing"
          />
          <Text>
            Jo has many hats; poetry, silversmithing, art and song. With years
            of experience as an artist working in a wide range of mediums, each
            one seems to evolve constantly, growing into many new off-shoots.
          </Text>
        </Box>
        <Box>
          <MobileImageRight
            src="public/Images/About Section/Jo jewellery close up.jpg"
            alt="Jo jewellery close up"
          />
          <Text>
            From teaching creativity workshops to producing her own unique work,
            Jo takes the natural world and human history as her inspiration. Her
            organic, textured jewellery designs often look like archaeological
            finds dug out of the ground and illustrate the many layered approach
            of her work.
          </Text>
        </Box>
        <Box>
          <MobileImageLeft
            src="public/Images/About Section/FindingBeautyBook.jpg"
            alt="Finding Beauty Book"
          />
          <Text>
            Jo's visual eye translates into her evocative nature writing. The
            land comes alive and builds a connection to place in a sensory
            relationship for the reader to experience. With two books ‘Finding
            Home - Journeys with the Hillforts of Shropshire’ and ‘Finding
            Beauty - A Year of Nature Outside Your Door' to her name, she also
            writes regular nature articles for her local Herald and blogs on her
            wordpress site.
          </Text>
        </Box>
        <Box>
          <MobileImageRight
            src="public/Images/About Section/Jo and Rick for about before Ricks bit.jpg"
            alt="Jo and Rick"
          />
          <Text>
            But all things evolve and change and whilst walking the land, Jo
            also began writing songs. It wasn't planned, they just arrived, with
            words and melodies complete and insistent on being sung. After some
            spontaneous improvisations with her friend Rick around a campfire, a
            natural collaboration swiftly emerged. Jo feels music is her true
            calling and her emotive lyrics and harmonies have now taken flight
            amongst Rick's percussive beats. Follow Jo's work on
            jojukes.wordpress.com
          </Text>
          <Link href="https://jojukes.wordpress.com/" className="button">
            <LinkText>Jo's website</LinkText>
          </Link>
        </Box>
        <Name>Rick</Name>
        <Box>
          <MobileImageLeft
            src="public/Images/About Section/RickLookingOverRiver.jpg"
            alt="Rick Looking Over River"
          />
          <Text>
            Rick Wilson works with sound: rhythmic and melodic, composed and
            improvised, contemporary and traditional. Drum kit, djembe, chenda,
            percussion of all kinds. Rick Wilson is so much more than just a
            drummer. With four solo albums to his name, he started messing
            around with drums in his teens whilst recovering from the fall-out
            of inadequate secondary music teaching.
          </Text>
        </Box>
        <Box>
          <MobileImageRight
            src="public/Images/About Section/RickOnDrumsB&W.jpg"
            alt="Rick On Drums black and white"
          />
          <Text>
            Listening to a wide range of music developed a can-do attitude that
            grew after meeting other like-minded souls. He honed his drumming in
            post punk bands Family Fodder and The Work before travelling to
            India to study Chenda temple drumming, Berber rhythms in Morocco and
            Brazilian carnival music in London. He also worked as a resident
            drummer for contemporary jazz weekends held along the Welsh Marches.
          </Text>
        </Box>
        <Box>
          <MobileImageLeft src="public/Images/News Section/Rick2.jpg" alt="Rick hands" />
          <Text>
            As accompanist for education and performance dance projects, he has
            also been a tutor for WOMAD and Glyndebourne and spent many years
            working throughout the UK with Common Lore Storytellers, poets and
            musicians, as both performer and teacher working in theatre and
            storytelling initiatives worldwide. Rick not only performs and
            teaches but composes, designs soundscapes and installations and runs
            music sessions as psychiatric therapy.
          </Text>
        </Box>
        <Box>
          <MobileImageRight
            src="public/Images/About Section/both hands drumming instead of Rick on zither.jpg"
            alt="Jo and Rick drumming"
          />
          <Text>
            Back to the present…Jo’s songs caught Rick's attention and his
            rhythm's weave through Jo’s songs like silk. Rick has the skill and
            ability to know just what to add and what to take away. As their
            musical collaboration grows with more songs, sounds, stories, words
            and poetry, the excitement now is in seeing where they will go from
            here… Follow Rick's story and career on eaststorywilsound.co.uk
          </Text>
          <Link href="http://www.eastorywilsound.co.uk"  className="button">
            <LinkText>Rick's website</LinkText>
          </Link>
        </Box>
      </Container>
    </ColorFilter>
    )
  }
  return (
    <ColorFilter>
      <Container>
        <Name>Jo</Name>
        <Box>
          <Text>
            Jo has many hats; poetry, silversmithing, art and song. With years
            of experience as an artist working in a wide range of mediums, each
            one seems to evolve constantly, growing into many new off-shoots.
          </Text>
          <Image
            src="public/Images/About Section/Jo singing .jpg"
            alt="Jo singing"
          />
        </Box>
        <Box>
          <Image
            src="public/Images/About Section/Jo jewellery close up.jpg"
            alt="Jo jewellery close up"
          />
          <Text>
            From teaching creativity workshops to producing her own unique work,
            Jo takes the natural world and human history as her inspiration. Her
            organic, textured jewellery designs often look like archaeological
            finds dug out of the ground and illustrate the many layered approach
            of her work.
          </Text>
        </Box>
        <Box>
          <Text>
            Jo's visual eye translates into her evocative nature writing. The
            land comes alive and builds a connection to place in a sensory
            relationship for the reader to experience. With two books ‘Finding
            Home - Journeys with the Hillforts of Shropshire’ and ‘Finding
            Beauty - A Year of Nature Outside Your Door' to her name, she also
            writes regular nature articles for her local Herald and blogs on her
            wordpress site.
          </Text>
          <Image
            src="public/Images/About Section/FindingBeautyBook.jpg"
            alt="Finding Beauty Book"
          />
        </Box>
        <Box>
          <Image
            src="public/Images/About Section/Jo and Rick for about before Ricks bit.jpg"
            alt="Jo and Rick"
          />
          <TextBox>
          <Text>
            But all things evolve and change and whilst walking the land, Jo
            also began writing songs. It wasn't planned, they just arrived, with
            words and melodies complete and insistent on being sung. After some
            spontaneous improvisations with her friend Rick around a campfire, a
            natural collaboration swiftly emerged. Jo feels music is her true
            calling and her emotive lyrics and harmonies have now taken flight
            amongst Rick's percussive beats. Follow Jo's work on
            jojukes.wordpress.com
          </Text>
          <Link href="https://jojukes.wordpress.com/" className="button">
            <LinkText>Jo's website</LinkText>
          </Link>
          </TextBox>
        </Box>
        <Name>Rick</Name>
        <Box>
          <Text>
            Rick Wilson works with sound: rhythmic and melodic, composed and
            improvised, contemporary and traditional. Drum kit, djembe, chenda,
            percussion of all kinds. Rick Wilson is so much more than just a
            drummer. With four solo albums to his name, he started messing
            around with drums in his teens whilst recovering from the fall-out
            of inadequate secondary music teaching.
          </Text>
          <Image
            src="public/Images/About Section/RickLookingOverRiver.jpg"
            alt="Rick Looking Over River"
          />
        </Box>
        <Box>
          <Image
            src="public/Images/About Section/RickOnDrumsB&W.jpg"
            alt="Rick On Drums black and white"
          />
          <Text>
            Listening to a wide range of music developed a can-do attitude that
            grew after meeting other like-minded souls. He honed his drumming in
            post punk bands Family Fodder and The Work before travelling to
            India to study Chenda temple drumming, Berber rhythms in Morocco and
            Brazilian carnival music in London. He also worked as a resident
            drummer for contemporary jazz weekends held along the Welsh Marches.
          </Text>
        </Box>
        <Box>
          <Text>
            As accompanist for education and performance dance projects, he has
            also been a tutor for WOMAD and Glyndebourne and spent many years
            working throughout the UK with Common Lore Storytellers, poets and
            musicians, as both performer and teacher working in theatre and
            storytelling initiatives worldwide. Rick not only performs and
            teaches but composes, designs soundscapes and installations and runs
            music sessions as psychiatric therapy.
          </Text>
          <Image src="public/Images/News Section/Rick2.jpg" alt="Rick hands" />
        </Box>
        <Box>
          <Image
            src="public/Images/About Section/both hands drumming instead of Rick on zither.jpg"
            alt="Jo and Rick drumming"
          />
          <TextBox>
          <Text>
            Back to the present…Jo’s songs caught Rick's attention and his
            rhythm's weave through Jo’s songs like silk. Rick has the skill and
            ability to know just what to add and what to take away. As their
            musical collaboration grows with more songs, sounds, stories, words
            and poetry, the excitement now is in seeing where they will go from
            here… Follow Rick's story and career on eaststorywilsound.co.uk
          </Text>
          <Link href="http://www.eastorywilsound.co.uk"  className="button">
            <LinkText>Rick's website</LinkText>
          </Link>
          </TextBox>
        </Box>
      </Container>
    </ColorFilter>
  );
}

export default AboutPage;
