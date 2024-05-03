import styled from "styled-components";
import BuyTicketsButton from "./Buttons/BuyTicketsButton";
const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  margin-bottom: 100px;
  width: 100%;
`;
const StyledTable = styled.table`
  color: white;
  width: 70%;
  border-collapse: collapse;
`;
const Tr = styled.tr``;
const Th = styled.th`
  border-bottom: 1px solid white;
  text-align: left;
  vertical-align: bottom;
`;
const ThPurchase = styled.th`
  border-bottom: 1px solid white;
  vertical-align: bottom;
`;
const Td = styled.td`
  border-bottom: 1px solid white;
  vertical-align: bottom;
  text-align: left;
  padding-top: 50px;
`;
const TdButton = styled.td`
  vertical-align: bottom;
`;
const TableTitle = styled.p`
  font-size: 2rem;
`;
function LiveTable() {
  return (
    <TableBox>
      <TableTitle>LIVE</TableTitle>
      <StyledTable>
        <Tr>
          <Th>DATE</Th>
          <Th>EVENT</Th>
          <Th>LOCATION</Th>
          <ThPurchase>PURCHASE</ThPurchase>
        </Tr>
        <Tr>
          <Td>28.06.2024 @7.30pm</Td>
          <Td>JO AND RICK // THE ANCESTOR IN ME</Td>
          <Td>OSWESTRY</Td>
          <TdButton>
            <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
          </TdButton>
        </Tr>
        <Tr>
          <Td>19.07.2024</Td>
          <Td>JO AND RICK @ THE FESTIVE AL THE EDGE</Td>
          <Td>CLEOBURY MORTIMER</Td>
          <TdButton>
            <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
          </TdButton>
        </Tr>
        <Tr>
          <Td>20.07.2024</Td>
          <Td>JO AND RICK @ THE FESTIVE AL THE EDGE</Td>
          <Td>CLEOBURY MORTIMER</Td>
          <TdButton>
            <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
          </TdButton>
        </Tr>
        <Tr>
          <Td>21.07.2024</Td>
          <Td>JO AND RICK @ THE FESTIVE AL THE EDGE</Td>
          <Td>CLEOBURY MORTIMER</Td>
          <TdButton>
            <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
          </TdButton>
        </Tr>
        <Tr>
          <Td>09.08.2024 @8.30pm-10pm</Td>
          <Td>JO AND RICK @ HUGH LUPTON'S SUMMER SERIES</Td>
          <Td>NORFOLK</Td>
          <TdButton>
            <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
          </TdButton>
        </Tr>
      </StyledTable>
    </TableBox>
  );
}

export default LiveTable;
