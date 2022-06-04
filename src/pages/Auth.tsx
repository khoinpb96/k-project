import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLoginStage, setStage] = useState(true);
  const [input, setInput] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //LOGIN
      if (isLoginStage) {
        const { data } = { data: { id: "id", accessToken: "accessToken" } }; //Fetch user data;
        localStorage.setItem("userData", JSON.stringify(data));
        return navigate("/profile");
      }

      //REGISTER
      const { data } = { data: { id: "id", accessToken: "accessToken" } }; //Send request to create a new user
      setStage(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      return navigate("/profile");
    }
  }, []);

  return (
    <form onSubmit={formSubmitHandler}>
      <h1>{`${isLoginStage ? "Login Page" : "Register Page"}`}</h1>

      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={input.username}
          onChange={(e) => {
            setInput((input) => ({
              ...input,
              username: e.target.value,
            }));
          }}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={input.password}
          onChange={(e) => {
            setInput((input) => ({
              ...input,
              password: e.target.value,
            }));
          }}
        />
      </div>

      <p>
        Click here to{" "}
        <Link to="/" onClick={() => setStage((prev) => !prev)}>
          {`${isLoginStage ? "Register" : "Login"}`}
        </Link>
      </p>
      <button>{`${isLoginStage ? "Login" : "Register"}`}</button>
    </form>
  );
}
