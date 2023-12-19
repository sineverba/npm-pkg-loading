import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "../index";

describe("Test Loading", () => {
  it("Should find loading className", () => {
    const { container } = render(<Loading />);
    expect(container.getElementsByClassName("loading").length).toBe(1);
  });
});
