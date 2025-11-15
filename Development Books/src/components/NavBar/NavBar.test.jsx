import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { expect } from "vitest";

describe("navbar test cases ", () => {
	it("should render heading", () => {
		render(<NavBar />);
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/develompent books/i);
	});
	it("should render nav links", () => {
		const navLinks = ["/Product", "/Cart"];
		render(<NavBar />);
		const links = screen.queryAllByRole("link");
		links.forEach((link, index) => {
			expect(link).toHaveAttribute("href", navLinks[index]);
		});
	});
});
