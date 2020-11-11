import { httpService } from "./";
// import { apiUrl } from "../config";

export const reportProblemService = {
    getTicketCategories,
    createTicket,
    getMyTickets,
    getTicketData,
    replyToTicket,
};

const apiEndpoint = apiUrl + "/ticket";

function getTicketCategories() {
  return httpService.get(`${apiEndpoint}/ticketCategories`);
}

function createTicket(ticketObject) {
  return httpService.post(`${apiEndpoint}/`, ticketObject, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
}

function getMyTickets() {
  return httpService.get(`${apiEndpoint}/`);
}

function getTicketData(ticketId) {
  return httpService.get(`${apiEndpoint}/${ticketId}`);
}

function replyToTicket(text, ticketId) {
  return httpService.put(`${apiEndpoint}/reply/${ticketId}`, { text });
}