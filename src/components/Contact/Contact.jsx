/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from './Contact.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'


const Contact = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const passwordRegex= /^[A-Z]+[A-Za-z0-9!@$%^&]{8,}$/ 
  
  let validationSchema = yup.object({
    name:yup.string().min(3,'name should be more than 3 char').max(10,'name should be less than 10 char').required('name is required'),
    email:yup.string().email().required('Email is required'),
    phone:yup.string().matches(phoneRegExp,'please enter a valid mobile Number').required('Phone is Required'),
    age:yup.number().min(18,'min age must be more than 18 years').max(60,'max age must be less than 60 years').required('age is required'),
    password:yup.string().matches(passwordRegex,'Password must start with an uppercase letter and be at least 8 characters, including a combination of letters (uppercase and lowercase), numbers, and the special characters: !, @, $, %, ^, &.').required('password'),
    rePassword:yup.string().oneOf([yup.ref('password')],'Passwords do not match. Please make sure your passwords are identical.').required('rePassword is required')

  })



  

let formik = useFormik({
initialValues:{
  name:"",
  email:"",
  phone:"",
  age:"",
  password:"",
  rePassword:"",

},validationSchema,
onSubmit:getSubmit
})


function getSubmit(values){
console.log(values)


}



  return (
  <>
  <div className="contact-us" id="contact-Us-area">
  <div className="container w-75">
    <form onSubmit={formik.handleSubmit}>
    <div className="row g-4 py-5">
      <div className="col-md-6">
        <div className="contact-input">
          <input  type="text" placeholder="Enter Your Name" className="form-control mb-2" id="name"
            name="name" 
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.name &&formik.errors.name ?<div className="alert alert-danger  p-2 text-center ">{formik.errors.name}</div> :null}
            
          
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact-input">
          <input type="email" placeholder="Enter Your Email" className="form-control mb-2" id="email" 
          name="email" 
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
          { formik.touched.email &&formik.errors.email ?<div className="alert alert-danger  p-2  text-center ">{formik.errors.email}</div>:null}
        
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact-input">
          <input type="text" placeholder="Enter Your Phone" className="form-control mb-2" id="phoneNumber" 
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
               {formik.touched.phone && formik.errors.phone ?<div className="alert alert-danger  p-2  text-center ">{formik.errors.phone}</div>:null}
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact-input">
          <input type="number" placeholder="Enter Your Age" className="form-control mb-2 " id="age"
           name="age" 
           value={formik.values.age}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           />
                   {formik.touched.age && formik.errors.age ?<div className="alert alert-danger  p-2  text-center ">{formik.errors.age}</div>:null}
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact-input">
          <input type="password" placeholder="Enter Your Password" className="form-control mb-2" id="password"
           name="password"
           value={formik.values.password}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           />
                     { formik.touched.password &&formik.errors.password ?<div className="alert alert-danger  p-2  text-center ">{formik.errors.password}</div>:null}
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact-input">
          <input type="password" placeholder="Repassword" className="form-control mb-2" id="repassword" 
          name="rePassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
          {formik.touched.rePassword && formik.errors.rePassword ?<div className="alert alert-danger  p-2  text-center ">{formik.errors.rePassword}</div>:null}
        </div>
      </div>
      <div className="col-md-12  text-center">
        <button disabled={!(formik.isValid &&formik.dirty)}  className="btn btn-outline-danger" type="submit" >Submit</button>
      </div>
    </div>
  </form>
  </div>

</div>
  
  
  
  
  </>
  )
}

export default Contact