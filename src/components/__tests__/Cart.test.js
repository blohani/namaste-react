import RestaurantMenu from "../RestaurantMenu";
import { render, screen, act, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/MockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component and adding item to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  //Query
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(21);
  const addBtn = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[0]);
  //Assert
  expect(screen.getByText("🛒 (1) items")).toBeInTheDocument();
});
