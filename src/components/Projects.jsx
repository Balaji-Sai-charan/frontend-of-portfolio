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
                    <img src="https://imgur.com/a/JKqeGOj" alt="" />
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
                    <img src="https://imgur.com/a/0pmv3NW" alt="" />
                    <div className="card-content">
                      <h2>Exploria-Tourist Website</h2>
                      <p>
                       Exploria is an interactive online platform designed to enhance your travel planning experience. Users can explore a variety of tourism packages tailored to different interests and budgets. The website features a visually appealing layout with smooth animations and transitions, making navigation enjoyable and intuitive.
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
                    <img src="https://imgur.com/a/vYK3m9y" alt="" />
                    <div className="card-content">
                      <h2>Snake Game</h2>
                      <p>
                       A Snake Game is a console-based application developed using C++ for the Windows platform. The game provides a classic, interactive experience where users control a snake, navigate the playing field, and aim to consume food while avoiding collisions with the walls or the snake's own body. The game tracks the player's score, increasing as the snake grows, and offers a real-time, dynamic gaming environment directly within the console window.
                        <br />
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
                    <img src="https://imgur.com/a/aZqcPLE" alt="" />
                    <div className="card-content">
                      <h2>Stop Watch</h2>
                      <p>
                       A Stopwatch Application is a time-tracking tool designed with features to start, pause, reset, and track lap times. Users can accurately measure intervals of time, pause and resume as needed, reset the timer back to zero, and capture specific lap times during the session. The interface is simple and user-friendly, offering precise time management and recording functionality.
                        <br />
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
                    <img src="https://imgur.com/a/s3vLmZG" alt="" />
                    <div className="card-content">
                      <h2>Sudoku Solver</h2>
                      <p>
                        A Sudoku Solver is a C++ program that utilizes the backtracking algorithm to solve Sudoku puzzles. The program takes an unsolved Sudoku grid as input and systematically fills in the empty cells, ensuring that each number placement follows the game's rules. By exploring potential solutions and backtracking when conflicts arise, the algorithm efficiently finds a valid solution, providing users with a fully solved puzzle.
                        <br />
                        <b>Tech Used:</b> Data Structures and Algorithms,c++
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
                    <img src="https://imgur.com/a/Q6F2kmc" alt="" />
                    <div className="card-content">
                      <h2>To do List</h2>
                      <p>
                        A To-Do List is a web-based application developed using HTML, CSS, and JavaScript. It allows users to manage tasks by adding, editing, and deleting items from the list. The interface is simple and intuitive, providing features such as task completion tracking and the ability to mark items as done. Users can organize their tasks efficiently, with the dynamic behavior enabled through JavaScript and a clean, responsive design built using HTML and CSS.
                        <br />
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
