import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";

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
  const query = request.url.split("?")[1];
  const postPromise = apiRequest
    .get("/posts?" + query)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = () => {
  const postPromise = apiRequest
    .get("/users/profilePosts")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  const chatPromise = apiRequest
    .get("/chats")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
