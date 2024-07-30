# Workshops App

-   React is a JS library for building frontend app
    -   created by Facebook (Meta)
    -   Alternatives
        -   Angular, Vue, Solid, Svelte
    -   It makes it easy to create the app
    -   It makes it easy to think about the design of the app
        -   Components - A component is a reusable, customizable piece of the UI
            -   In HTML: <input type="password" placeholder="Password" />
            -   In React: <Tab icon="book" text="Wiki" />, <Tab icon="play" text="Actions" />
    -   With React you do not need to do DOM manipulation yourself - React does it for you.
        -   You tell what kind of UI you want
            -   You tell what you want to show - a list of employees, and you supply that data
            -   React will do the necessary DOM manipulations to show the list
            -   If the data changes, the UI updates automatically
                -   you fetch data from the backend and set it. React updates the UI.
                    -   cleaner and simpler code
    -   React apps are easy to manage than vanilla JS apps

## Step 1: Project setup

Create the React app that shall be written in TypeScript

```
npx create-react-app workshops-app --template typescript
```

## Step 2: Project Structure and Build

Understand the project structure and build process (set up with `react-scripts`, `webpack` and its plugins)

## Step 3: Understanding props

-   `src/App.tsx` - Change the component to accept props, and have it rendered in the UI.

```tsx
// EXERCISE 1: Understand how props are received (as an object)
/*
{
    title: "Workshops App",
    subtitle: "Find workshops nearby"
}
*/

interface Props {
    title: string;
    subtitle: string;
}

const App = (props: Props) => {
    console.log(props);

    return (
        <div>
            <h1>{props.title}</h1>
            <hr />
            {/* EXERCISE 2: Add subtitle in an h2 */}
        </div>
    );
};

// EXERCISE 3: Understand named vs default export
// There can be only 1 default export in a module (file)
export default App;

// There can be many named exports
/*
export {
    App
}
*/
```

-   `src/index.tsx` - Use the App component and render many instances of it.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// EXERCISE 1: Note that the default export can be imported with any name
import Application from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// EXERCISE 2: Render a simple UI in place of the App component
root.render(
    <div>
        Hello <strong>React</strong>
    </div>
);

// Replace the above rendered simple UI with this
// root.render(
//   <React.StrictMode>
//     <Application title="Workshops App" subtitle="Find workshops nearby" />
//     {/* EXERCISE 2: Use many instances of the App component each with different props */}
//   </React.StrictMode>
// )
```

## Step 4: Install Bootstrap and React router libraries

-   Install the libraries

```
npm i bootstrap react-bootstrap react-router-dom
```

-   `src/index.tsx` - Include Bootstrap styles

```tsx
import "bootstrap/dist/css/bootstrap.css";
```

## Step 5: Create the Home page

-   `src/components/Home.tsx`

```tsx
interface IHomeProps {
    title: string;
}

// EXERCISE 1: Create using `sfc`
// EXERCISE 2: Render a UI. Show the title in an h1.
const Home = (props: IHomeProps) => {
    return (
        <div className="border border-primary p-5">
            <h1>{props.title}</h1>
            <hr />
            <p className="lead">
                Welcome to Workshops App. You can find details of nearby
                workshops here.
            </p>
        </div>
    );
};

export default Home;
```

-   `src/pages/HomePage.tsx`

```tsx
import Home from "../components/Home";

interface IHomePageProps {
    title: string;
}

// EXERCISE 1: Create using `sfc`
// EXERCISE 2: Pass the title prop
const HomePage = (props: IHomePageProps) => {
    return <Home title={props.title} />;
};

