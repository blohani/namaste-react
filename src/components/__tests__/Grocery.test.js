/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Grocery from "../Grocery";
import "@testing-library/jest-dom";

describe("Grocery page test cases", () => {
  it("Should load the grocery component", () => {
    render(<Grocery />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Grocery component", () => {
    render(<Grocery />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should contain text Submit inside Grocery component", () => {
    render(<Grocery />);
    const text = screen.getByText("Submit");
    //Assertion
    expect(text).toBeInTheDocument();
  });

  it("Should contain placeholder text inside Grocery component", () => {
    render(<Grocery />);
    const inputName = screen.getByPlaceholderText("enter name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should contain 1 input box inside Grocery component", () => {
    render(<Grocery />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    console.log(inputBoxes.length);
    // expect(inputBoxes).toBeInTheDocument();
    expect(inputBoxes.length).toBe(2);
  });
});
