import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Boton"; 
import { TaskCard } from "./Task"; 
import Saludar from "./Saludar";
import Posts from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Posts />
  </>
);
