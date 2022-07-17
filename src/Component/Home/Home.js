import React, { useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./Home.css";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/usersSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="home container">
      <UserCard />

      <div className="home__buttons flex">
        <button className="btn text-secondary ff-montserrat">1</button>
      </div>
    </div>
  );
}

export default Home;
