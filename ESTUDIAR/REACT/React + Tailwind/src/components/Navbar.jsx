import "../App.css";
import "../index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "../pages/Home";


import Contact from "../pages/Contact";
import MenuComponent from "../components/Menu";
import SunComponent from "../components/Sun";
import UserComponent from "../components/User";

import Jewelery from "../pages/Jewelery";
import Electronics from "../pages/Electronics";

const Navbar = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category" >
              <Route path={":jewelery"} element={<Jewelery />} />
              <Route path={"electronics"} element={<Electronics />} />
            </Route>
            
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
function Layout() {
  return (
    <>
      <nav>
        <header className="bg-white shadow px-6">
          <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
            <MenuComponent />
            <div className="space-x-8 hidden md:flex">
              <Link className="px-3 py-2 text-sky-500" to="/">
                Home
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="/category/jewelery"
              >
                Jewelery
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="/category/electronics"
              >
                Electronics
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="/contact"
              >
                Clothes
              </Link>
            </div>
            <div>
              <SunComponent />
              <UserComponent />
            </div>
          </div>
        </header>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
