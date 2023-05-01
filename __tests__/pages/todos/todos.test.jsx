import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import Todos from "@/pages/todos";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        { id: 1, title: "Todo 1" },
        { id: 2, title: "Todo 2" },
        { id: 3, title: "Todo 3" },
      ],
    })
  ),
}));

describe("Todos", () => {
  it("renders a heading", () => {
    render(<Todos />);
    const header = screen.getByRole("heading");
    const headerText = "Todos";
    expect(header).toHaveTextContent(headerText);
  });

  it("renders a list of todos", () => {
    render(<Todos />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("fetches todos from the api", async () => {
    render(<Todos />);
    const list = screen.getByRole("list");
    await waitFor(() => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(3);
    });
  });
});
