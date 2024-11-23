import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export function RegisterPage() {
  const [user, setUser] = useState({
    name: '', email: '', password: '', confirmPassword: '',
  });

  const { register } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const onChangeInputType = () => {
    setShowPassword(prev => !prev);
  }

  const handleRegister = async (event) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      return alert('Passwords do not match');
    }

    register(user.name, user.email, user.password);
    navigate('/login');
  }

  return (
    <div className="RegisterPage">

      <h1 className="title">Registration Form</h1>

      <form className="registerForm" onSubmit={handleRegister}>

        <div className="inputBox">
          <label htmlFor="name">Name <span>*</span></label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={user.name}
            onChange={onChangeInput}
            placeholder="enter your name"
          />
        </div>

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

        <div className="inputBox">
          <label htmlFor="passConfirm">Confirm your password <span>*</span></label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="passConfirm"
            required
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={onChangeInput}
            placeholder="confirm your password"
          />

          <i className="fa-solid fa-lock"></i>
        </div>

        <input type="submit" value="Sign Up" className="btn" />

      </form>

      <Link to='/login' className="goToLoginPage">
        Have an account?
      </Link>

    </div>
  )
}
