import { useParams } from "react-router-dom";

const WorkshopDetails = () => {
    // console.log(useParams());

    const { workshopId } = useParams();

    return (
        <div>details to be shown here for workshop with id = {workshopId}</div>
    );
};

export default WorkshopDetails;
