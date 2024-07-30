import { Button, Form } from "react-bootstrap";

interface IProps {
    workshopId: number;
}

const AddSession = ({ workshopId }: IProps) => {
    // const { workshopId } = useParams();

    return (
        <div>
            <h2>Add a new session</h2>

            <hr />

            <Form>
                <Form.Group className="mb-3" controlId="sequenceId">
                    {/* for of label is htmlFor in JSX */}
                    <Form.Label>Sequence ID</Form.Label>{" "}
                    <Form.Control type="text" placeholder="Sequence ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="New session name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" placeholder="1.5" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select aria-label="Level of the session">
                        <option>Select a level</option>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Abstract</Form.Label>
                    <Form.Control as="textarea" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddSession;
