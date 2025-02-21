import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            
            <Link to={'/Login'}>Login</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/FindMy'}>
            FindMy</Link>
            <Link to={'/GiveBy'}>
            Give By</Link>

        </div>
    );
};

export default Nav;