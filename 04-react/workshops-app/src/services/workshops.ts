import axios from "axios";

interface IWorkshop {
    name: string;
    category: string;
    id: number;
    description: string;
    endDate: string;
    time: string;
    location: {
        address: string;
        city: string;
        state: string;
    };
    modes: {
        inPerson: boolean;
        online: boolean;
    };
    imageUrl: string;
}

const getWorkshops = async () => {
    const response = await axios.get<IWorkshop[]>(`/workshops`);
    return response.data;
};

export { getWorkshops };
export type { IWorkshop };
