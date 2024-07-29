import { useEffect, useState } from "react";
import { getWorkshops } from "../services/workshops";
import { ListGroup, Spinner } from "react-bootstrap";

const WorkshopsList = () => {
    // console.log(useState("hello")); // [ 'hello', setter_function ]

    // array destructuring
    const [workshops, setWorkshops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // effect function cannot be an async function
        const helper = async () => {
            setLoading(true); // about to make call to the backend

            const data = await getWorkshops();
            console.log(data);

            // workshops = data; // React will not re-render the UI this way
            // You have to use the setter to update the data
            setWorkshops(data); // React will update the data, and it will re-render the UI
            setLoading(false);
        };

        helper();
    }, []);

    return (
        <div>
            <h1>List of Workshops</h1>
            <hr />
            <div className="text-center">
                {/* conditional rendering */}
                {loading === true && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </div>
            {loading === false && (
                <>
                    <div>Number of workshops = {workshops.length}</div>
                    <ListGroup>
                        {/* {[
                            <ListGroup>{(workshops[0] as any).name}</ListGroup>,
                            <ListGroup>{(workshops[1] as any).name}</ListGroup>,
                            <ListGroup>{(workshops[2] as any).name}</ListGroup>,
                            <ListGroup>{(workshops[3] as any).name}</ListGroup>,
                        ]} */}
                        {workshops.map((w) => (
                            <ListGroup key={(w as any).id}>
                                {(w as any).name}
                            </ListGroup>
                        ))}
                    </ListGroup>
                </>
            )}
        </div>
    );
};

export default WorkshopsList;
