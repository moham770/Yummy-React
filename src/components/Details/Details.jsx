/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import style from './Details.module.css';
// import img from '../../assets/mlchx21564916997.jpg';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Vortex } from 'react-loader-spinner';
// import { Vortex } from 'react-loader-spinner';

const Details = () => {
  let { id } = useParams();

  async function getDetailsMeal(){
  const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    return meals[0]
  }

  const  {data,isLoading} =  useQuery('GetDetails',getDetailsMeal)
  const [recpies, setrecpies] = useState([])
  const [tags,setTags] = useState([])



  async function getRecipesReady(){
    const detailsObject = await getDetailsMeal()
    detailsObject.ingrediants=[]
    const detailsMap = new Map(Object.entries(detailsObject))
    for (let i = 0; i < detailsMap.size; i++) {
      if(detailsMap.get(`strIngredient${i}`)){
        detailsObject.ingrediants.push(` ${detailsMap.get(`strMeasure${i}`)}   ${detailsMap.get(`strIngredient${i}`)}`)
      }
      setrecpies(detailsObject.ingrediants)
    }
  }


 async function getTagsReady(){
    const detailsObject = await getDetailsMeal()
    if(detailsObject.strTags){
     let arrayTags=  detailsObject.strTags.split(`,`)
      setTags(arrayTags)
      console.log(arrayTags)
    }else{
      console.log('no')
    }


  }

useEffect(()=>{
  getRecipesReady()
  getTagsReady()
},[])


console.log(data)
  return  <>
  
       <div className="row text-white">
         <div className="col-md-4">
           <div className="detailsImg  overflow-hidden"> 
           {isLoading ? <div className="d-flex  justify-content-center ">
           <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
           </div>:  <img src={ data && data.strMealThumb} className='w-100 rounded-3' alt="" />}
            
             <p className='fw-bold fs-2'>{data && data.strMeal}</p>
             <Link to="/"> <button className=" btn w-100 btn-primary">Back to Home</button></Link>
           </div>
         </div>
         <div className="col-md-8">
           <h2>Instructions</h2>
           <p>{data && data.strInstructions}</p>
           <h3 className="fw-bold">area:  <span className="fw-normal">{data && data.strArea}</span></h3>
           <h3 className="fw-bold">Category:  <span className="fw-normal">{data && data.strCategory}</span></h3>
           <h3 className="fw-bold">Recipes :</h3>
           <ul className='list-unstyled d-flex flex-wrap mt-3 '>
             {recpies.map((rec,index)=>{return  <li key={index} className='alert alert-danger p-1 mx-2'>{rec}</li>})}
              <li className='alert alert-danger p-1 mx-2'>1 cup Lentils</li>
              <li className='alert alert-danger p-1 mx-2'>1 cup Lentils</li>
              <li className='alert alert-danger p-1 mx-2'>1 cup Lentils</li>
           </ul>
           <h3 className="fw-bold">Tags :</h3>
           <ul className='list-unstyled d-flex flex-wrap '>
            {tags.map((tag,index)=>{return  <li key={index} className='alert alert-primary  p-1 mx-2'>{tag}</li>  })}
     
           </ul>
           <a href={data && data.strSource} target='_blank'>
           <button  className="btn btn-success mx-1 px-4">Source</button>
           </a>
           <a href={data && data.strYoutube} target='_blank'>
           <button className="btn btn-danger mx-1 px-4">Youtube</button>
           </a>
         </div>
       </div>
     </>
  
}

export default Details;
