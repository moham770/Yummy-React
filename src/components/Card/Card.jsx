/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from './Card.module.css'
// import img from '../../assets/mlchx21564916997.jpg'
import { Vortex } from 'react-loader-spinner';
import { Link } from 'react-router-dom';




export default function Card({meal}) {
  return (
    <>
    <div className=" col-lg-3 col-md-4 ">
    <Link to={`/meal/`+meal.idMeal}>
    <div className={`${style.card} position-relative text-black cursor-pointer rounded-2 overflow-hidden `}>
      {meal.strMealThumb ? <img className='w-100' src={meal.strMealThumb} />: <Vortex
  visible={true}
  height="50"
  width="50"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>}

    <div className={`position-absolute top-100 start-0 w-100 h-100 d-flex align-items-center`}>
    <h2 className='fw-bold'>{meal.strMeal}</h2>
    </div>
    </div>
    </Link>
    </div>
    </>
  )
}
