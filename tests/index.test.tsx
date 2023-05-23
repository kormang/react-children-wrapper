import * as React from "react";

import { render } from "@testing-library/react";

import ChildrenWrapper from "../src";

const ThemeContext = React.createContext("light");
const NumberContext = React.createContext(0);

const App: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const number = React.useContext(NumberContext);
  return (
    <>
      <div data-testid="theme">{theme}</div>
      <div data-testid="number">{number}</div>
    </>
  );
};

const TestAppRoot: React.FC = () => {
  return (
    <ChildrenWrapper>
      <ThemeContext.Provider value="dark" />
      <NumberContext.Provider value={1} />
      <App />
    </ChildrenWrapper>
  );
};

describe("ChildrenWrapper render", () => {
  it("wraps and renders children properly", async () => {
    const app = render(<TestAppRoot />);
    const theme = await app.findByTestId("theme");
    expect(theme.textContent).toBe("dark");
    const number = await app.findByTestId("number");
    expect(number.textContent).toBe("1");
  });
});
