import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import apiRequest from "../../lib/apiRequest";
import { useState } from "react";


function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const data = {
      username,
      password,
    };
    apiRequest
      .post("/auth/login", data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data))
        navigate("/");
        setIsLoading(false);
        enqueueSnackbar("User logged in successfully!", { variant: "success" });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        enqueueSnackbar(error.response.data.message, { variant: "error" });
      });
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" type="password" required placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
