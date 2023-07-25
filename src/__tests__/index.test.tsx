import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "../index";

describe("Test Loading", () => {
  it("Should handle loading icon", () => {
    const { container } = render(<Loading />);
    expect(container.getElementsByClassName("fa-spin").length).toBe(1);
  });
});
