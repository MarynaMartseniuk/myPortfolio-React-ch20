import myImage from '../utils/images/m2.jpg';
import '../App.css';
import './About.css';

export default function About() {
    return (
      <div className="container text-center pageContainer">
        <div className="row">
            <div id="photoContainer" className="col-4">
              <div id="photoDiv">
                <img id="myPhoto" src={myImage}/>
              </div>

              <p id="quote">
                ... If you FAIL, never give up because F.A.I.L. means "First Attempt in Learning". END is not the end; in fact E.N.D. means "Effort Never Dies". If you got NO as an answer, remember N.O. means "Next Opportunity"...
              </p>
              <p id="quoteAuthor">
                - Abdul Kalam -
              </p>
            </div>
            <div className="col-1"></div>
            <div id="bioContainer" className="col-7">
              <h1 id="bioHeader">About Me</h1>
              <p className="bio">
                My name is Maryna Martseniuk. I have been lived in Sandy, UT since 2017.
                I have a family (husband and son) and 3 parrots. Outdoors, traveling is the great way for us to enjoy family moments.
              </p>
              <p className="bio">
                I am currenly working for a medical company. Production area. Position held is a Process Control Operator. However I like coding and have a strong wish to try myself in this area.
              </p>
              <p className="bio">
                <ul>
                  <li>
                    Completed Web Coding Bootcamp, University of Utah - 2024
                  </li>
                  <li>
                  Completed QA Manual Course at Silicon Valley, QASV.US-2021
                  </li>
                  <li>
                    Masters Degree in Mechanial Engineering,  ZNTU Ukraine (Zaporizhzhian National Technical University) - 2003 
                  </li>
                </ul>         
              </p>
            </div>

        </div>
        
      </div>
    );
  }