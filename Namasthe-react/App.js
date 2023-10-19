const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is nested Heading"),
    React.createElement("h1", { id: "heading" }, "This is nested Heading"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is nested Heading"),
    React.createElement("h1", { id: "heading" }, "This is nested Heading"),
  ])]
  
);

root.render(parent);