export default HomePage;
```

-   `src/App.tsx` - Import `HomePage` component and render it in the UI.

```tsx
import HomePage from "./pages/HomePage";
```

```tsx
// EXERCISE `: Pass the title prop when rendering HomePage
return (
    <div className="container my-5">
        <HomePage title={props.title} />
    </div>
);
```

-   `src/index.tsx`. Render only one `App` instance now.

```tsx
root.render(
    <React.StrictMode>
        <Application
            title="Workshops Application"
            subtitle="Find workshops nearby"
        />
    </React.StrictMode>
);
```

## Step 6: Passing props encapsulated in an object

-   `src/App.tsx`

```tsx
// EXERCISE 1: Define an object with the props as properties. Pass it to the App instance using props spread operator.
/*
const appProps = {
    title: "Workshops Application",
    subtitle: "Find workshops nearby"
};
*/

// EXERCISE 2: Note that in class-based components, and you want to drill props {...this.props} from the component to its child component

// props spread operator - {...appProps} -> properties of the appProps object are sent as props
// root.render(
//     <React.StrictMode>
//         <Application {...appProps} />
//     </React.StrictMode>
// );
```

## Step 7: Getting started with routing

-   `src/index.tsx`
-   Import `BrowserRouter`

```tsx
import { BrowserRouter } from "react-router-dom";
```

-   Include `BrowserRouter` as the parent of `App`

```tsx
root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <Application {...appProps} />
        {/* </BrowserRouter> */}
    </React.StrictMode>
);
```

-   `src/components/WorkshopsList.tsx`

```tsx
// EXERCISE 1: Use Fragment - <></> to group elements - it does not create a real DOM node (unlike HTML elements like div, section etc.)
const WorkshopsList = () => {
    return (
        <>
            <h1>List of workshops</h1>
            <hr />
        </>
    );
};

export default WorkshopsList;
```

-   `src/pages/WorkshopsListPage.tsx`

```tsx
import WorkshopsList from "../components/WorkshopsList";

// EXERCISE 1: Create using `sfc` and render the `WorkshopsList` component
const WorkshopsListPage = () => {
    return <WorkshopsList />;
};

export default WorkshopsListPage;
```

-   `src/App.tsx`

```tsx
import HomePage from "./pages/HomePage";
import WorkshopsListPage from "./pages/WorkshopsListPage";

// EXERCISE 1: Import Routes, Route
// import { Routes, Route } from 'react-router-dom';
```

```tsx
// EXERCISE 2: Render the `HomePage` and `WorkshopsListPage` components based on the route path.
return (
    <div className="container my-5">
        {/* <Routes>
            <Route element={<HomePage title={props.title} />} path="/" />
            <Route element={<WorkshopsListPage />} path="/workshops" />
        </Routes> */}
    </div>
);
```

## Step 8: Adding a Menu

-   `src/components/Menu.tsx`

```tsx
// EXERCISE 1: Change a Nav template to fit the application requirements
import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="/">Workshops App</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/workshops">List of workshops</Nav.Link> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#">Change theme</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
```

-   `src/App.tsx`

```tsx
// EXERCISE 1: Import `Menu` and set it at the top of the page
// import Menu from './components/Menu';
import HomePage from "./pages/HomePage";
import WorkshopsListPage from "./pages/WorkshopsListPage";
import { Routes, Route } from "react-router-dom";
```

```tsx
return (
    <>
        {/* <Menu /> */}

        <div className="container my-5">
            <Routes>
                <Route element={<HomePage title={props.title} />} path="/" />
                <Route element={<WorkshopsListPage />} path="/workshops" />
            </Routes>
        </div>
    </>
);
```

## Step 9: Avoid server request using NavLink

-   `src/components/Menu.tsx`

```tsx
// EXERCISE 1: Switch to `NavLink` for links within the application
// EXERCISE 2: Include the `Menu.css` file
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

// import './Menu.css';

