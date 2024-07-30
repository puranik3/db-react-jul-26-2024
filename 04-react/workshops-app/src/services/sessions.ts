import axios from "axios";
/**
 * sessions related API calls go in here
 */

interface ISession {
    id: number;
    workshopId: number;
    sequenceId: number;
    name: string;
    speaker: string;
    duration: number;
    level: string;
    abstract: string;
    upvoteCount: number;
}

// you code to get the list of session (for SessionsList component), export etc..
// ....

const postSession = async (newSession: Omit<ISession, "id">) => {
    const response = await axios.post<ISession>(`/sessions`, newSession, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
};

export { postSession };
export type { ISession };
