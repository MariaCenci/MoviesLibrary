
import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";
import NavBar from "../components/Navbar";
import Favorite from "../pages/Favorite";


const AutheticatedRoutes = () => {

  return (
    <>     
    

   <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/search" element={<Search  />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
      
        </>
  )
}

export default AutheticatedRoutes
