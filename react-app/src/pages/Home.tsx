import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Live from "../components/home/Live";
import Music from "../components/home/Music";
import News from "../components/home/News";
import styled from "styled-components";
import "../components/buttons/buttons.css";

const ColorFilter = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  backdrop-filter: blur(5px)
`;
const Empty = styled.div`
  width: 100%;
  height: 100svh;
`;
function Home() {
  return (
    <>
      <section id="Home">
        <Empty id="empty"/>
      </section>
      <ColorFilter id="color-filter">
        <Live />
        <About />
        <Music />
        <News />
        <Contact />
      </ColorFilter>
    </>
  );
}

export default Home;
