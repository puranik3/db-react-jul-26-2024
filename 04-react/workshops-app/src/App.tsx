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
      <HomePage {...props} />
    </div>
  );
}

export default App;