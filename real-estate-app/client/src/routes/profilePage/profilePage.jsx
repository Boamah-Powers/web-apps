import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';


function ProfilePage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    apiRequest
      .post("/auth/logout")
      .then(() => {
        localStorage.removeItem("user");
        navigate('/');
        enqueueSnackbar("User logged out successfully!", {variant: "success"});
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Log out failed!", {variant: "error"});
      })
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>Username: <b>John Doe</b></span>
            <span>Email: <b>johndoe@gmail.com</b></span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
