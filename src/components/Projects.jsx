/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Projects.css";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 1100 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="projectss" className="projects">
      <div>
        <h1>
          PROJE<span>CTS</span>
        </h1>
      </div>
      <div className="row">
        <div className="container-fluid main_menu">
          <div className="row">
            <div className="col-md-10 col-sm-8 col-12 mx-auto">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
                transitionDuration={0}
                pauseOnHover={true}
              >
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/b8bLXiJ.png" alt="" />
                    <div className="card-content">
                      <h2>Portfolio</h2>
                      <p>
                        An interactive portFolio website which showcases all my
                        works such as my education, projects, skills at one
                        place with some visual treat. This website contains
                        several sections which can be easily navigated through
                        navigation bar provided, and also contains a contact
                        section to contact me if required.
                        <br />
                        <b>Tech Used:</b> MERN Stack
                      </p>

                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Balaji-Sai-charan/frontend-of-portfolio"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://github.com/Balaji-Sai-charan/backend-of-portfolio"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/s3PwbWq.png" alt="" />
                    <div className="card-content">
                      <h2>Flix Booking</h2>
                      <p>
                        A flix booking is an online platform that allows users a
                        static experience to reserve and purchase cinema
                        tickets. Users can browse movie listings, select
                        showtimes, choose seats, and make static payments
                        through the system.
                        <br />
                        <b>Tech Used:</b> React.js, Css, Bootstarp, MongoDb, Express JS
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Balaji-Sai-charan/frontend-of-ticketbooking"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://movie-booking-online.netlify.app/"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/cJdfWlN.png" alt="" />
                    <div className="card-content">
                      <h2>Exploria-Tourist Website</h2>
                      <p>
                        Exploria is an interactive platform that simplifies travel planning. Users can explore various tourism packages suited to different interests and budgets, with a visually appealing layout and smooth, intuitive navigation.
                                             <br />
                        <b>Tech Used:</b> Javascript, CSS, HTML,Media Queries, HTML
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Balaji-Sai-charan/exploria"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://balaji-sai-charan.github.io/exploria/"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/0TBEBxN.png" alt="" />
                    <div className="card-content">
                      <h2>Snake Game</h2>
                      <p>
                          The Snake Game is a console-based C++ application for Windows where users control a snake to consume food while avoiding walls and its own body. The game tracks the score as the snake grows, offering a dynamic, real-time experience in the console.                        <br />
                        <b>Tech Used:</b> DSA,OOPS,Windows Console
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Balaji-Sai-charan/snake-game"
                      >
                        View Code
                      </a>
      
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/3KLuWZS.png" alt="" />
                    <div className="card-content">
                      <h2>Stop Watch</h2>
                      <p>
        The Stopwatch Application is a time-tracking tool with features to start, pause, reset, and track lap times. Users can measure intervals, reset the timer, and record laps, all through a simple, user-friendly interface.                        <br />
                        <b>Tech Used:</b> Javascript, Css, HTMl
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Balaji-Sai-charan/stopwatch"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://balaji-sai-charan.github.io/stopwatch/"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/Rx4Qg9V.png" alt="" />
                    <div className="card-content">
                      <h2>Sudoku Solver</h2>
                      <p>
The Sudoku Solver is a C++ program that uses the backtracking algorithm to solve puzzles. It takes an unsolved grid as input, fills in empty cells while adhering to Sudoku rules, and efficiently finds a valid solution by exploring potential placements and backtracking when conflicts occur.                        <br />
                        <b>Tech Used:</b> DSA,c++
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Balaji-Sai-charan/sudoku-solver"
                      >
                        View Code
                      </a>
        
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/UPr4hA5.png" alt="" />
                    <div className="card-content">
                      <h2>To do List</h2>
                      <p>
The To-Do List is a web application using HTML, CSS, and JavaScript that allows users to manage tasks by adding, editing, and deleting items. It features an intuitive interface for tracking completion and marking tasks as done, with dynamic functionality and a responsive design.                        <br />
                        <b>Tech Used:</b> Javascript, Css, HTML
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Balaji-Sai-charan/to-do-list"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://balaji-sai-charan.github.io/to-do-list/"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
