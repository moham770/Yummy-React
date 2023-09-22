// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import style from './Categories.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Categories = () => {
  const [categories,setCategotris] = useState([]) 

 async function getAllCategoties(){

    const {data:{categories}} = await axios.get(' https://www.themealdb.com/api/json/v1/1/categories.php')
  
     categories? setCategotris(categories) :null
    
  }

  console.log(categories)


  useEffect(()=>{getAllCategoties()},[])
  
  
  
  
  return (
    <>
    <div className="row g-3">
    
          { categories &&categories.map((cate,index)=>{
           return <>
           <div key={index} className="col-lg-3 col-md-4 cursor-pointer">
            <Link to={cate.strCategory}>
            <div className={`${style.cate} position-relative overflow-hidden text-black`}>
           <img className='w-100' src={cate.strCategoryThumb} alt="" />
            <div className={`${style.layer} position-absolute start-0 d-flex align-items-center fs-4 fw-bold  w-100 h-100 `}>
              {cate.strCategory}
            </div>
            </div>
            
            </Link>
           </div>
           </>
          })}
  
    </div>
    
    
    
    </>
  )
}

export default Categories