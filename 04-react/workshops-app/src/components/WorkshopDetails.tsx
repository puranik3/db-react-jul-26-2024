import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { Alert, Button, Image, Spinner } from "react-bootstrap";

import SessionsList from "./SessionsList";

import { getWorkshopById } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";
import AddSession from "./AddSession";

const WorkshopDetails = () => {
    const [workshop, setWorkshop] = useState<IWorkshop | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    // console.log(useParams());

    const { workshopId } = useParams();
    const workshopIdNum = +(workshopId as string);

    useEffect(() => {
        const helper = async () => {
            setLoading(true);

            try {
                const data = await getWorkshopById(workshopIdNum);

                setWorkshop(data);
                setLoading(false);
            } catch (error) {
                setError(error as Error);
                setLoading(false);
            }
        };

        helper();
    }, []);

    return (
        <div>
            {loading === true && (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {loading === false && error !== null && (
                <Alert variant="danger">{error.message}</Alert>
            )}
            {loading === false && error === null && workshop !== null && (
                <>
                    <h1>{workshop.name}</h1>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                            <Image
                                src={workshop.imageUrl}
                                alt={`The logo of ${workshop.name}`}
                                fluid // defaults to true
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="text-primary mb-4">
                                {workshop.location.address},{" "}
                                {workshop.location.city},{" "}
                                {workshop.location.state}
                            </div>

                            {/* Is setting HTML content safe from XSS attack? */}
                            {/*<div>{workshop.description}</div>*/}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: workshop.description,
                                }}
                            ></div>
                        </div>
                    </div>
                </>
            )}

            <div className="mt-5">
                <NavLink to="">
                    <Button variant="primary" size="sm" className="me-2">
                        Sessions list
                    </Button>
                </NavLink>
                <NavLink to="add">
                    <Button variant="primary" size="sm" className="me-2">
                        Add a session
                    </Button>
                </NavLink>
            </div>

            <div className="mt-5">
                <Routes>
                    <Route path="" element={<SessionsList />} />
                    <Route
                        path="add"
                        element={<AddSession workshopId={workshopIdNum} />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default WorkshopDetails;
