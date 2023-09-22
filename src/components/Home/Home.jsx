/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import style from "./Home.module.css";
import axios from "axios";
import Card from "../Card/Card";
import { useQuery } from "react-query";
import { Vortex } from "react-loader-spinner";

const Home = () => {
  async function getMeals() {
    const {
      data: { meals },
    } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    return meals;
  }

  let { isLoading,data } = useQuery("meals", getMeals);

  return (
    <>
      {isLoading ? (
        <div className="d-flex vh-100 justify-content-center align-items-center">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      ) : (
        <div className="row g-4">
          {data &&
            data.map((meal) => {
              return <Card key={meal.idMeal} meal={meal} />;
            })}
        </div>
      )}
    </>
  );
};

export default Home;
