import { RouterProvider, createHashRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import Layout from "./components/Layout/Layout"
import Details from "./components/Details/Details"
import Search from './components/Search/Search'
import Notfound from "./components/Notfound/Notfound"
import Categories from "./components/Categories/Categories"
import Area from "./components/Area/Area"
import Contact from "./components/Contact/Contact"
import Ingrediants from "./components/Ingrediants/Ingrediants"
import FilterdCategory from "./components/FilterdCategory/FilterdCategory"
import FilterdAreas from "./components/FilterdAreas/FilterdAreas"
import FilterdIngredients from "./components/FilterdIngredients/FilterdIngredients"

function App() {
  const router =createHashRouter([
    {path:'/',element: <Layout/>,children:[
      {index:true,element:<Home/>},
      { path: "*", element: <Notfound/> },
      {path:"/meal/:id",element:<Details/>},
      {path:"/categories/:category",element:<FilterdCategory/>},
      {path:"/area/:area",element:<FilterdAreas/>},
      {path:"/search",element:<Search/>},
      {path:"/Categories",element:<Categories/>},
      {path:"/area",element:<Area/>},
      {path:"/contact",element:<Contact/>},
      {path:"/ingredients",element:<Ingrediants/>},
      {path:"/ingredients/:ingredients",element:<FilterdIngredients/>},
    ]}
  ])
  
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
