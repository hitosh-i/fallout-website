import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Fallout NV Fan Page!</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>
          <a href="https://store.steampowered.com/app/22380/Fallout_New_Vegas/" target="_blank" rel="noopener noreferrer">
            Steam Page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
