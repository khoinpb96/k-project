import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditStage, setStage] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      return navigate("/");
    }

    const { data } = {
      data: {
        username: "kilian",
        password: "",
        photoUrl: "",
        bio: "",
        phone: "0388820368",
        email: "khoinpb96@gmail.com",
      },
    };
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <>
      <h1>ProfilePage</h1>

      <label htmlFor=""></label>
      <label htmlFor=""></label>
      <label htmlFor=""></label>
      <label htmlFor=""></label>
      <label htmlFor=""></label>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}