const Menu = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary"
        >
            <Container>
                {/* <Navbar.Brand to="/" as={NavLink}>Workshops App</Navbar.Brand> */}

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/workshops" as={NavLink}>List of workshops</Nav.Link> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#">Change theme</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
```

-   `src/components/Menu.css`

```css
/* EXERCISE 1: Override Bootstrap active class for use in NavLink */
.navbar-nav .nav-link.active {
    color: crimson;
}
```

## Step 10: Adding environment variables

-   `.env`

```
REACT_APP_BASE_URL=https://workshops-server.onrender.com
```

## Step 11: Calling the backend API and getting workshops data

-   Install `axios`

```
npm i axios
```

-   `src/services/configureAxios.ts`

```tsx
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
```

-   `src/index.tsx`

```tsx
import "./services/configureAxios";
```

-   `src/services/workshops.ts`

```tsx
import axios from "axios";

const getWorkshops = (page: number = 1) => {
    return axios
        .get(`/workshops`, {
            params: {
                _page: page,
            },
        })
        .then((response) => {
            // console.log( response.data );
            return response.data;
        });
};

export { getWorkshops };
```

-   `src/components/WorkshopsList.tsx`

```tsx
import { useEffect } from "react";
import { getWorkshops } from "../services/workshops";
```

```tsx
useEffect(() => {
    getWorkshops(1).then((data) => console.log(data));
}, []);
```

## Step 12: Using `async..await` instead of `then()`, setting state for re-rendering, rendering a list

-   `src/services/workshops.ts`

```tsx
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

// using async..await - async function always return a promises - even if you return an array, it gets wrapped up in a promise
const getWorkshops = async (page: number = 1) => {
    // the function passed to then() is called when the data is successfully obtained from the backend
    const response = await axios.get<IWorkshop[]>(`/workshops`, {
        params: {
            _page: page,
        },
    });
    return response.data;
};

export { getWorkshops };

