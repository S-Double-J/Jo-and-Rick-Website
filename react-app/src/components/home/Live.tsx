import styled from "styled-components";
import liveTableObjectArray from "./LiveTableObj";
import { motion } from "framer-motion";
import { useState } from "react";
import TableInfoButton from "../buttons/TableInfoButton";

const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 100px;
  width: 80vw;
  position: relative;
`;
const StyledTable = styled.table`
  color: white;
  width: 100%;
  border-collapse: collapse;
`;
const Th = styled.th`
  border-bottom: 1px solid white;
  text-align: left;
  vertical-align: bottom;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 587px) {
    font-size: 0.7rem;
  }
`;
const ThPurchase = styled.th`
  border-bottom: 1px solid white;
  vertical-align: bottom;
  text-align: left;
  padding-left: 2rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
    padding-left: 1rem;
  }
  @media (max-width: 587px) {
    font-size: 0.7rem;
  }
`;
const Td = styled.td`
  border-bottom: 1px solid white;
  vertical-align: bottom;
  text-align: left;
  padding-top: 50px;
  padding-right: 1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 587px) {
    font-size: 0.7rem;
  }
`;
const TdEvent = styled.td`
  border-bottom: 1px solid white;
  vertical-align: bottom;
  text-align: left;
  padding-top: 50px;
  padding-right: 1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 587px) {
    font-size: 0.7rem;
  }
  @media (max-width: 519px) {
    font-size: 0.55rem;
  }
`;
const TdButton = styled.td`
  vertical-align: bottom;
  text-align: center;
`;
const TableTitle = styled.p`
  font-size: 2rem;
`;
const Button = styled.a`
  position: relative;
  justify-content: center;
  width: 9.5rem;
  text-decoration: none;
  border-radius: 8rem;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 7rem;
  }
  @media (max-width: 587px) {
    width: 6rem;
  }
`;

const ButtonText = styled.p`
  font-size: 1rem;
  z-index: 2;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 587px) {
    font-size: 0.7rem;
  }
`;

const PopUpBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(11, 55, 176);
  width: 25rem;
  height: 25rem;
  border-radius: 5%;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    inset: 15px;
    border: 2px solid white;
    border-radius: 3%;
  }
  @media (max-width: 500px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 300px) {
    width: 250px;
    height: 400px;
  }
`;

const PopUpTextLarge = styled.p`
  font-size: 27px;
  text-decoration: underline;
  margin-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 5px;
  @media (max-width: 399px) {
    font-size: 18px;
    margin-top: 20px;
    padding-left: 20px;
  }
`;
const PopUpTextRegular = styled.p`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 0px;
  margin: 3px 0px;
  @media (max-width: 399px) {
    font-size: 12.5px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const PopUpButton = styled.a`
  width: 198px;
  height: 36px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  text-decoration: none;
  @media (max-width: 399px) {
    font-size: 12.5px;
    height: 25px;
    width: 160px;
  }
`;
const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: none;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background: rgb(40, 85, 207);
  }
`;
type ClickHandler = React.MouseEventHandler<HTMLElement>;

