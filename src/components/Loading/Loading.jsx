// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from './Loading.module.css'
import { Vortex } from 'react-loader-spinner'


const Loading = () => {
  return (
   <>
   <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
   
   </>
  )
}

export default Loading