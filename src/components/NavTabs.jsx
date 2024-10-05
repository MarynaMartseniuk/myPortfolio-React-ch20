import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <div>
        <h2>Maryna Martseniuk</h2>
      </div>
    
      <ul>
        <li>
          <Link to="/">
            About
          </Link>
        </li>
        <li>
          <Link to="/Portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Resume">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;