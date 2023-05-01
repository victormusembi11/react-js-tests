import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "../../pages/about";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);

    const header = screen.getByRole("heading");

    const headerText = "About";
    expect(header).toHaveTextContent(headerText);
  });

  it("renders a button", () => {
    render(<About />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("logs a message when the button is clicked", () => {
    const spy = jest.spyOn(console, "log");
    render(<About />);
    const button = screen.getByRole("button");
    button.click();
    expect(spy).toHaveBeenCalledWith("clicked");
  });
});
