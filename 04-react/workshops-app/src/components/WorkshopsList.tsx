import { useEffect } from "react";
import { getWorkshops } from "../services/workshops";

const WorkshopsList = () => {
    useEffect(() => {
        // effect function cannot be an async function
        const helper = async () => {
            const data = await getWorkshops();
            console.log(data);
        };

        helper();
    }, []);

    return (
        <div>
            <h1>List of Workshops</h1>
            <hr />
        </div>
    );
};

export default WorkshopsList;
