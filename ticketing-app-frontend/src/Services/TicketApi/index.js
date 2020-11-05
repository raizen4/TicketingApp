import Axios from "axios";
import * as Helper from "./helper";

export const GetLatestTickets = async () => {
  try {
    const res = await Axios.get(` http://localhost:5000/tickets/GetTickets`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const formattedArray = res.data.tickets.map((ticketDtos) => {
      return Helper.MapDtoToTicketEntity(ticketDtos);
    });

    return formattedArray;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to GET tickets`);
  }
};

export const SaveTicket = async (ticket) => {
  try {
    const ticketJsoned = JSON.stringify(ticket);
    const res = await Axios.post(
      `http://localhost:5000/tickets/AddTicket`,
      {
        ticketJsoned,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status !== 200) return false;
    
    return res;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to POST new ticket`);
  }
};
