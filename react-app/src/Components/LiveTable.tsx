import styled from "styled-components";
import BuyTicketsButton from "./Buttons/BuyTicketsButton";
const StyledTable = styled.table``;

function LiveTable() {
  return (
    <StyledTable>
      <tr>
        <th>DATE</th>
        <th>EVENT</th>
        <th>LOCATION</th>
        <th>PURCHASE</th>
      </tr>
      <tr>
        <td>28.06.2024 @7.30pm</td>
        <td>JO AND RICK // THE ANCESTOR IN ME</td>
        <td>OSWESTRY</td>
        <td>
          <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
        </td>
      </tr>
      <tr>
        <td>19.07.2024</td>
        <td>JO AND RICK @ THE FESTIVE AL THE EDGE</td>
        <td>CLEOBURY MORTIMER</td>
        <td>
          <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
        </td>
      </tr>
      <tr>
        <td>20.07.2024</td>
        <td>JO AND RICK @ THE FESTIVE AL THE EDGE</td>
        <td>CLEOBURY MORTIMER</td>
        <td>
          <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
        </td>
      </tr>
      <tr>
        <td>21.07.2024</td>
        <td>JO AND RICK @ THE FESTIVE AL THE EDGE</td>
        <td>CLEOBURY MORTIMER</td>
        <td>
          <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
        </td>
      </tr>
      <tr>
        <td>09.08.2024 @8.30pm-10pm</td>
        <td>JO AND RICK @ HUGH LUPTON'S SUMMER SERIES</td>
        <td>NORFOLK</td>
        <td>
          <BuyTicketsButton>BUY TICKETS</BuyTicketsButton>
        </td>
      </tr>
    </StyledTable>
  );
}

export default LiveTable;
