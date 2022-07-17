import React from "react";
import UserCard from "../UserCard/UserCard";
import "./Home.css";

function Home() {
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
