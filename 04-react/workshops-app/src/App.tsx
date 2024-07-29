import { Container } from 'react-bootstrap';

import HomePage from './pages/HomePage'; 
// component defined using a function
// reusable, customizable piece of the UI
interface IAppProps {
  title: string,
  subtitle: string
}

const App = ( props : IAppProps ) => {
  return (
    <div>
      <Container className="my-5">
        <HomePage {...props} />
      </Container>
    </div>
  );
}

export default App;