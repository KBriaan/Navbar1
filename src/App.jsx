import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Navbar/Sidebar";
import Dashboard from "./components/Navbar/Dashboard";
import { useState } from "react";



export default function App() {

  const[sidebarToggle, setSidebarToggle] =useState(false)
  return (
    <div className="flex">
    <Router>
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>

      <Switch>
      <Route exact path="/">
          
        </Route>
        <Route path="/menu">
          
        </Route>
      </Switch>

      
    </Router>
  </div>
  )
}


