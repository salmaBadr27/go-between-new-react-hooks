import React, { useState, useEffect } from "react";
import "./App.css";
import "./switchers.scss";

function App() {
	//useState
	const [themeColor, changeTheme] = useState("white-theme");

	//useEffect

	useEffect(() => {
		const currentThemeColor = localStorage.getItem("theme-color");
		if (currentThemeColor) {
			changeTheme(currentThemeColor);
		}
	}, []);

	const handleClick = (theme) => {
		changeTheme(theme);
		localStorage.setItem("theme-color", theme);
	};
	return (
		<div className={`App ${themeColor}`}>
			<div className="theme-options">
				<div
					id="white-theme"
					onClick={() => handleClick("white-theme")}
					className={`${themeColor === "white-theme" ? "active" : ""}`}
				></div>
				<div
					id="blue-theme"
					onClick={() => handleClick("blue-theme")}
					className={`${themeColor === "blue-theme" ? "active" : ""}`}
				></div>
				<div
					id="orange-theme"
					onClick={() => handleClick("orange-theme")}
					className={`${themeColor === "orange-theme" ? "active" : ""}`}
				></div>
				<div
					id="green-theme"
					onClick={() => handleClick("green-theme")}
					className={`${themeColor === "green-theme" ? "active" : ""}`}
				></div>
				<div
					id="purple-theme"
					onClick={() => handleClick("purple-theme")}
					className={`${themeColor === "purple-theme" ? "active" : ""}`}
				></div>
				<div
					id="black-theme"
					onClick={() => handleClick("black-theme")}
					className={`${themeColor === "black-theme" ? "active" : ""}`}
				></div>
			</div>
			<div className="content-box">
				<h3>Multiple Theme Switcher Using React </h3>

				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum
				</p>
				<button className="content-button">Can U See Me</button>
			</div>
		</div>
	);
}

export default App;
