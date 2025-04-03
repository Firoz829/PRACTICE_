import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenuCard from "./Components/RestaurantMenuCard";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
// import Grocery from "./Components/Grocery";

const AppLayout = () => {
  const [loggedinInfo, setLoggedinInfo] = useState();

  useEffect(() => {
    const newData = {
      name: "Firoz shaikh",
    };
    setLoggedinInfo(newData.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ isLoggedUser: loggedinInfo, setLoggedinInfo }}
      >
        <div className="app font-poppins font-semibold bg-white">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//
const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About is Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuCard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// * prop -> is Just a JS Object

// * Note: When you have to dynamically pass in a data to a component, you pass in prop

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.
// * Every company now-a-days follows these approach, because our Applications need to be Dynamic These Days
// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer
// * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
