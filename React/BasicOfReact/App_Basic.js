import React from "react";
import ReactDOM from "react-dom/client";

// lec 2
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
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "this is h1 element"
// );

//jsx - HTML likes or XML likes syntax
//jsx (transpiled before it reaches the js engine) - parcel - bable
//jsx => React.cerateElelemt =>ReactElemet - js object => HTMLElement(render)

// RE insde RE how to use
// const span = <span>Hello</span>;
// const jsxheading = <h1 className="root"> {span}this is h1 heading from jsx</h1>;

// react functional componen
// if we use {} we can write any js code inside it
// also we use reactelemet inside functional component

// let a = 1000;
// const HeadingComponent = function () {
//   return (
//     <div id="container">
//       {heading}
//       <h1> {a}</h1>
//       <h1 className="root">functional component </h1>
//     </div>
//   );
// };

// componont composition
// const TitleCom = () => (
//   <div id="container">
//     <HeadingComponent />
//     <h1 className="root">functional component Title </h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contect us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// in react inline css style object
// const stylecard = {
//   backgroundColor: "#f0f0f0",
// };

const resObj = {
  id: "243517",
  name: "KFC",
  city: "Mumbai",
  restaurant: "kfc-phoenix-market-city-food-court-lbs-rd-kurla-west-kurla",
  city: "mumbai",
  cuisnes: ["burgure", " kfc", " pizza "],
  rate: "4.4 starts",
};

const RestaurantCard = (props) => {
  let { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e975b355e30661b40e3522641689cede"
      ></img>
      <h3>{resData.}</h3>
      <h4>{resObj.cuisnes}</h4>
      <h4>{resObj.rate}</h4>
      <h4>{resObj.city}</h4>
    </div>
  );
};
const obj = {
 
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard resData={obj} />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
