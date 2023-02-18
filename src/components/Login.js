import React, { useState } from "react";

function Login({ handleAuthorize, buttonText })  {
  const [userDataValue, setUserDataValue] = useState({
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUserDataValue({
      ...userDataValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!userDataValue.email || !userDataValue.password) {
      return;
    }
    handleAuthorize(userDataValue.email, userDataValue.password);
  };

  return (
    <section className="auth">
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <h2 className="auth-form__title">Вход</h2>
        <input
          className="auth-form__item"
          name="email"
          type="email"
          placeholder="Email"
          value={userDataValue.email || ""}
          onChange={handleChange}
          required
        />
        <input
          className="auth-form__item"
          name="password"
          type="password"
          placeholder="Пароль"
          value={userDataValue.password || ""}
          onChange={handleChange}
          required
        />
        <button
          className="auth-form__button popup__save-button"
          aria-label="Зайти в аккаунт"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default Login;
