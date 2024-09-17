import styled from "styled-components";

const ColorFilter = styled.div`
  height: calc(100svh - 117px);
  width: 100svw;
  background: rgba(0, 0, 0, 0.76);
  z-index: -1;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Name = styled.p`
  font-size: 2.5rem;
`;
const Text = styled.p`
  font-size: 1rem;
  /* margin-left: 50px;
  margin-right: 50px; */
  align-self: stretch;
  /* @media (max-width: 900px) {
    font-size: 1.2rem;
    margin-left: 25px;
    margin-right: 25px;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
    margin-left: 15px;
    margin-right: 15px;
  } */
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
// const Container = styled.div`
//   width: 80vw;
//   @media (max-width: 500px){
//     width: 90vw;
//   }
// `;
const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 500px) {
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
  @media (max-width: 900px) {
    width: 12rem;
  }
  @media (max-width: 800px) {
    width: 10rem;
  }
  @media (max-width: 500px) {
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;
const LinkText = styled.p`
  font-size: 1.5rem;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;
const BentoFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 50%;
  border-radius: 25px;
`;
const TextFrame = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 50%;
`;
const TopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
`;
const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
`;
const TopRightFrame = styled.div`
  display: flex;
  height: 700px;
  min-width: 410px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
`;
const TopRightInnerFrame = styled.div`
  display: flex;
  height: 280px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
`;
const BottomLeftFrame = styled.div`
  display: flex;
  height: 620px;
  min-width: 300px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
  flex: 1 0 0;
  flex-wrap: wrap;
`;
const Image1 = styled.img`
  height: 700px;
  min-width: 400px;
  flex: 1 0 0;
  border-radius: 15px;
  object-fit: cover;
`;
const Image2 = styled.img`
  height: 200px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 15px;
  object-fit: cover;
`;
const Image3 = styled.img`
  height: 280px;
  flex: 1 0 0;
  border-radius: 15px;
  object-fit: cover;
`;
const Image4 = styled.img`
  height: 280px;
  flex: 1 0 0;
  border-radius: 15px;
  object-fit: cover;
`;
const Image5 = styled.img`
  height: 200px;
  min-width: 400px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 15px;
  object-fit: cover;
`;
const Image6 = styled.img`
  height: 200px;
  min-width: 300px;
  flex: 1 0 0;
  border-radius: 15px;
  object-fit: cover;
`;
const Image7 = styled.img`
  height: 200px;
  min-width: 300px;
  flex: 1 0 0;
  border-radius: 15px;
  object-fit: cover;
`;
const Image8 = styled.img`
  height: 200px;
  min-width: 300px;
  flex: 1 0 0;
  border-radius: 15px;
  object-fit: cover;
`;
const Image9 = styled.img`
  height: 620px;
  min-width: 300px;
  flex: 1 0 0;
  border-radius: 15px;
  object-fit: cover;
`;

function AboutPage() {
  if (window.innerWidth <= 500) {
    return (
      <ColorFilter>
        <Container>
          <Name>Jo</Name>
          <Box>
            <MobileImageLeft
              src="Images/About Section/Jo singing .jpg"
              alt="Jo singing"
            />
            <Text>
              Jo has many hats; poetry, silversmithing, art and song. With years
              of experience as an artist working in a wide range of mediums,
              each one seems to evolve constantly, growing into many new
              off-shoots.
            </Text>
          </Box>
          <Box>
            <MobileImageRight
              src="Images/About Section/Jo jewellery close up.jpg"
              alt="Jo jewellery close up"
            />
            <Text>
              From teaching creativity workshops to producing her own unique
              work, Jo takes the natural world and human history as her
              inspiration. Her organic, textured jewellery designs often look
              like archaeological finds dug out of the ground and illustrate the
              many layered approach of her work.
            </Text>
          </Box>
          <Box>
            <MobileImageLeft
              src="Images/About Section/FindingBeautyBook.jpg"
              alt="Finding Beauty Book"
            />
            <Text>
              Jo's visual eye translates into her evocative nature writing. The
              land comes alive and builds a connection to place in a sensory
              relationship for the reader to experience. With two books ‘Finding
              Home - Journeys with the Hillforts of Shropshire’ and ‘Finding
              Beauty - A Year of Nature Outside Your Door' to her name, she also
              writes regular nature articles for her local Herald and blogs on
              her wordpress site.
            </Text>
          </Box>
          <Box>
            <MobileImageRight
              src="Images/About Section/Jo and Rick for about before Ricks bit.jpg"
              alt="Jo and Rick"
            />
            <Text>
              But all things evolve and change and whilst walking the land, Jo
              also began writing songs. It wasn't planned, they just arrived,
              with words and melodies complete and insistent on being sung.
              After some spontaneous improvisations with her friend Rick around
              a campfire, a natural collaboration swiftly emerged. Jo feels
              music is her true calling and her emotive lyrics and harmonies
              have now taken flight amongst Rick's percussive beats. Follow Jo's
              work on jojukes.wordpress.com
            </Text>
            <Link href="https://jojukes.wordpress.com/" className="button">
              <LinkText>Jo's website</LinkText>
            </Link>
          </Box>
          <Name>Rick</Name>
          <Box>
            <MobileImageLeft
              src="Images/About Section/RickLookingOverRiver.jpg"
              alt="Rick Looking Over River"
            />
            <Text>
              Rick Wilson works with sound: rhythmic and melodic, composed and
              improvised, contemporary and traditional. Drum kit, djembe,
              chenda, percussion of all kinds. Rick Wilson is so much more than
              just a drummer. With four solo albums to his name, he started
              messing around with drums in his teens whilst recovering from the
              fall-out of inadequate secondary music teaching.
            </Text>
          </Box>
          <Box>
            <MobileImageRight
              src="Images/About Section/RickOnDrumsB&W.jpg"
              alt="Rick On Drums black and white"
            />
            <Text>
              Listening to a wide range of music developed a can-do attitude
              that grew after meeting other like-minded souls. He honed his
              drumming in post punk bands Family Fodder and The Work before
              travelling to India to study Chenda temple drumming, Berber
              rhythms in Morocco and Brazilian carnival music in London. He also
              worked as a resident drummer for contemporary jazz weekends held
              along the Welsh Marches.
            </Text>
          </Box>
          <Box>
            <MobileImageLeft
              src="Images/News Section/Rick2.jpg"
              alt="Rick hands"
            />
            <Text>
              As accompanist for education and performance dance projects, he
              has also been a tutor for WOMAD and Glyndebourne and spent many
              years working throughout the UK with Common Lore Storytellers,
              poets and musicians, as both performer and teacher working in
              theatre and storytelling initiatives worldwide. Rick not only
              performs and teaches but composes, designs soundscapes and
              installations and runs music sessions as psychiatric therapy.
            </Text>
          </Box>
          <Box>
            <MobileImageRight
              src="Images/About Section/both hands drumming instead of Rick on zither.jpg"
              alt="Jo and Rick drumming"
            />
            <Text>
              Back to the present…Jo’s songs caught Rick's attention and his
              rhythm's weave through Jo’s songs like silk. Rick has the skill
              and ability to know just what to add and what to take away. As
              their musical collaboration grows with more songs, sounds,
              stories, words and poetry, the excitement now is in seeing where
              they will go from here… Follow Rick's story and career on
              eaststorywilsound.co.uk
            </Text>
            <Link href="http://www.eastorywilsound.co.uk" className="button">
              <LinkText>Rick's website</LinkText>
            </Link>
          </Box>
        </Container>
      </ColorFilter>
    );
  }
  return (
    <ColorFilter>
      <Container>
        <BentoFrame>
          <TopBox>
            <Image1 src="Images/About Section/Jo and Rick for about before Ricks bit.jpg" />
            <TopRightFrame>
              <Image2 src="Images/About Section/Jo singing .jpg" />
              <TopRightInnerFrame>
                <Image3 src="Images/About Section/JoMakingJewelry.jpg" />
                <Image4 src="Images/About Section/FindingBeautyBook.jpg" />
              </TopRightInnerFrame>
              <Image5 src="Images/About Section/Jo jewellery close up.jpg" />
            </TopRightFrame>
          </TopBox>
          <BottomBox>
            <BottomLeftFrame>
              <Image6 src="Images/About Section/RickOnDrumsB&W.jpg" />
              <Image7 src="Images/About Section/both hands drumming instead of Rick on zither.jpg" />
              <Image8 src="Images/News Section/Rick2.jpg" />
            </BottomLeftFrame>
            <Image9 src="Images/About Section/RickLookingOverRiver.jpg" />
          </BottomBox>
        </BentoFrame>
        <TextFrame>
          <Text>Jo</Text>
          <Text>
            Jo has many hats; poetry, silversmithing, art and song. With years
            of experience as an artist working in a wide range of mediums, each
            one seems to evolve constantly, growing into many new off-shoots.
          </Text>
          <Text>
            From teaching creativity workshops to producing her own unique work,
            Jo takes the natural world and human history as her inspiration. Her
            organic, textured jewellery designs often look like archaeological
            finds dug out of the ground and illustrate the many layered approach
            of her work.
          </Text>
          <Text>
            Jo's visual eye translates into her evocative nature writing. The
            land comes alive and builds a connection to place in a sensory
            relationship for the reader to experience. With two books ‘Finding
            Home - Journeys with the Hillforts of Shropshire’ and ‘Finding
            Beauty - A Year of Nature Outside Your Door' to her name, she also
            writes regular nature articles for her local Herald and blogs on her
            wordpress site.
          </Text>
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
          <Text>Rick</Text>
          <Text>
            Rick Wilson works with sound: rhythmic and melodic, composed and
            improvised, contemporary and traditional. Drum kit, djembe, chenda,
            percussion of all kinds. Rick Wilson is so much more than just a
            drummer. With four solo albums to his name, he started messing
            around with drums in his teens whilst recovering from the fall-out
            of inadequate secondary music teaching.
          </Text>
          <Text>
            Listening to a wide range of music developed a can-do attitude that
            grew after meeting other like-minded souls. He honed his drumming in
            post punk bands Family Fodder and The Work before travelling to
            India to study Chenda temple drumming, Berber rhythms in Morocco and
            Brazilian carnival music in London. He also worked as a resident
            drummer for contemporary jazz weekends held along the Welsh Marches.
          </Text>
          <Text>
            As accompanist for education and performance dance projects, he has
            also been a tutor for WOMAD and Glyndebourne and spent many years
            working throughout the UK with Common Lore Storytellers, poets and
            musicians, as both performer and teacher working in theatre and
            storytelling initiatives worldwide. Rick not only performs and
            teaches but composes, designs soundscapes and installations and runs
            music sessions as psychiatric therapy.
          </Text>
          <Text>
            Back to the present…Jo’s songs caught Rick's attention and his
            rhythm's weave through Jo’s songs like silk. Rick has the skill and
            ability to know just what to add and what to take away. As their
            musical collaboration grows with more songs, sounds, stories, words
            and poetry, the excitement now is in seeing where they will go from
            here… Follow Rick's story and career on eaststorywilsound.co.uk
          </Text>
          <Link href="http://www.eastorywilsound.co.uk" className="button">
            <LinkText>Rick's website</LinkText>
          </Link>
        </TextFrame>
      </Container>
    </ColorFilter>
  );
  // return (
  //   <ColorFilter>
  //     <Container>
  //       <Name>Jo</Name>
  //       <Box>
  //         <Text>
  //           Jo has many hats; poetry, silversmithing, art and song. With years
  //           of experience as an artist working in a wide range of mediums, each
  //           one seems to evolve constantly, growing into many new off-shoots.
  //         </Text>
  //         <Image src="Images/About Section/Jo singing .jpg" alt="Jo singing" />
  //       </Box>
  //       <Box>
  //         <Image
  //           src="Images/About Section/Jo jewellery close up.jpg"
  //           alt="Jo jewellery close up"
  //         />
  //         <Text>
  //           From teaching creativity workshops to producing her own unique work,
  //           Jo takes the natural world and human history as her inspiration. Her
  //           organic, textured jewellery designs often look like archaeological
  //           finds dug out of the ground and illustrate the many layered approach
  //           of her work.
  //         </Text>
  //       </Box>
  //       <Box>
  //         <Text>
  //           Jo's visual eye translates into her evocative nature writing. The
  //           land comes alive and builds a connection to place in a sensory
  //           relationship for the reader to experience. With two books ‘Finding
  //           Home - Journeys with the Hillforts of Shropshire’ and ‘Finding
  //           Beauty - A Year of Nature Outside Your Door' to her name, she also
  //           writes regular nature articles for her local Herald and blogs on her
  //           wordpress site.
  //         </Text>
  //         <Image
  //           src="Images/About Section/FindingBeautyBook.jpg"
  //           alt="Finding Beauty Book"
  //         />
  //       </Box>
  //       <Box>
  //         <Image
  //           src="Images/About Section/Jo and Rick for about before Ricks bit.jpg"
  //           alt="Jo and Rick"
  //         />
  //         <TextBox>
  //           <Text>
  //             But all things evolve and change and whilst walking the land, Jo
  //             also began writing songs. It wasn't planned, they just arrived,
  //             with words and melodies complete and insistent on being sung.
  //             After some spontaneous improvisations with her friend Rick around
  //             a campfire, a natural collaboration swiftly emerged. Jo feels
  //             music is her true calling and her emotive lyrics and harmonies
  //             have now taken flight amongst Rick's percussive beats. Follow Jo's
  //             work on jojukes.wordpress.com
  //           </Text>
  //           <Link href="https://jojukes.wordpress.com/" className="button">
  //             <LinkText>Jo's website</LinkText>
  //           </Link>
  //         </TextBox>
  //       </Box>
  //       <Name>Rick</Name>
  //       <Box>
  //         <Text>
  //           Rick Wilson works with sound: rhythmic and melodic, composed and
  //           improvised, contemporary and traditional. Drum kit, djembe, chenda,
  //           percussion of all kinds. Rick Wilson is so much more than just a
  //           drummer. With four solo albums to his name, he started messing
  //           around with drums in his teens whilst recovering from the fall-out
  //           of inadequate secondary music teaching.
  //         </Text>
  //         <Image
  //           src="Images/About Section/RickLookingOverRiver.jpg"
  //           alt="Rick Looking Over River"
  //         />
  //       </Box>
  //       <Box>
  //         <Image
  //           src="Images/About Section/RickOnDrumsB&W.jpg"
  //           alt="Rick On Drums black and white"
  //         />
  //         <Text>
  //           Listening to a wide range of music developed a can-do attitude that
  //           grew after meeting other like-minded souls. He honed his drumming in
  //           post punk bands Family Fodder and The Work before travelling to
  //           India to study Chenda temple drumming, Berber rhythms in Morocco and
  //           Brazilian carnival music in London. He also worked as a resident
  //           drummer for contemporary jazz weekends held along the Welsh Marches.
  //         </Text>
  //       </Box>
  //       <Box>
  //         <Text>
  //           As accompanist for education and performance dance projects, he has
  //           also been a tutor for WOMAD and Glyndebourne and spent many years
  //           working throughout the UK with Common Lore Storytellers, poets and
  //           musicians, as both performer and teacher working in theatre and
  //           storytelling initiatives worldwide. Rick not only performs and
  //           teaches but composes, designs soundscapes and installations and runs
  //           music sessions as psychiatric therapy.
  //         </Text>
  //         <Image src="Images/News Section/Rick2.jpg" alt="Rick hands" />
  //       </Box>
  //       <Box>
  //         <Image
  //           src="Images/About Section/both hands drumming instead of Rick on zither.jpg"
  //           alt="Jo and Rick drumming"
  //         />
  //         <TextBox>
  //           <Text>
  //             Back to the present…Jo’s songs caught Rick's attention and his
  //             rhythm's weave through Jo’s songs like silk. Rick has the skill
  //             and ability to know just what to add and what to take away. As
  //             their musical collaboration grows with more songs, sounds,
  //             stories, words and poetry, the excitement now is in seeing where
  //             they will go from here… Follow Rick's story and career on
  //             eaststorywilsound.co.uk
  //           </Text>
  // <Link href="http://www.eastorywilsound.co.uk" className="button">
  //   <LinkText>Rick's website</LinkText>
  // </Link>
  //         </TextBox>
  //       </Box>
  //     </Container>
  //   </ColorFilter>
  // );
}

export default AboutPage;
