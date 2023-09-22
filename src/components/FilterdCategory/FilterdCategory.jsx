// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from './FilterdCategory.module.css'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Card from '../Card/Card'
import { Vortex } from 'react-loader-spinner'


const FilterdCategory = () => {

  
  let {category} = useParams()

  async function filterByCategory(){
      const {data:{meals}} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)  
       return meals
  }


 const {isLoading,data} = useQuery('FilterdByCategory',filterByCategory)

  
  
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

export default FilterdCategory