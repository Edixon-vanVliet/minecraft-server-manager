import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

describe("Layout tests", () => {
  test("should render properly", () => {
    render(
      <MemoryRouter>
        <Layout>
          <Routes>
            <Route index element={<div>Test</div>} />
          </Routes>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
