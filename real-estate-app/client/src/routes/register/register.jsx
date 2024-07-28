
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import apiRequest from "../../lib/apiRequest";
import { useState } from "react";


function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        const data = {
            username,
            email,
            password,
          };
        apiRequest
            .post("/auth/register", data)
            .then(() => {
                navigate('/login');
                setIsLoading(false);
                enqueueSnackbar("User created successfully!", {variant: "success"})
            })
            .catch((error) => {
                setIsLoading(false);
                enqueueSnackbar(error.response.data.message, {variant: "error"})
            });
    };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
