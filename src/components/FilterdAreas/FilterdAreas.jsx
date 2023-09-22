// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from './FilterdAreas.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Vortex } from 'react-loader-spinner'
import Card from '../Card/Card'


const FilterdAreas = () => {

  const {area} = useParams()
 

  async function getResultOfFilterdAre(){
    const {data:{meals}} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    return meals
  }

 const {isLoading,data} =useQuery('getResultOfFilterdAre',getResultOfFilterdAre)

  
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
  )
}

export default FilterdAreas