function Live() {
  const [activeHughLupton, setActiveHughLupton] = useState(false);
  const handleClickHughLupton: ClickHandler = () => {
    setActiveHughLupton((prevValue) => !prevValue);
  };
  const [activeUllapool, setActiveUllapool] = useState(false);
  const handleClickUllapool: ClickHandler = () => {
    setActiveUllapool((prevValue) => !prevValue);
  };
  const [activeTableDropDown, setActiveTableDropDown] = useState(false);
  const handleClickTableDropDown: ClickHandler = () => {
    setActiveTableDropDown((prevValue) => !prevValue);
  };
  return (
    <section id="Live">
      <TableBox>
        <TableTitle>LIVE</TableTitle>
        <motion.div
          variants={{
            open: {
              display: "flex",
            },
            closed: {
              display: "none",
            },
          }}
          animate={activeHughLupton ? "open" : "closed"}
          initial={false}
        >
          <PopUpBox>
            <CloseButton onClick={handleClickHughLupton}>
              <motion.span
                style={{
                  background: "white",
                  width: "30px",
                  height: "2px",
                  rotate: "45deg",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
              />
              <motion.span
                style={{
                  background: "white",
                  width: "30px",
                  height: "2px",
                  rotate: "-45deg",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
              />
            </CloseButton>
            <PopUpTextLarge>HUGH LUPTON'S SUMMER SERIES</PopUpTextLarge>
            <PopUpTextRegular>
              This event takes payment at the door. However, advanced booking is
              essential.
            </PopUpTextRegular>
            <PopUpTextRegular>Please email Hugh Lupton at</PopUpTextRegular>
            <PopUpButton
              className="button-small"
              href="mailto:hughlupton@gmail.com"
            >
              hughlupton@gmail.com
            </PopUpButton>
            <PopUpTextRegular>
              in order to book. In your email please include the number of
              tickets required and your full name.
            </PopUpTextRegular>
            <PopUpTextRegular>
              Tickets are £15 each. Performances start at 7:30.
            </PopUpTextRegular>
            <PopUpTextRegular>
              Location: Hugh's Barn Stapleton Farm Valley Lane Aylsham NR11 6GR
            </PopUpTextRegular>
          </PopUpBox>
        </motion.div>
        <motion.div
          variants={{
            open: {
              display: "flex",
            },
            closed: {
              display: "none",
            },
          }}
          animate={activeUllapool ? "open" : "closed"}
          initial={false}
        >
          <PopUpBox>
            <CloseButton onClick={handleClickUllapool}>
              <motion.span
                style={{
                  background: "white",
                  width: "30px",
                  height: "2px",
                  rotate: "45deg",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
              />
              <motion.span
                style={{
                  background: "white",
                  width: "30px",
                  height: "2px",
                  rotate: "-45deg",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
              />
            </CloseButton>
            <PopUpTextLarge>JO AND RICK AT ULLAPOOL</PopUpTextLarge>
            <PopUpTextRegular>
              This event is FREE and NO BOOKING is REQUIRED.
            </PopUpTextRegular>
            <PopUpTextRegular style={{ marginBottom: "20px" }}>
              Please simply arrive at the Argyll Hotel for a 9pm start.
            </PopUpTextRegular>
            <PopUpTextRegular style={{ marginBottom: "20px" }}>
              Address:
            </PopUpTextRegular>
            <PopUpTextRegular>Argyll Hotel,</PopUpTextRegular>
            <PopUpTextRegular>Ullapool,</PopUpTextRegular>
            <PopUpTextRegular>IV26 2UB</PopUpTextRegular>
          </PopUpBox>
        </motion.div>
        <StyledTable>
          <tr>
            <Th>DATE</Th>
            <Th>EVENT</Th>
            <Th>LOCATION</Th>
            <ThPurchase>INFO</ThPurchase>
          </tr>
          {liveTableObjectArray.map(
            ({ date, event, location, link }, index) => (
              <tr
                key={index}
              >
                <Td>{date}</Td>
                <TdEvent>{event}</TdEvent>
                <Td>{location}</Td>
                <TdButton>
                  <Button href={link} className="button-small">
                    <ButtonText className="font-color">MORE INFO</ButtonText>
                  </Button>
                  <TableInfoButton>

                  </TableInfoButton>
                </TdButton>
              </tr>
            )
          )}
          <tr>
            <Td>10.08.2024</Td>
            <TdEvent>JO AND RICK @ HUGH LUPTON'S SUMMER SERIES</TdEvent>
            <Td>NORFOLK</Td>
            <TdButton>
              <Button className="button-small" onClick={handleClickHughLupton}>
                <ButtonText className="font-color">MORE INFO</ButtonText>
              </Button>
            </TdButton>
          </tr>
          <tr>
            <Td>24.08.2024</Td>
            <TdEvent>JO AND RICK WITH ANNE WOOD</TdEvent>
            <Td>ULLAPOOL</Td>
            <TdButton>
              <Button className="button-small" onClick={handleClickUllapool}>
                <ButtonText className="font-color">MORE INFO</ButtonText>
              </Button>
            </TdButton>
          </tr>
        </StyledTable>
      </TableBox>
    </section>
  );
}

export default Live;
