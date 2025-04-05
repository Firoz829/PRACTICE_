import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListdata.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should check the body component search element", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // ✅ Use correct input
  const searchInput = screen.getByPlaceholderText(
    "Search your Restaurant & Dish..."
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  await waitFor(() => {
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(4);
  });
});
