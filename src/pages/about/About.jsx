import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [toggle, setToggle] = useState(1);
  const toggleState = (index) => {
    setToggle(index);
  };

  return (
    <div>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="abt-img"></div>
          </div>

          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggle === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggle === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>Skills</h2>
              </div>

              <div
                className={
                  toggle === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Experience</h2>
              </div>
            </div>

            <div className="tab-content">
              {/*About content */}
              <div
                className={toggle === 1 ? "content active-content" : "content"}
              >
                <h2>My Story</h2>
                <p>
                  Been a developer has always been a dream come through. Trust
                  me it was not a smooth journey but it was woth it all the
                  same. Every experience, challenge, breakdown, was worth it. I
                  am Ishola Deborah Opeyemi. A Jumior Frontend Developer that
                  always have a broken heart when tasks is not completed due to
                  nature circumstaces. I started the Journey of a Developer 2
                  Years ago and it has been an awesome experience. For more
                  setails about my story/myself you can check my blog
                  @debby192.hashnode.com
                </p>
                <h3>
                  I am a Web developer and Designer having 2 years of experience
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  quia eum provident itaque hic impedit nulla explicabo
                  cupiditate soluta dolorem.
                </p>
              </div>

              {/*Skill content */}
              <div
                className={toggle === 2 ? "content active-content" : "content"}
              >
                <h2>Skills</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  fuga ex optio sint, aut adipisci voluptatibus, dicta illum
                  ducimus quaerat dolores similique cupiditate delectus harum
                  sed in magnam at reiciendis.
                </p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Html & Css</h3>
                      <div className="progress">
                        <div className="progress-bar html">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>React Js</h3>
                      <div className="progress">
                        <div className="progress-bar Reactjs">
                          <span>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Vue Js</h3>
                      <div className="progress">
                        <div className="progress-bar Vue">
                          <span>50%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Javascript</h3>
                      <div className="progress">
                        <div className="progress-bar Javascript">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Experience content */}
              <div
                className={toggle === 3 ? "content active-content" : "content"}
              >
                <div className="exp-column">
                  <h3>Carburant</h3>
                  <span>2022</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Non exercitationem ab sapiente ea, vel quisquam odio
                    reiciendis culpa incidunt minima?
                  </p>
                </div>

                <div className="exp-column">
                  <h3>Horizon</h3>
                  <span>2023</span>
                  <p>
                    Assisted in the design, analysis and development of
                    programming application. Documented technical
                    specifications. Worked closely with other intern on scope of
                    future project. Researched and reviewed regulatory,
                    technical or market issues related to sustainability.
                    Collaborated with team members on project tasks and
                    assignments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
