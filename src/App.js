import React, { lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {  createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestarauntCard from "./components/RestarauntCard";
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import appStrore from "./utilis/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";
//JSX is HTML like syntax not html in js
//const jsxHeading = <h1 id="heading">Heading using jsx</h1>;
// babel transifiled jsx into react element

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [user,setUser] = useState();
  useEffect(()=>{
    const data = {name:"tulasiram"}
    setUser(data.name);
  },[])

  return (
    <Provider store={appStrore}>
    <UserContext.Provider value={{loggedUser:user,setUser}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const Grocery = lazy(()=> import("./components/Grocery"));
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
    path:"/grocery",
    element: <Suspense fallback={<h1>It is fallback</h1>}><Grocery/></Suspense>,
     
  },
  {
    path:"restaurants/:id",
    element:<RestarauntCard />
  },
{
  path: "/cart",
  element: <Cart />
}],
  errorElement:<Error/> 
},])


  root.render(<RouterProvider router={appRouter}/>);


