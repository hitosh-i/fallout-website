import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Fallout NV Fan Page!</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Steam Page</li>
      </ul>
    </div>
  );
};

export default Navbar;
