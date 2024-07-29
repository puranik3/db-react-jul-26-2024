import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import WorkshopsListPage from "./pages/WorkshopsListPage";

// component defined using a function
// reusable, customizable piece of the UI
interface IAppProps {
    title: string;
    subtitle: string;
}

const App = (props: IAppProps) => {
    return (
        <div>
            <Menu />

            <Container className="my-5">
                <Routes>
                    <Route path="/" element={<HomePage {...props} />} />
                    <Route path="/workshops" element={<WorkshopsListPage />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
