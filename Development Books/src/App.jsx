import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";

const App = () => {
	const product = {
		id: 1,
		title: "Clean Code",
		author: "Robert Martin",
		releaseYear: 2008,
		price: 50,
		imgLink: "../src/assets/Kata_DevelopmentBooks_CleanCode.png",
	};
	return (
		<>
			<Product product={product} />
		</>
	);
};

export default App;
