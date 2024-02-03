import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <div className="navbar_div">
        <Link to="/home">home</Link>
        <Link to="/allProduct">All Product</Link>
        <Link to="/cart">cart</Link>
        <Link to="/order">order</Link>
        <Link to="/login">login</Link>
        </div>
        </>
    )
}
export default Nav;