import { NavLink } from 'react-router-dom';
const links = [
  { path: '/', text: 'Home' },
  { path: '/AdminNotifications', text: 'AdminNotifications' },
  { path: '/AccountPreference', text: 'AccountPreference' },
];
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
