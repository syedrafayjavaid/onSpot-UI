import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

function Recommendation() {
  const eventApiUrl = "http://localhost:2000/api/user/wardrobe/trends";
  const [casualShirts, setCasualShirts] = useState([]);
  let login = false;
  let store = null;
  //function to get api data
  const getCasualShirts = () => {
    const tokenData = localStorage.getItem("login");
    const user = JSON.parse(tokenData);

    if (user && user.store) {
      var token = "Bearer " + user.store;
    }
    console.warn(token);
    const response = axios
      .get(eventApiUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.warn(response.data);
        setCasualShirts(response.data.suggestedProducts);
        console.log(response.data);
        console.log(casualShirts);
      });
  };

  useEffect(() => {
    // getCasualShirts();
    //getBrideDresses();
    //An array of assets
    let scripts = [
      { src: "js/bootstrap.min.js" },
      { src: "js/jquery.magnific-popup.min.js" },
      { src: "js/jquery.magnific-popup.min.js" },
      { src: "js/owl.carousel.min.js" },
      { src: "js/isotope.pkgd.min.js" },
      { src: "js/circle-progress.min.js" },
      { src: "js/main.js" },
    ];
    //Append the script element on each iteration
    scripts.map((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);
  const userData = localStorage.getItem("login");
  const user = JSON.parse(userData);
  if (user && user.login) {
    return (
      <div>
        <section className="shop-section">
          <div className="container">
            <div className="row">
              {casualShirts.map((suggestedProducts) => {
                return (
                  <div className="box col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <img src={suggestedProducts.imageLink} alt="" />
                      {/* <img src="img/shop/1.jpg" alt="" /> */}
                      <h3>{suggestedProducts.title}</h3>
                      <h6>{suggestedProducts.price}</h6>
                      <a
                        href={suggestedProducts.productLink}
                        className="add-card"
                        target="_blank"
                      >
                        See Details
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    alert("You need to login first");
    return <Redirect to={"/login"} />;
  }
}
export default Recommendation;
