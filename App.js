import React from "react";
import ReactDOM from "react-dom/client";

//JSX is HTML like syntax not html in js
//const jsxHeading = <h1 id="heading">Heading using jsx</h1>;
// babel transifiled jsx into react element

const root = ReactDOM.createRoot(document.getElementById("title"));
const logo = (
  <img
    src="https://app.logo.com/editor/colors?logo=logo_115bd112-fffd-4391-8f6c-5ba46fb34b9a&_gl=1*hnko8j*_gcl_au*MTQ0MzkxNTU2MS4xNjk3ODU3MDQ0*_ga*NDcxMzQxMTE1LjE2OTc4NTcwNDU.*_ga_8Y782WJ29W*MTY5Nzg1NzA0NS4xLjEuMTY5Nzg1NzA0NS42MC4wLjA."
    alt="Some Logo"
  />
);
const searchBar = (
    <>
    <input type="text" name="search" id="search" placeholder="Search" />
    <button type="submit"></button>
    </>
)
const userIcon = (
    <img src="https://www.flaticon.com/free-icon-font/linkedin_6422202" alt="Some Icons" />
)

const Header = () => {
  return (
    <>
      {logo}
      {searchBar}
      {userIcon}
    </>
  );
};
root.render(<Header />);
