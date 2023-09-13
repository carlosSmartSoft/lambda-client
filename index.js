export const handler = async (event) => {
  const response = {
    statusCode: 201,
    body: JSON.stringify(event),
  };
  return response;
};
