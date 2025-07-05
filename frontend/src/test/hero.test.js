import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(
        <MemoryRouter>
            <Hero/>
        </MemoryRouter>
   );
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
  });
});


