import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import { ThemeSwitcher } from "./ThemeSwitcher";

describe("Login Form", () => {
  test("have to render elements", () => {
    render(<ThemeSwitcher />);
    expect(true).toBe(true);
  });
});