export type { IWorkshop };
```

-   `src/components/WorkshopsList.tsx`

```tsx
import { useEffect, useState } from "react";
import { getWorkshops } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";
```

```tsx
const WorkshopsList = () => {
    // [ data, setter_function_for_changing_the_data ] -> destructuring
    const [ workshops, setWorkshops ] = useState( [] as IWorkshop[] );

    // For side-effects we use useEffect()
    // Hooks are a set of methods in React - begins with use*()
    // hooks can be used ONLY in function component
    // In class-based components, special methods were used to run side-effects - componentDidMount() - "lifecycle methods"
    // componentDidMount() -> to execute logic when component shows up on the screen
    // componentDidUpdate()
    // componentWillUnmount()
    // useEffect() plays the role of these 3 lifecycle methods in function components
    useEffect(
        () => {
            const helper = async () => {
                const data = await getWorkshops(1);
                console.log( data );
                setWorkshops( data ); // React updates the state, and updates the UI
            };

            helper();
        },
        []
    );
```

```tsx
return (
    <>
        <h1>List of workshops</h1>
        <hr />
        <div>Numbers of workshops = {workshops.length}</div>
        <ol>
            {
                // [
                //     <li>Angular</li>,
                //     <li>React JS Masterclass</li>,
                //     <li>Crash course in MongoDB</li>,
                //     ,,,,
                // ]
                workshops.map((w) => (
                    <li key={w.id}>{w.name}</li>
                ))
            }
        </ol>
    </>
);
```

## Step 13: Event handling, running side-effects when some state changes

-   `src/components/WorkshopsList.tsx`

```tsx
import { useEffect, useState } from "react";
```

```tsx
const [workshops, setWorkshops] = useState([] as IWorkshop[]);
const [page, setPage] = useState(1);

// For side-effects we use useEffect()
// Hooks are a set of methods in React - begins with use*()
useEffect(
    () => {
        const helper = async () => {
            const data = await getWorkshops(page);
            console.log(data);
            setWorkshops(data); // React updates the state, and updates the UI
        };

        helper();
    },
    // [] // run this side-effect when the component shows up on the screen (after first render only)
    // if you dont provide a second argument (array) - the side-effect executes on every render
    [page] // run this side-effect when the component shows up on the screen, and also when the variables mentioned change during a rendering
);

function previous() {
    if (page <= 1) {
        return;
    }

    setPage(page - 1);
}

function next() {
    setPage(page + 1);
}
```

```tsx
<div>Numbers of workshops = {workshops.length}</div>
<div className="my-4">
    <div>You are viewing page {page}</div>
    <button
        onClick={previous}
        className="btn btn-sm btn-primary me-2"
    >
        Previous
    </button>
    <button onClick={next} className="btn btn-sm btn-primary">
        Next
    </button>
</div>
```

## Step 14: Conditional rendering and HTML rendering

-   `src/components/WorkshopsList.tsx`

```tsx
import { ListGroup, ListGroupItem } from "react-bootstrap";
```

```tsx
// toggling description
const [show, setShow] = useState(false);

function toggleDescription() {
    setShow(!show);
}
```

```tsx
    <button onClick={next} className="btn btn-sm btn-primary me-4">
        Next
    </button>
    <button
        onClick={toggleDescription}
        className="btn btn-sm btn-primary"
    >
        Toggle description
    </button>
```

```tsx
<ListGroup>
    {workshops.map((w) => (
        <ListGroupItem key={w.id}>
            {w.name}

            {/* For if-else rendering use ? : (ternary conditional operator) */}
            {show === true && (
                <div
                    dangerouslySetInnerHTML={{
                        __html: w.description,
                    }}
                ></div>
            )}
        </ListGroupItem>
    ))}
</ListGroup>
```

## Step 15: Set up Workshop details page and link to it

-   `src/components/WorkshopsDetails.tsx`

```tsx
const WorkshopDetails = () => {
    return <div>details to be shown here</div>;
};

export default WorkshopDetails;
```

-   `src/pages/WorkshopDetailsPage.tsx`

```tsx
import WorkshopDetails from "../components/WorkshopDetails";

const WorkshopDetailsPage = () => {
    return <WorkshopDetails />;
};

export default WorkshopDetailsPage;
```

-   `src/components/WorkshopsList.tsx`

```tsx
import { Link } from "react-router-dom";
```

```tsx
<Link to={"/workshops/" + w.id}>{w.name}</Link>
```

-   `src/App.tsx`

```tsx
import { Routes, Route } from "react-router-dom";

import WorkshopDetailsPage from "./pages/WorkshopDetailsPage";
```

```tsx
<Route element={<WorkshopDetailsPage />} path="/workshops/:id" />
```

## Step 16: Fetching and showing workshop name

-   `src/services/workshops.ts`

```tsx
const getWorkshopById = async (id: number) => {
    const response = await axios.get<IWorkshop>(`/workshops/${id}`);
    return response.data;
};

export { getWorkshops, getWorkshopById };
```

-   `src/components/WorkshopDetails.tsx`

```tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWorkshopById } from "../services/workshops";
import type { IWorkshop } from "../services/workshops";

const WorkshopDetails = () => {
    const [workshop, setWorkshop] = useState<IWorkshop | null>(null);
    console.log(useParams());

    // object destructuring
    // const { workshopId } = useParams<IParams>(); // { workshopId: "3" }
    const { workshopId } = useParams(); // { workshopId: "3" }
    const workshopIdStr = workshopId as string;

    useEffect(() => {
        const helper = async () => {
            const data = await getWorkshopById(+workshopIdStr);
            setWorkshop(data);
        };

        helper();
    }, []);

    return (
        <div>
            {workshop !== null && (
                <>
                    <h1>{workshop.name}</h1>
                    <hr />
                </>
            )}
        </div>
    );
};

