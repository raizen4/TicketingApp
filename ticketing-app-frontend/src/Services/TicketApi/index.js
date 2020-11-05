import Axios from "axios";
import * as Helper from "./helper";

export const GetLatestTickets = async () => {
  try {
    const res = await Axios.get(
      ` https://newsapi.org/v2/top-headlines?country=gb&apiKey=d694359125554e2ea00bbb5914d48d3f`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
    const publicationsToGetNewsFrom = ticket.toString();
    const res = await Axios.post(
      ` https://newsapi.org/v2/top-headlines?sources=${publicationsToGetNewsFrom}&apiKey=d694359125554e2ea00bbb5914d48d3f`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const formattedArray = res.data.articles.map((articleDto) => {
      return Helper.MapDtoToNewsEntity(articleDto);
    });

    return formattedArray;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to POST new ticket`);
  }
};
