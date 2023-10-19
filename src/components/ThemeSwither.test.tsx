import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

const setTheme = jest.fn().mockImplementation(() => {
  return { push: jest.fn() };
});

jest.mock("next-themes", () => {
  return {
    useTheme: () => ({
      setTheme,
    }),
  };
});

import { ThemeSwitcher } from "./ThemeSwitcher";

describe("ThemeSwither", () => {
  test("have to change theme", () => {
    render(<ThemeSwitcher />);
    const light = screen.getByTestId("light");
    expect(light).toBeInTheDocument();
    fireEvent.click(light);
    expect(setTheme).toBeCalledWith("light");
  });
});
