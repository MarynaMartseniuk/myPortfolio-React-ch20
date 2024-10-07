import project01image from '../utils/images/squareExmpl.jpg';
import '../App.css';

export default function Portfolio() {
    return (
      <div class="container text-center mainContainer">
        <h1>My Portfolio</h1>
        <div >
            <div>
                <a  href="https://github.com/MarynaMartseniuk/SVG-Logo-Maker-ch10" target="_blank" rel="noopener noreferrer">
                <img  src={project01image}  alt="project01image"/>
                <h4 >Project No.1</h4>
                </a>
            </div>
        </div>
      </div>
    );
}