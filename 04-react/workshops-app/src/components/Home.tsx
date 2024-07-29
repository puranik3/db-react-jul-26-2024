// sfc

interface IProps {
    title: string,
    subtitle: string
}

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

const Home = ( { title, subtitle } : IProps ) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            {/* do the same for subtitle */}
            <p>{subtitle}</p>
        </div>
    );
}
 
export default Home;