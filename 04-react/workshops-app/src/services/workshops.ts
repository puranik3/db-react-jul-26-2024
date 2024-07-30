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

const getWorkshops = async (page: number) => {
    const response = await axios.get<IWorkshop[]>(`/workshops`, {
        params: {
            _page: page,
        },
    });
    return response.data;
};

const getWorkshopById = async (id: number) => {
    const response = await axios.get<IWorkshop>(`/workshops/${id}`);
    return response.data;
};

export { getWorkshops, getWorkshopById };
export type { IWorkshop };
