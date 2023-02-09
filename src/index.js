import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const user = [
  {
    id: 1,
    name: "John Doe",
    image: 'https://robohash.org/user1'
  },
  {
    id: 2,
    name: "Lucas Doe",
    image: 'https://robohash.org/user2'
  },
  {
    id: 3,
    name: "Lusan Doe",
    image: 'https://robohash.org/user3'
  }
];

root.render(
  <>
    {user.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
