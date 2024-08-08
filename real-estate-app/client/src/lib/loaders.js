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

export const listPageLoader = ({ request, params }) => {
  const query = request.url.split("?")[1]
  return apiRequest
    .get("/posts?" + query)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    })
  
  // return apiRequest
  //   .get("/posts/" + params.id)
  //   .then((response) => {
  //     return response.data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};
