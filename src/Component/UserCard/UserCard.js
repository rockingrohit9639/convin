import React from "react";
import "./UserCard.css";

function UserCard() {
  return (
    <div className="userCard flow flex bg-secondary">
      <img
        src="https://reqres.in/img/faces/7-image.jpg"
        alt="avatar"
        className="userCard__img"
      />

      <div className="userCard__info">
        <h3 className="userCard__name text-primary">John Doe</h3>
        <p className="userCard__email text-secondary">johndoe@gmail.com</p>
      </div>
    </div>
  );
}

export default UserCard;
