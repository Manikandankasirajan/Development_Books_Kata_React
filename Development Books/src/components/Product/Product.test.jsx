import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { expect } from "vitest";

describe("product component test cases", () => {
	it("should render product image, name, price and add to cart button as initial stage", () => {
		const product = {
			id: 1,
			title: "Clean Code",
			author: "Robert Martin",
			releaseYear: 2008,
			price: 50,
			imgSrc: "../src/assets/Kata_DevelopmentBooks_CleanCode.png",
		};
		render(<Product product={product} />);
		const image = screen.getByRole("img");
		expect(image).toBeInTheDocument();
		const title = screen.getByRole("heading", {
			name: product.title,
		});
		const price = screen.getByRole("heading", {
			name: `Rs. ${product.price}`,
		});
		expect(price).toBeInTheDocument();
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/add to cart/i);
	});
});
