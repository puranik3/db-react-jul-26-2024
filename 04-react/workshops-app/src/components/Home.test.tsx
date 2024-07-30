import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

describe("Home component", () => {
    it("should have a heading with the name of the application", () => {
        // arrange
        render(
            <Provider store={store}>
                <Home title="My App" subtitle="Some subtitle" />
            </Provider>
        );

        // action
        const titleEl = screen.getByText("My App");

        // assert
        expect(titleEl).toBeInTheDocument();
    });
});
