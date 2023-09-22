// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import style from './Search.module.css'

import axios from 'axios'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'

const Search = () => {
  
  const [meals, setMeals] = useState([])
  const [isLoading, setisLoading] = useState(false)
  async function getDataByName(type,term){
    setisLoading(true)
    let {data:{meals}} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`)
    if(term ===""){
      setMeals([])
      return  
    }
   term && meals && setMeals(meals)
   setisLoading(false)
  }

  return (
    <>
      <div className="row text-white py-4 g-3">
        <div className="col-md-6">
          <input
            type="text"
            onInput={(e) => {
              getDataByName("s",e.target.value)
            }}
            className='w-100 form-control'
            placeholder='Search By Name'
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className='w-100 form-control'
            placeholder='Search By First Letter'
            maxLength="1"
            onInput={(e) => {
              getDataByName("f",e.target.value)
            }}
          />
        </div>
      </div>
      <div className="row g-3 text-white">
      {isLoading ? <Loading /> : meals.length ? meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        )) : <h2>No meals found</h2>}
      </div>
    </>
  )
}

export default Search
