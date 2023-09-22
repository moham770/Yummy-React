// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from './Area.module.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'


const Area = () => {

 async function  getAllAreas(){
const {data:{meals}} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

return meals
 }
 getAllAreas()
 const {isLoading ,data}= useQuery('getallAreas',getAllAreas)
console.log(data)
  return (
    <>
    <div className="row g-4 text-light">
    {isLoading ? <Loading /> : data && data.map((area,index)=>{
      return <>
      <div   key={index} className="col-lg-3 col-md-4 cursor-pointer">
        <Link className='text-decoration-none text-light' to={area.strArea}>
        <div className="are text-center ">
          <i className="fa-solid fa-house-laptop fa-4x"></i>
          <h2 >{area.strArea}</h2>
        </div>
        </Link>
      </div>


      </>
    })}
      
      </div>



    </>
  )
}

export default Area