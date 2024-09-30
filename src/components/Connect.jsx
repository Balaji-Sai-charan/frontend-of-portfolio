import React, { useState } from "react";
import "./Connect.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Connect() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div
        className="connect"
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-easing="linear"
      >
        <div>
          <a target="_blank" href="https://www.instagram.com/balaji_sai_charan_/">
            <p id="insta">
              <i className="fa-brands fa-instagram"></i>
              <span>&nbsp;Instagram&nbsp;</span>
            </p>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/balaji-sai-charan/"
          >
            <p id="linked">
              <i className="fa-brands fa-linkedin"></i>
              <span>&nbsp;Linkedin&nbsp;</span>
            </p>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/Balaji-Sai-charan">
            <p id="github">
              {" "}
              <i className="fa-brands fa-github"></i>
              <span>&nbsp;Github&nbsp;</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
