// component defined using a function
// reusable, customizable piece of the UI

/*
let props = {
  title: "Workshops App",
  subtitle: "Welcome to Workshops App. You can find details of nearby workshops."
}

// object destructuring
const title = props.title;
const subttile = props.subtitle;
const { title, subtitle } = props;
*/

interface IAppProps {
  title: string,
  subtitle: string
}

const App = ( { title, subtitle } : IAppProps ) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr />
      {/* do the same for subtitle */}
      <p>Welcome to Workshops App. You can find details of nearby workshops.</p>
    </div>
  );
}

export default App;