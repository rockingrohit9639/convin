import React from "react";
import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="userCard flow flex bg-secondary">
      <img src={user.avatar} alt="avatar" className="userCard__img" />

      <div className="userCard__info">
        <h3 className="userCard__name text-primary">{`${user.first_name} ${user.last_name}`}</h3>
        <p className="userCard__email text-secondary">{user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;
