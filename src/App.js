import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {  createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestarauntCard from "./components/RestarauntCard";
//JSX is HTML like syntax not html in js
//const jsxHeading = <h1 id="heading">Heading using jsx</h1>;
// babel transifiled jsx into react element

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[{
    path:"/",
    element:<Body/>
  },{
    path:"/about",
    element:<About />,
     
  },{
    path:"/contact",
    element: <Contact/>,
     
  },{
    path:"restaurants/:id",
    element:<RestarauntCard />
  }],
  errorElement:<Error/> 
},])
root.render(<RouterProvider router={appRouter}/>);
