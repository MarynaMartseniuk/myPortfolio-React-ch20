import project01image from '../utils/images/squareExmpl.jpg';
import '../App.css';

export default function Portfolio() {
    return (
      <div className="container text-center">
        <h1>My Portfolio</h1>
        <div className="row">
            <div className="col-6">
              <a  href="https://github.com/MarynaMartseniuk/SVG-Logo-Maker-ch10" target="_blank" rel="noopener noreferrer">
              <img  src={project01image}  alt="project01image"/>
              <h4 >Project No.1</h4>
              </a>
            </div>
            <div className="col-6">
              <a  href="https://github.com/MarynaMartseniuk/SVG-Logo-Maker-ch10" target="_blank" rel="noopener noreferrer">
              <img  src={project01image}  alt="project01image"/>
              <h4 >Project No.2</h4>
              </a>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
              <a  href="https://github.com/MarynaMartseniuk/SVG-Logo-Maker-ch10" target="_blank" rel="noopener noreferrer">
              <img  src={project01image}  alt="project01image"/>
              <h4 >Project No.3</h4>
              </a>
            </div>
            <div className="col-6">
              <a  href="https://github.com/MarynaMartseniuk/SVG-Logo-Maker-ch10" target="_blank" rel="noopener noreferrer">
              <img  src={project01image}  alt="project01image"/>
              <h4 >Project No.4</h4>
              </a>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
              <a  href="https://github.com/MarynaMartseniuk/SVG-Logo-Maker-ch10" target="_blank" rel="noopener noreferrer">
              <img  src={project01image}  alt="project01image"/>
              <h4 >Project No.5</h4>
              </a>
            </div>
            <div className="col-6">
              <a  href="https://github.com/MarynaMartseniuk/SVG-Logo-Maker-ch10" target="_blank" rel="noopener noreferrer">
              <img  src={project01image}  alt="project01image"/>
              <h4 >Project No.6</h4>
              </a>
            </div>
        </div>
      </div>
    );
}