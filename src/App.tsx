import * as React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.scss'

import {Dashboard} from './components/Dashboard'
import {Profile} from "./components/Profile";
import {Contact} from "./components/Contact";
import {About} from "./components/About";

/*
    / -> dashboard
    /about -> about page
    /profile -> profile
    /settings -> settings
 */

const routes = [
  {
    path: "/",
    main: () => <Dashboard/>,
    sidebar: () => (
      <p>
        This is the dashboard.
        If you are logged in, you'll see the status of all your data.
      </p>
    )
  },
  {
    path: "/profile",
    main: () => <Profile/>,
    sidebar: () => (
      <p>
        This is your profile page. You'll be able to see all your
        profile information.
      </p>
    )
  },
  {
    path: "/contact",
    main: () => <Contact/>,
    sidebar: () => (
      <p>
        This page allows you to contact us directly, and provides other means of doing so.
      </p>
    )
  },
  {
    path: "/about",
    main: () => <About/>,
    sidebar: () => (
      <p>
        Read this page for information on us, who we are and our mission.
      </p>
    )
  }
]

function App() {

  return (
    <BrowserRouter>
      <div className={"wrapper"}>
        <div className={"sidebar"}>
          <ul className={"nav"}>
            <li><Link to={"/"}>Dashboard</Link></li>
            <li><Link to={"/profile"}>Profile</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
          <Routes>
            {routes.map(({path, sidebar}) => (
              <Route
                key={path}
                path={path}
                element={sidebar()}
              />
            ))}
          </Routes>
        </div>
        <Routes>
          {routes.map(({path, main}) => (
            <Route
              key={path}
              path={path}
              element={main()}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
