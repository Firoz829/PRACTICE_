import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Restaurantcard";
import MOCK_Data from "../mocks/resCardMock.json";

it.skip("shoud render Rastaurant component with props data", () => {
  render(<RestaurantCard resData={MOCK_Data} />);
  const name = screen.getByText("LeanCrust Pizza- ThinCrust Experts");
  expect(name).toBeInTheDocument();
});
