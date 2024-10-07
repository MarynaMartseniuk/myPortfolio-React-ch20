import myImage from '../utils/images/m2.jpg'
import '../App.css';

export default function About() {
    return (
      <div class="container text-center mainContainer">
        <h1>About Me</h1>
        <img src={myImage}/>
        <div >
          <p>
            My name is Maryna.
            I have a family (husband and son).
            I have 3 parrots.
          </p>
          <p>
            I am currenly working for a medical company. 
            My possition is a Process Control Operator.
          </p>
          <p>
            I have a Masters Degree in Mechanial Engineering.
            I have been taken Coding Bootcamp at UofU.
          </p>
        </div>
      </div>
    );
  }