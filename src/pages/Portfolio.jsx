import project01image from '../utils/images/squareExmpl.jpg'

export default function Portfolio() {
    return (
      <div>
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