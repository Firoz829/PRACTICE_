import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("shoud load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbuttion = screen.getByRole("button", { name: "login" });
  //   const loginbuttion = screen.getByText("login");
  expect(loginbuttion).toBeInTheDocument();
});

it("shoud load Header component check cart it is 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/); //"Cart - 0" ya fir RAJAX /Cart/
  //   const loginbuttion = screen.getByText("login");
  expect(cartItem).toBeInTheDocument();
});

// it("shoud chnage login btn to username on click", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginbtn = screen.getByRole("button", { name: "login" });
//   fireEvent.click(loginbtn);
//   const logoutbtn = screen.getByRole("button", { name: "Firoz shaikh" });
//   expect(logoutbtn).toBeInTheDocument();
// });
