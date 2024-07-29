// sfc
import Home from '../components/Home'

interface IProps {
    title: string,
    subtitle: string
}

const HomePage = ( props : IProps ) => {
    // Use props spread to pass all props received (an object with the props) as props to a child
    return (
        <Home {...props} />
    );
}
 
export default HomePage;