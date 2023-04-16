import "./Login.css";
import { useEffect, useState } from "react";
import auth from "../../firebase";
import TwitterIcon from '@mui/icons-material/Twitter';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Login = () => {

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(myContext);
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailOrUsername, password)
      .then(() => {
        localStorage.setItem("isLoggedIn", "true");
        handleLogin();
      })
      .catch((error) => {
        alert(error.message);
        setEmailOrUsername("");
        setPassword("");
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  });
  return (

    <div className='container'>
      <TwitterIcon className="icon" />
      <h1 className="heading1">Log in to Twitter</h1>
      <form onSubmit={signIn}>
        <div className="container1">
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            placeholder="username"
            className="form-control"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            Login
          </button>
        </div>
        <p>
          if don't have any account?{" "}

          <Link to="/signup"> <span>Sign Up</span></Link>
        </p>
      </form>
    </div>

  );
};
export default Login;