/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* The code is importing necessary dependencies and resources for the `Home` component. */
import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./about.css";

/* The code defines a functional component called `Home` in JavaScript React. This component returns
JSX code that represents the structure and content of a home section on a web page. */
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            That's my secret,
            <span> I'm always angry.</span>
          </h1>
          <p className="home__description"> There are two people in every mirror: There is the one you can see. And there is the other one. The one you don’t want to.
          <blockquote  className="quote"> —  Bruce Banner</blockquote>
          </p>
          <Link to="/resume" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
