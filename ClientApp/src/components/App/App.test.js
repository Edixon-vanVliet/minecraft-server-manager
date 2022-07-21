import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App tests", () => {
  test("should render properly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByText("Minecraft Servers Manager").length).toBe(2);
  });
});
