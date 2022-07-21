import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

describe("Sidebar tests", () => {
  test("should render properly", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText("Minecraft Servers Manager")).toBeInTheDocument();
    expect(screen.getByText("© Edixon van Vliet - 2022")).toBeInTheDocument();
  });
});
