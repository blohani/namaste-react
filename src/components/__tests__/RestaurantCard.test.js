import React from "react";
import { render, screen } from "@testing-library/react";
import { RestCard, withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resData.json";
import "@testing-library/jest-dom";

describe("Rest Card Component", () => {
  it("should render Restaurant card with props data", () => {
    render(<RestCard resData={MOCK_DATA} />);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
  });

  //   it.only("should render Restaurant card with promoted label", () => {
  //     // RestCard with promoted label
  //     const RestaurantCard = render(<RestCard resData={MOCK_DATA} />);
  //     console.log("RestaurantCard::", RestCard);
  //     const WithPromotedComponent = withPromotedLabel(RestCard);
  //     console.log("WithPromotedComponent::", WithPromotedComponent);

  //     // render(<WithPromotedComponent />);
  //     // const label = screen.getByText("Promoted");
  //     // expect(label).toBeInTheDocument();
  //   });

  //   const MockWithHOC = withPromotedLabel(RestCard);
  //   it.only("can render with redux with defaults", () => {
  //     const { container, getByText } = render(<MockWithHOC />);
  //     // expect(getByText(/HOC Example/i)).toBeInTheDocument();
  //     expect(getByText(/Promoted/i)).toBeInTheDocument();
  //     expect(container).toMatchSnapshot();
  //   });
});
