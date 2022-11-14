import { useState, useEffect } from "react";
import EmailError from "./LoginErrorHandling/EmailError";
import PasswordError from "./LoginErrorHandling/PasswordError";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  let [email, setEmail] = useState("");
  let [validEmail, toggleValidEmail] = useState(false);
  let [emailFocus, toggleEmailFocus] = useState(false);

  let [password, setPassword] = useState("");
  let [validPassword, toggleValidPassword] = useState(false);
  let [passwordFocus, togglePasswordFocus] = useState(false);

  useEffect(() => {
    if (checkValidEmail(email)) {
      toggleValidEmail(true);
    } else {
      toggleValidEmail(false);
    }
  }, [email]);

  useEffect(() => {
    if (checkValidPassword(password)) {
      toggleValidPassword(true);
    } else {
      toggleValidPassword(false);
    }
  }, [password]);

  function handleChangeEmail(email) {
    setEmail(email);
  }

  function checkValidEmail(email) {
    if (
      email.length <= 50 &&
      email.length > 0 &&
      email.indexOf("@") !== -1 &&
      email.indexOf(".") !== -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleChangePassword(password) {
    setPassword(password);
  }

  function checkValidPassword(password) {
    if (password.length >= 4 && password.length <= 16) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPassword("");
    setEmail("");
    console.log(email, password);
  }

  return (
    <section className="login-page">
      <form className="login-container" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <div
          className={
            !validEmail && emailFocus && email.length > 0
              ? "invalid-input"
              : "email-input-container"
          }
        >
          <FontAwesomeIcon
            icon={faUser}
            className="fa-header-icons profile-icon"
          />
          <input
            type="email"
            className="email-input"
            id="email"
            value={email}
            placeholder="user@rapptrlabs.com"
            onChange={(e) => handleChangeEmail(e.target.value)}
            onFocus={() => toggleEmailFocus(true)}
            onBlur={() => toggleEmailFocus(false)}
            required
          />
        </div>
        <label htmlFor="password">Password</label>
        <div
          className={
            !validPassword && passwordFocus && password.length > 0
              ? "invalid-input"
              : "password-input-container"
          }
        >
          <FontAwesomeIcon
            icon={faLock}
            className="fa-header-icons lock-icon"
          />
          <input
            type="password"
            className="password-input"
            id="password"
            placeholder="Must be at least 4 characters"
            required
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
            onFocus={() => togglePasswordFocus(true)}
            onBlur={() => togglePasswordFocus(false)}
          />
        </div>
        {emailFocus && !validEmail && email.length > 0 ? <EmailError /> : null}
        {passwordFocus && !validPassword && password.length > 0 ? (
          <PasswordError />
        ) : null}
        <br />
        <button
          type="submit"
          className="login-btn"
          disabled={!validEmail || !validPassword ? true : false}
        >
          Login
        </button>
      </form>
    </section>
  );
}
