import "./Signup.css";
import React, { useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
//import { useContext } from "react";
//import { myContext } from "../App";
import auth from "../firebase";
import { Link } from "react-router-dom";

const Signup = () => {

    const [state, setState] = useState({
        email: "",
        fullName: "",
        username: "",
        password: "",
    });
    //const { changeUser } = useContext(myContext);

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, state.email, state.password)
            .then(async (authUser) => {
                const user = authUser.user;
                await updateProfile(user, {
                    displayName: state.fullName
                });
                navigate("/")
                // changeUser(user)
            })
            .catch((error) => {
                if (state.fullName === "" || state.username === "") {
                    alert("Please enter valid Details!");
                } else {
                    alert(error.message);
                }
            });
    };

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className="signup-container">
            <TwitterIcon className="icon" />
            <h1 className="heading">Sign Up</h1>
            <form onSubmit={signUp}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                />
                <label htmlFor="fullname">FullName:</label>
                <input
                    type="text"
                    placeholder="fullname"
                    name="fullName"
                    onChange={handleChange}
                />
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />


                <button type="submit" className="signup-btn">
                    Sign Up
                </button>
                <p>
                    Already have an account?{" "}

                    <Link to="/"><span>Login</span></Link>
                </p>
            </form>
        </div>
    )
}
export default Signup;