import React, { useState } from "react";

// style
import "./Signin&Signup.scss";

const AccountSystem = () => {
  const [value, setValue] = useState([{ text: "", password: "" }]);

  // changeHendler
  const emailChnageHendler = (e) => {
    const { value, type } = e.target;
    setValue({ [type]: value });
  };

  const submitHendler = (e) => {
    e.preventDefault();
    setValue({ text: "" });
    setValue({ password: "" });
  };

  return (
    <div className="container">
      <h1>login</h1>
      <form onSubmit={submitHendler}>
        <input onChange={emailChnageHendler} type="text" value={value.text} />
        <input
          onChange={emailChnageHendler}
          type="password"
          value={value.password}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AccountSystem;
