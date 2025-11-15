import React from "react";
import "./product.css";

const Product = ({ product }) => {
	const { id, title, author, releaseYear, price, imgLink } = product;

	return (
		<>
			<div class="productContainer">
				<img class="bookImage" src={imgLink} alt="{title}" />
				<h2 class="title">{title}</h2>
				<h4 class="price">Rs. {price}</h4>
				<button class="btn">Add to Cart</button>
			</div>
		</>
	);
};

export default Product;
