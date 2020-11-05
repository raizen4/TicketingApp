export const MapDtoToTicketEntity = (dto) => {
  return {
    id: dto.id,
    name: dto.name,
    email: dto.email,
    message: dto.message,
    dateCreated: dto.dateCreated
  };
};
