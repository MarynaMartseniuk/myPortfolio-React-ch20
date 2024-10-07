import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './Footer.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div class="container text-center mainContainer">
      <div class="row">
        <div id="footerContactMe" class="col-4">Contact Me:</div>
        <div id="myData" class="col-8">
        <ul>
            <li id="phone">
              phone: +1 (801) 349.68.36
            </li>
            <li id="email">
              E-mail: marina.ved80@gmail.com
            </li>       
            <li id="LinkedIn">
              <a class="myDataLink" href="https://www.linkedin.com/in/maryna-martseniuk/" 
              target="_blank">LinkedIn</a>
            </li>
            <li id="GitHub" >
              <a class="myDataLink" href="https://github.com/MarynaMartseniuk" 
              target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;