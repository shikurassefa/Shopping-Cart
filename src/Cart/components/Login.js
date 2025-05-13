import  { useState } from "react";
import "./login.css";
import { userAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import { validateForm } from "./validateForm";
import  validationSchema  from "./validationSchema";
const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const formData = {
    username: username,
    email: email,
  };
  const navigate = useNavigate();
  const logIn = userAuthStore((state) => state.logIn);
  const handleSubmit = (e) => {
    e.preventDefault();

   const validationErrors = validateForm(formData, validationSchema);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
   logIn(username, email);
    navigate("/products");
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
          <div className="login-field">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-field">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        {Object.keys(errors).length > 0 && (
          <div className="error-message">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
