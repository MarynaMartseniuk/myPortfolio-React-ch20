import myImage from '../utils/images/m2.jpg';
import '../App.css';

export default function About() {
    return (
      <div className="container text-center pageContainer">
        <div>
          <img id="myPhoto" src={myImage}/>
        </div>
        <div >
          <h1>About Me</h1>
          <p>
            My name is Maryna Martseniuk. I have been lived in Sandy, UT since 2017.
            I have a family (husband and son) and 3 parrots. Outdoors, traveling is the great way for us to enjoy family moments.
          </p>
          <p>
            I am currenly working for a medical company. Production area. My possition is a Process Control Operator. But I like coding and have a strong wish to try myself in this area.
          </p>
          <p>
            I finished Web Coding Bootcamp, University of Utah - 2024
            I finished QA Manual Course at Silicon Valley, QASV.US-2021
            I have a Masters Degree in Mechanial Engineering,  ZNTU Ukraine (Zaporizhzhian National Technical University) - 2003          
          </p>
        </div>
      </div>
    );
  }