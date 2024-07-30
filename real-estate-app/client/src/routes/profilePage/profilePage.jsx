import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { useContext } from "react";
import { AuthContext} from "../../context/AuthContext";


function ProfilePage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { updateUser, currentUser} = useContext(AuthContext);

  const handleLogout = () => {
    apiRequest
      .post("/auth/logout")
      .then(() => {
        updateUser(null);
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
                src={currentUser.avatar || "/noavatar.png"}
                alt=""
              />
            </span>
            <span>Username: <b>{currentUser.username}</b></span>
            <span>Email: <b>{currentUser.email}</b></span>
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
