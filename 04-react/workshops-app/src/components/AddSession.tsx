import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { postSession } from "../services/sessions";

interface IProps {
    workshopId: number;
}

const AddSession = ({ workshopId }: IProps) => {
    // const { workshopId } = useParams();
    const navigate = useNavigate();

    // you create a state for every input
    const [sequenceId, setSequenceId] = useState("10");
    const [name, setName] = useState("");
    const [speaker, setSpeaker] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [abstract, setAbstract] = useState("");

    // error message states
    const [sequenceIdError, setSequenceIdError] = useState("");

    // form validation libraries - react-hook-form, Formik
    function validateSequenceId() {
        const s = sequenceId.trim();

        if (s === "") {
            setSequenceIdError("Sequence ID is required");
            return false;
        }

        const patInteger = /^[1-9][0-9]*$/;

        if (patInteger.test(s) === false) {
            setSequenceIdError("Sequence ID must be a positive integer");
            return false;
        }

        setSequenceIdError(""); // no error

        return true;
    }

    function validate() {
        // Usually you will validate ALL fields, and the form will be considered valid if ALL fields have valid values
        return validateSequenceId();
    }

    async function addSession(event: FormEvent) {
        event.preventDefault(); // Hey browser! Don't do what you usually do - the browser tries to submit the form's detail to the "action" page

        const newSession = {
            // workshopId: workshopId
            workshopId,
            sequenceId: +sequenceId,
            name,
            speaker,
            duration: +duration,
            level,
            abstract,
            upvoteCount: 0,
        };

        console.log(newSession); // user's input

        if (validate()) {
            // alert("All good!");
            const addedSession = await postSession(newSession);
            alert(
                `Added a new session with name =${addedSession.name} and id=${addedSession.id}`
            );
            navigate(`/workshops/${workshopId}`);
        }
    }

    return (
        <div>
            <h2>Add a new session</h2>

            <hr />

            <Form onSubmit={addSession}>
                <Form.Group className="mb-3" controlId="sequenceId">
                    {/* for of label is htmlFor in JSX */}
                    <Form.Label>Sequence ID</Form.Label>{" "}
                    {/* when we set the value (vs. defaultValue) prop to a state variable, the state controls the input */}
                    <Form.Control
                        type="text"
                        placeholder="Sequence ID"
                        value={sequenceId}
                        onChange={(event) => setSequenceId(event.target.value)}
                    />
                    <div className="text-danger" style={{ fontSize: "12px" }}>
                        {sequenceIdError}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="New session name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        value={speaker}
                        onChange={(event) => setSpeaker(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1.5"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        aria-label="Level of the session"
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                    >
                        <option>Select a level</option>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Abstract</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={abstract}
                        onChange={(event) => setAbstract(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" data-testid="btn-submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddSession;
