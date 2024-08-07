import apiRequest from "./apiRequest";

export const singlePageLoader = ({ request, params }) => {
  return apiRequest
    .get("/posts/" + params.id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
