
import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";
import NavBar from "../components/Navbar";



const AutheticatedRoutes = () => {

  return (
    <>     
    

   <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/search" element={<Search  />} />
          </Routes>
      
        </>
  )
}

export default AutheticatedRoutes