export default WorkshopDetails;
```

-   `src/App.tsx`

```tsx
<Route element={<WorkshopDetailsPage />} path="/workshops/:workshopId" />
```

## Step 17: Handling UI loading states

-   `src/components/WorkshopDetails.tsx`

```tsx
import { Alert, Spinner } from "react-bootstrap";
```

```tsx
const [loading, setLoading] = useState(true);
const [error, setError] = useState<Error | null>(null);
```

```tsx
const helper = async () => {
    try {
        const data = await getWorkshopById(+workshopIdStr);
        setWorkshop(data);
        setLoading(false);
    } catch (error) {
        setError(error as Error);
        setLoading(false);
    }
};
```

```tsx
{
    loading === true && (
        <div className="text-center">
            <Spinner />
        </div>
    );
}
{
    error !== null && <Alert variant="danger">{error.message}</Alert>;
}
```

## Step 18: Grid system for responsive grid

-   `src/components/WorkshopDetails.tsx`

```tsx
import { Alert, Image, Spinner } from "react-bootstrap";
```

-   ``

```tsx
{
    /* Row */
}
<div className="row">
    {/* Breakpoints: xs, sm, md, lg, xl, xxl */}
    {/* Col */}
    <div className="col-12 col-sm-6 col-md-4">
        <Image src={workshop.imageUrl} alt={workshop.name} fluid />
    </div>
    <div className="col-12 col-sm-6 col-md-8">
        <div className="mb-3">
            {workshop.location.address}, {workshop.location.city},{" "}
            {workshop.location.state}
        </div>
        <div
            dangerouslySetInnerHTML={{
                __html: workshop.description,
            }}
        ></div>
    </div>
