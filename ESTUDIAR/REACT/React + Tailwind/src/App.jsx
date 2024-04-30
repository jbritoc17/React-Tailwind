import { useState } from "react";

import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import Sun from "./components/Sun";
import User from "./components/User";
/* import Sol from "./components/Sol"; */
/* import Users from "./components/Users"; */
/* import Logo from "./components/Logo"; */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
function Layout() {
  return (
    <>
      <nav>
        <header className="bg-white shadow px-6">
          <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
            <Menu />
            <div className="space-x-8 hidden md:flex">
              <Link className="px-3 py-2 text-sky-500" to="/">
                Home
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="/About"
              >
                About
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="/Blog"
              >
                Blog
              </Link>
              <Link
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
                to="Contact"
              >
                Contact
              </Link>
            </div>
            <div>
              <Sun />
              <User />
            </div>
          </div>
        </header>
      </nav>
      <Outlet />
    </>
  );
}
export default App;
