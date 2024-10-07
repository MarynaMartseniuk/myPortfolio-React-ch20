import '../App.css';

export default function Resume() {
    return (
      <div class="container text-center mainContainer">
        <div class="row">

          <div id="myResume" class="col-4">
            <h1>My Resume</h1>
          </div>

          <div id="mySkills" class="col-8">
          <ul>
              <li id="frontEnd">
                  <h3>Frontend Development</h3>
                  <div>
                    <p>1. HTML5/CSS3 Proficiency</p>
                    <ul>
                      <li>
                        Skilled in creating semantic and accessible HTML structures.
                      </li>
                      <li>
                        Experienced in using modern CSS techniques, including Flexbox and Grid Layout.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>2. JavaScript Expertise</p>
                    <ul>
                      <li>
                        Proficient in ES6+ features (e.g., arrow functions, async/await).
                      </li>
                      <li>
                        Strong understanding of the Document Object Model (DOM) and event handling.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>3. React Development</p>
                    <ul>
                      <li>
                        Experienced in building single-page applications using React.
                      </li>
                      <li>
                        Familiar with React Hooks.
                      </li>
                    </ul>
                  </div>
              </li>
              <li id="backEnd">
                  <h3>Backend Development</h3>
                  <div>
                    <p>4. Node.js Proficiency</p>
                    <ul>
                      <li>
                        Skilled in building RESTful APIs and web services using Express.js.
                      </li>
                      <li>
                        Experience in asynchronous programming and using middleware.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>5. Database Management</p>
                    <ul>
                      <li>
                        Proficient in ES6+ features (e.g., arrow functions, async/await).
                      </li>
                      <li>
                        Experienced in NoSQL database management using MongoDB, including schema design and aggregation frameworks.
                      </li>
                    </ul>
                  </div>
              </li>       
              <li id="fullStack">
                  <h3>Full-Stack Development</h3>
                  <div>
                    <p>6. Full-Stack Application Development</p>
                    <ul>
                      <li>
                        Capable of developing full-stack applications, integrating frontend and backend technologies seamlessly.
                      </li>
                      <li>
                        Experienced in deploying applications using cloud platforms (e.g., Render, Netlify).
                      </li>
                    </ul>
                  </div>
              </li>
              <li id="Git" >
                  <h3>Version Control and Collaboration</h3>
                  <div>
                    <p>7. Version Control with Git</p>
                    <ul>
                      <li>
                        Proficient in using Git for version control, including branching, merging, and pull requests.
                      </li>
                      <li>
                        Experienced in collaborative workflows using GitHub.
                      </li>
                    </ul>
                  </div>
              </li>
              <li id="TestDebug" >
                  <h3>Testing and Debugging</h3>
                  <div>
                    <p>8. Testing Frameworks</p>
                    <ul>
                      <li>
                        Familiar with testing libraries like Jest for unit testing JavaScript applications.
                      </li>
                      <li>
                        Experience in debugging and troubleshooting code in development environment.
                      </li>
                    </ul>
                  </div>
              </li>
              <li id="otherSkills">
                  <h3>Other Skills</h3>
                  <div>
                    <p>9. Responsive Web Design</p>
                    <ul>
                      <li>
                        Skilled in creating responsive designs that work across various devices and screen sizes..
                      </li>
                      <li>
                        Experience in using libraries like Bootstrap, Chakra UI to reach responsivness.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>10. Performance Optimization</p>
                    <ul>
                      <li>
                        Experienced in optimizing web applications for performance and speed, including modularization.
                      </li>
                    </ul>
                  </div>
              </li> 
            </ul>
          </div>

        </div>
      </div>
    );
}