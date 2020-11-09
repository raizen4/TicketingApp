export const MapDtoToTicketEntity = (dto) => {
  return {
    id: dto.Id,
    name: dto.Name,
    email: dto.Email,
    message: dto.Message,
    dateCreated: dto.DateCreated
  };
};
