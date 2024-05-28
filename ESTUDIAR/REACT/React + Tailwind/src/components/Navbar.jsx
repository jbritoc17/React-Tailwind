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

import MenuComponent from "../components/Menu";
import SunComponent from "../components/Sun";
import UserComponent from "../components/User";

import Jewelery from "../pages/Jewelery";
import Electronics from "../pages/Electronics";
import ManClothes from "../pages/ManClothes";
import WomenClothes from "../pages/WomenClothes";

const Navbar = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category">
              <Route path={"jewelery"} element={<Jewelery />} />
              <Route path={"electronics"} element={<Electronics />} />
              <Route path={"man_clothes"} element={<ManClothes />} />
              <Route path={"women_clothes"} element={<WomenClothes />} />
            </Route>
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
               <div className="relative group inline-block text-left top-[9px]">
                <Link
                  className="group overflow-hidden rounded-lg text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                  to="#"
                >
                  Clothes
                </Link>
                <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-lg z-10 mt-2">
                  <div className="py-2">
                    <Link
                      to="/category/man_clothes"
                      className="block px-4 relative py-2 text-slate-600 hover:bg-slate-100 hover:text-sky-500 transition-colors"
                    >
                      Man
                    </Link>
                    <Link
                      to="/category/women_clothes"
                      className="block relative  px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-sky-500 transition-colors"
                    >
                      Women
                    </Link>
                    </div>
                </div>
              </div>
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
