export const MapDtoToTicketEntity = (dto) => {
  return {
    id: dto.id,
    name: dto.name,
    email: dto.email,
    message: dto.message,
    dateCreated: new Date(dto.publishedAt)
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, "/")
    .replace("T", " ")
  };
};
