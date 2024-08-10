import React, { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
// import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeEach(() => {});

describe("Search Component test", () => {
  it("should search rest List for input text", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBeforeClick = screen.getAllByTestId("resCard");
    expect(cardsBeforeClick.length).toBe(8);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(searchBtn).toBeInTheDocument();
    expect(cards.length).toBe(1);
  });

  it("should search rest List for filter button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBeforeClick = screen.getAllByTestId("resCard");
    expect(cardsBeforeClick.length).toBe(8);
    const filterBtn = screen.getByRole("button", {
      name: "Filter Restaurants",
    });
    fireEvent.click(filterBtn);
    const filteredCards = screen.getAllByTestId("resCard");
    expect(filterBtn).toBeInTheDocument();
    expect(filteredCards.length).toBe(2);
  });
});
