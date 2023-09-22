/* eslint-disable react-hooks/rules-of-hooks */
import  { useEffect, useRef } from 'react'
import style from './Sidebar.module.css'
import { Link,NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'







export default function sidebar() {
  const sidbar=  useRef(null)
const innerSidebar=  useRef(null)
const iconSideBar = useRef(null)

  
  

function ChangeLeftSidebar() {
  let left = window.getComputedStyle(sidbar.current).getPropertyValue('left');
  if(left ==='0px'){
    closeSideBar()
  }else{
    openSideBar()
  }
}

function closeSideBar(){
  let width = innerSidebar.current.offsetWidth

  sidbar.current.style.left =`-${width}px`
  iconSideBar.current.classList.replace("fa-x","fa-align-justify")
}
function openSideBar(){
  iconSideBar.current.classList.replace("fa-align-justify","fa-x")
  sidbar.current.style.left =`0px`
}




useEffect(()=>{
  closeSideBar()
},[])


  return (
   <>
   
   <nav ref={sidbar} className={` ${style.sidebar} d-flex    text-white`}>
  <div ref={innerSidebar} className="inner-sideBar  d-flex flex-column justify-content-between bg-black py-2 px-3 text-white">
    <ul className={`list-unstyled  overflow-hidden ${style.ulLinks}`}>
      <li  >
        <NavLink onClick={()=>{closeSideBar()}} className='nav-link  my-3 p-1' to="/search" >Search</NavLink >
      </li>
      <li >
        <NavLink onClick={()=>{closeSideBar()}} className='nav-link  my-3 p-1' to="/Categories" >Categories</NavLink >
      </li>
      <li >
        <NavLink onClick={()=>{closeSideBar()}} className='nav-link  my-3 p-1' to="/area" >Area</NavLink>
      </li>
      <li >
        <NavLink  onClick={()=>{closeSideBar()}}className='nav-link  my-3 p-1' to="/ingredients" >Ingredients</ NavLink>
      </li>
      <li >
        <NavLink onClick={()=>{closeSideBar()}} className='nav-link  my-3 p-1' to="/contact">Contact Us</NavLink >
      </li>
    </ul>

  <div className="footer-innerSideBar">

    <div className="socialIcons d-flex">
      <div className="social-icon mx-1">
        <i className="fa-brands fa-facebook"></i>
      </div>
      <div className="social-icon mx-1">
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="social-icon mx-1">
        <i className="fa-solid fa-globe"></i>
      </div>
    </div>
    <p>Copyright Â© 2019 All Rights <br></br> Reserved.</p>
    
  </div>  

  </div>
  <div className="sidbar-logos py-3 px-2 text-black bg-white  align-items-center d-flex flex-column justify-content-between">
    <div  className={`${style.sideBarLogo} `}>
      <Link to='/'>
      <img className="w-100" src={logo} alt="" />
      </Link>
    </div>
    <div onClick={()=>{ChangeLeftSidebar()}} className="sideBar-Icon-Toggle  py-1 cursor-pointer  ">
      <i ref={iconSideBar}  className="fa-solid  fa-align-justify fa-2x"></i>
    </div>
    <div className="sideBar-share-icon">
      <div className="shareIcon">
        <i className="fa-solid fa-globe d-block"></i>
      </div>
        <div className="shareIcon">
       <i className="fa-solid fa-share-nodes"></i>
        </div>
    </div>
  </div>
</nav>
   
   
   
   </>
  )
}
