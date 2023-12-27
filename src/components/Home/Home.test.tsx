import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { Patient } from "../../types/Patient";
import { Home } from "./Home";

vitest.mock("react-router-dom", () => {
  const reactRouterDom = vitest.importActual("react-router-dom");

  return {
    ...reactRouterDom,
    useNavigate: vitest.fn(),
  };
});

const mockPatients: Patient[] = [
  {
    id: "0",
    name: "Maxime Crampon",
    email: "maximec@hokla.com",
    birthdate: "1996-11-19",
    generalPractitioner: "Dr. Burris",
  },
  {
    id: "1",
    name: "Raphaël Dhôte",
    email: "raphaeld@hokla.com",
    birthdate: "1998-01-26",
    generalPractitioner: "Dr. Burris",
  },
];

vitest.mock("../../hooks/usePatients", () => ({
  usePatients: () => mockPatients,
}));

describe("[Component] Home", () => {
  beforeEach(() => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vitest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vitest.fn(), // deprecated
        removeListener: vitest.fn(), // deprecated
        addEventListener: vitest.fn(),
        removeEventListener: vitest.fn(),
        dispatchEvent: vitest.fn(),
      })),
    });

    // solve warning, cf https://github.com/nickcolley/jest-axe/issues/147
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
  });

  describe("Home", () => {
    it("should display the title", async () => {
      const homeComponent = render(<Home />);

      const title = homeComponent.getByText("Welcome to Cardiokla!");

      expect(title).toBeInTheDocument();
    });
  });
});