</div>;
```

## Step 19: Adding child routes

-   `src/components/SessionsList.tsx`

```tsx
const SessionsList = () => {
    return (
        <div>
            <h2>List of sessions</h2>
            <hr />
            <div>
                Left as an exercise. You need to make a call to
                /workshops/2/sessions
                (https://workshops-server.onrender.com/workshops/2/sessions)
            </div>
        </div>
    );
};

export default SessionsList;
```

-   `src/services/sessions.ts`

```ts
/**
 * sessions related API calls go in here
 */

// you code to get the list of session (for SessionsList component), export etc..
// ....

export {};
```

-   `src/components/AddSession.tsx`

```tsx
const AddSession = () => {
    return (
        <div>
            <h2>Add a new session</h2>
            <hr />
        </div>
    );
};

export default AddSession;
```

-   `src/components/WorkshopDetails.tsx`

```tsx
import { Route, Routes, useParams } from "react-router-dom";
import SessionsList from "./SessionsList";
import AddSession from "./AddSession";
```

```tsx
<div className="mt-5">
    <Routes>
        <Route path="" element={<SessionsList />} />
        <Route path="add" element={<AddSession />} />
    </Routes>
</div>
```

-   `src/App.tsx`

```tsx
<Route element={<WorkshopDetailsPage />} path="/workshops/:workshopId/*" />
```

## Step 20: Links to child routes

-   `src/components/WorkshopDetails.tsx`

```tsx
import { Link, Route, Routes, useParams } from "react-router-dom";
import { Alert, Button, Image, Spinner } from "react-bootstrap";
```

```tsx
<div className="mt-5">
    <Link to="">
        <Button variant="primary" size="sm" className="me-2">
            Sessions list
        </Button>
    </Link>
    <Link to="add">
        <Button variant="primary" size="sm" className="me-2">
            Add a session
        </Button>
    </Link>
</div>
```

## Step 21: Set up form to add a session

-   `src/components/AddSession.tsx`

```tsx
import { Button, Form } from "react-bootstrap";

interface IProps {
    workshopId: number;
}

const AddSession = (props: IProps) => {
    return (
        <div>
            <h2>Add a new session</h2>

            <hr />

            <Form>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>{" "}
                    {/* for of label is htmlFor in JSX */}
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
```

-   `src/components/WorkshopDetails.tsx`

```tsx
<Route path="add" element={<AddSession workshopId={+workshopIdStr} />} />
```

## Step 22: Extract user input from the form fields (uncontrolled components pattern)

-   `src/components/AddSession.tsx` - Use a ref to get a reference to the input DOM node (in the `current` property). Then read the user input using its `value` property.

```tsx
import { FormEvent, useRef } from "react";
```

```tsx
const sequenceIdRef = useRef<HTMLInputElement>(null);

function addSession(event: FormEvent) {
    event.preventDefault(); // prevent browser from doing what it usually does for form submit

    // sequenceIdRef.current is the DOM node
    console.log(sequenceIdRef.current?.value);
}
```

```tsx
<Form onSubmit={addSession}>
    <Form.Group className="mb-3" controlId="sequenceId">
        <Form.Label>Sequence ID</Form.Label>{" "}
        <Form.Control
            type="text"
            placeholder="Sequence ID"
            ref={sequenceIdRef}
        />
    </Form.Group>
</Form>
```

## Step 23: Extract user input from the form fields (controlled components pattern)

-   `src/components/AddSession.uncontrolled.tsx` - Take a copy of `src/components/AddSession.tsx` and rename it as `src/components/AddSession.uncontrolled.tsx`

-   `src/components/AddSession.tsx`

```tsx
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

interface IProps {
    workshopId: number;
}

// Pattern 2: Controlled components
// destructuring the props object and creating a variable called workshopId
const AddSession = ({ workshopId }: IProps) => {
    // you create a state for every input
    const [sequenceId, setSequenceId] = useState("10");
    const [name, setName] = useState("");
    const [speaker, setSpeaker] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [abstract, setAbstract] = useState("");

    async function addSession(event: FormEvent) {
        event.preventDefault();

        const newSession = {
            // workshopId: workshopId
            // sequenceId: sequenceId
            workshopId,
            sequenceId: +sequenceId.trim(),
            name: name.trim(),
            speaker: speaker.trim(),
            duration: +duration.trim(),
            level,
            abstract: abstract.trim(),
            upvoteCount: 0,
        };

        console.log(newSession);

        // ready to send this to the backend
    }

    return (
        <div>
            <h2>Add a new session</h2>

            <hr />

            <Form onSubmit={addSession}>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>{" "}
                    {/* for of label is htmlFor in JSX */}
                    <Form.Control
                        type="text"
                        placeholder="Sequence ID"
                        value={sequenceId}
                        onChange={(event) => setSequenceId(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="New session name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        value={speaker}
                        onChange={(event) => setSpeaker(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1.5"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        aria-label="Level of the session"
                        value={sequenceId}
                        onChange={(event) => setLevel(event.target.value)}
                    >
                        <option>Select a level</option>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Abstract</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={abstract}
                        onChange={(event) => setAbstract(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddSession;
```

## Step 24: Validate the form and set up to add the session to the backend

-   `src/services/sessions.ts`

```tsx
import axios from "axios";

/**
 * sessions related API calls go in here
 */

// you code to get the list of session (for SessionsList component), export etc..
// ....

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

const addSession = async (sessionData: Omit<ISession, "id">) => {
    const response = await axios.post<ISession>(`/sessions`, sessionData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
};

export { addSession };
```

-   `src/components/AddSession.tsx`

```tsx
import { addSession as addSessionSvc } from "../services/sessions";
```

```tsx
const [sequenceIdError, setSequenceIdError] = useState("");

// NOTE: Libraries for validation - react-hook-form / Formik for validations

function validateSequenceId() {
    if (sequenceId.trim() === "") {
        setSequenceIdError("Sequence ID is required");
        return false;
    }

    const numberPat = /^[1-9][0-9]+$/;

    if (numberPat.test(sequenceId.trim()) === false) {
        setSequenceIdError("Sequence ID should be a number");
        return false;
    }

    // no error
    setSequenceIdError("");

    return true;
}

function validateForm() {
    // actually we need to collect the return from ALL validations functions, and if all are true, return true, else false
    return validateSequenceId();
}
```

```tsx
async function addSession(event: FormEvent) {
    // code from before...
    // ...

    const isValid = validateForm();

    // ready to send this to the backend
    if (isValid) {
        try {
            const data = await addSessionSvc(newSession);
            console.log(data);
            alert("Successfully added");
        } catch (error) {
            alert((error as Error).message);
        }
    }
}
```

```tsx
<Form.Group className="mb-3" controlId="sequenceId">
    <Form.Label>Sequence ID</Form.Label> {/* for of label is htmlFor in JSX */}
    <Form.Control
        type="text"
        placeholder="Sequence ID"
        value={sequenceId}
        onChange={(event) => setSequenceId(event.target.value)}
    />
    {
        <div className="text-danger" style={{ fontSize: "12px" }}>
            {sequenceIdError}
        </div>
    }
</Form.Group>
```

## Step 25: Adding theming using Redux store

-   Install the necessary libraries

```
npm i redux @reduxjs/toolkit react-redux
```

-   `src/slices/theme.ts`

```tsx
import { createSlice } from "@reduxjs/toolkit";

// like creating a reducer
const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers: {
        // { type: 'theme/toggleTheme', }
        // The state we receive is a "draft state" object
        toggleTheme(state) {
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

// action objects will be created with names using of the reducers.<methods>
const { toggleTheme } = themeSlice.actions;
export { toggleTheme };

export default themeSlice;
```

-   `src/store.ts`

```tsx
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme";

// slice is a small piece of the state. All slices put together form the state for the entire app.
const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
});

export default store;
```

-   `src/index.tsx`

```tsx
import { Provider } from "react-redux";
import store from "./store";
```

```tsx
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Application {...appProps} />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
```

-   `src/components/Menu.tsx`

```tsx
import { useDispatch } from "react-redux";
import { toggleTheme } from "../slices/theme";
```

```tsx
const dispatch = useDispatch();
```

```tsx
<Nav>
    <Nav.Link href="#" onClick={() => dispatch(toggleTheme())}>
        Change theme
    </Nav.Link>
</Nav>
```

-   `src/components/Home.tsx`

```tsx
import { useSelector } from "react-redux";

interface IHomeProps {
    title: string;
}

// Change in this for example - state.cart.item, will not cause re-render
const Home = (props: IHomeProps) => {
    // theme.value change will cause re-render
    const themeValue = useSelector((state: any) => state.theme.value);

    const classes =
        themeValue === "light" ? "bg-light text-dark" : "bg-dark text-light";

    return (
        <div className={"border border-primary p-5 " + classes}>
            <h1>{props.title}</h1>
            <hr />
            <p className="lead">
                Welcome to Workshops App. You can find details of nearby
                workshops here.
            </p>
        </div>
    );
};

export default Home;
```

## Step 26: Unit testing

-   `package.json`

```tsx
"jest": {
    "transformIgnorePatterns": [
        "node_modules/(?!axios)"
    ]
}
```

-   `src/components/Home.test.tsx`

```tsx
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

describe("Home component", () => {
    it("should have a heading with the name of the application", () => {
        // arrange
        render(
            <Provider store={store}>
                <Home title="My App" />
            </Provider>
        );

        // action
        const titleEl = screen.getByText("My App");

        // assert
        expect(titleEl).toBeInTheDocument();
    });
});
```

-   `src/components/AddSession.tsx`

```tsx
<Button variant="primary" type="submit" data-testid="btn-submit">
    Submit
</Button>
```

-   `src/components/AddSession.test.tsx`

```tsx
import AddSession from "./AddSession";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AddSession component", () => {
    it("should show an error message if the sequence id field is not filled in and the submit button is clicked", () => {
        // arrange
        render(<AddSession workshopId={1} />);
        const sequenceIdEl = screen.getByLabelText("Sequence ID");
        const buttonEl = screen.getByTestId("btn-submit");

        // action
        fireEvent.change(sequenceIdEl, "");
        fireEvent.click(buttonEl);

        // assert
        const errorEl = screen.getByText("Sequence ID is required");
        expect(errorEl).toBeInTheDocument();
    });
});
```
