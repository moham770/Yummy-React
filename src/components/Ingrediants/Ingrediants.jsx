  // eslint-disable-next-line no-unused-vars
  import React from 'react'
  // eslint-disable-next-line no-unused-vars
  import style from './Ingrediants.module.css'
  import {useQuery } from 'react-query'
  import axios from 'axios'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'


  const Ingrediants = () => {

  async function getAllIngrediants(){
    const {data:{meals}} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    return meals 
    }
  const{data, isLoading} =useQuery('getAllIngrediants',getAllIngrediants)
  const finalData =data && data.slice(0,20) 
    
    return (
    <>
    <div className="row  g-4 text-light">
    {isLoading? <Loading/>: finalData &&finalData.map((ingred,index)=>{ return <>
      <div key={index } className="col-lg-3 col-md-4">
        <Link to={ingred.strIngredient} className='text-decoration-none text-light'>
        <div className="ingred text-center fw-bold">
          <i className="fa-solid fa-drumstick-bite fa-4x mb-3"></i>
          <h3>{ingred.strIngredient}</h3>
          <p>{ingred.strDescription.slice(0,ingred.strDescription.indexOf('.')+1)}</p>
        </div>
        </Link>
      </div>
    </>
    })}
    </div>
    </>
    )
  }

  export default Ingrediants

