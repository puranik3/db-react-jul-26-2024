import AddSession from "./AddSession";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AddSession component", () => {
    it("should show an error message if the sequence id field is not filled in and the submit button is clicked", async () => {
        // arrange
        render(
            <BrowserRouter>
                <AddSession workshopId={1} />
            </BrowserRouter>
        );
        const sequenceIdEl = screen.getByLabelText("Sequence ID");
        const buttonEl = screen.getByTestId("btn-submit");

        // action
        fireEvent.change(sequenceIdEl, { target: { value: "" } });
        fireEvent.click(buttonEl);

        // assert
        const errorEl = await screen.findByText("Sequence ID is required");
        expect(errorEl).toBeInTheDocument();
    });
});
