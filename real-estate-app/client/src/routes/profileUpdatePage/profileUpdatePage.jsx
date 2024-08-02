import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function ProfileUpdatePage() {
  const { currentUser, updateUser} = useContext(AuthContext); 
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const {username, email, password} = Object.fromEntries(formData);

    const data = {
      username,
      email,
      password,
    }
    apiRequest
      .put(`/users/${currentUser.id}`, data)
      .then((response) => {
        updateUser(response.data);
        navigate("/profile");
        setIsLoading(false);
        enqueueSnackbar("User profile updated successfully!", { variant: "success" });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        enqueueSnackbar(error.response.data.message, {variant: "error"});
      });
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button disabled={isLoading}>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src={currentUser.avatar || "/noavatar.png"} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;