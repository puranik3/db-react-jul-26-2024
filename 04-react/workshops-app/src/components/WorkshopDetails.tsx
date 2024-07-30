import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";

import { getWorkshopById } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";

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
                </>
            )}
        </div>
    );
};

export default WorkshopDetails;
