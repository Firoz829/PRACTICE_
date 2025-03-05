import React from "react";
import ReactDOM from "react-dom/client";

//  const header = React.createElement("h1", {id:"header",xyz:"abs"}, "hello world this if form react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(header);

// div parent
//    div child1
//       h1
//       h2
//    div child2
//        h1
//        h2

// let parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "this is h1 insde child1"),
//     React.createElement("h2", {}, "this is h2 insde child1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "this is h1 insde child2"),
//     React.createElement("h2", {}, "this is h2 insde child2"),
//   ]),
// ]);
// console.log(parent);
// root.render(parent);

// lec 3
// React.createElement =>object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is h1 element"
);

//jsx - HTML likes or XML likes syntax
//jsx (transpiled before it reaches the js engine) - parcel - bable
//jsx => React.cerateElelemt =>ReactElemet - js object => HTMLElement(render)

// RE insde RE how to use
const span = <span>Hello</span>;
const jsxheading = <h1 className="root"> {span}this is h1 heading from jsx</h1>;

// react functional componen
// if we use {} we can write any js code inside it
// also we use recatelemet inside functional component

let a = 1000;
const HeadingComponent = function () {
  return (
    <div id="container">
      {heading}
      <h1> {a}</h1>
      <h1 className="root">functional component </h1>
    </div>
  );
};

// componont composition
// const TitleCom = () => (
//   <div id="container">
//     <HeadingComponent />
//     <h1 className="root">functional component Title </h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
