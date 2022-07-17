import React, { useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, fetchUsers } from "../../redux/usersSlice";

function Home() {
  const dispatch = useDispatch();
  const { totalUsers, currentUser } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFetchUserInfo = (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.id;
      dispatch(fetchUserInfo(id));
    }
  };

  return (
    <div className="home container">
      {currentUser ? (
        <UserCard user={currentUser} />
      ) : (
        <div className="noUsers bg-secondary text-secondary">Click any button below to see a user.</div>
      )}

      <div className="home__buttons flex" onClick={handleFetchUserInfo}>
        {Array.from(Array(totalUsers).keys()).map((i) => (
          <button
            key={i}
            id={i + 1}
            className="btn text-secondary ff-montserrat"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
