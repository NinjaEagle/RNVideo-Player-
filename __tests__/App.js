import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import { render } from "@testing-library/react-native";

describe("App", () => {
	it("renders correctly", () => {
		render(<App />);
	});

	it("shows an initial state of false for mute ", () => {
		const { queryByText } = render(<App />);

		const initialState = queryByText("mute: false");
		expect(initialState).not.toBeNull();
	});
});
