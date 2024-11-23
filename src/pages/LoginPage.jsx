import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';

export function LoginPage() {
  const [user, setUser] = useState({
    email: '', password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { login, setRememberMe } = useContext(AuthContext);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const onChangeInputType = () => {
    setShowPassword(prev => !prev);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    login(user.email, user.password);
  }

  return (
    <div className="LoginPage">

      <h1 className="title">Log Into Your Account</h1>

      <form className="loginForm" onSubmit={handleLogin}>

        <div className="inputBox">
          <label htmlFor="email">Email <span>*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={user.email}
            onChange={onChangeInput}
            placeholder="example@mail.ru"
          />
        </div>

        <div className="inputBox">
          <label htmlFor="pass">Password <span>*</span></label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="pass"
            required
            name="password"
            value={user.password}
            onChange={onChangeInput}
            placeholder="your password"
          />

          <i
            className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
            onClick={onChangeInputType}
          />
        </div>

        <div className="rememberMe">
          <input
            type="checkbox"
            id="rememberMe"
            onChange={() => setRememberMe(prev => !prev)}
          />

          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <input type="submit" value="Log in" className="btn" />

      </form>

      <div className="links">
        <Link to='/feedback'>Feedback</Link>
        <Link to='/register'>Create Account</Link>
      </div>

    </div>
  )
}
