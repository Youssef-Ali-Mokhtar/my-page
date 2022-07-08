import "./Home.css";
import myVideo from "../../assets/myVideo.mp4";
import myCv from "../../assets/Youssef_Ali_Mokhtar_CV.pdf";
import React from "react";
import fileDownload from "js-file-download";
import Axios from "axios";

const Home = (props) => {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: myCv,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, "Youssef_Ali_Mokhtar_CV.pdf");
    });
  };
  return (
    <section id="home-section" className="home-section">
      <div className="overlay">
        <div
          className={
            props.textStatus === "fas fa-bars" ? "content active" : "content"
          }
        >
          <h1>Hey, I am Youssef</h1>
          <p>A Front End Web Developer</p>
          <button
            className="resume-button"
            onClick={(e) => {
              download(e);
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
      <video src={myVideo} autoPlay loop muted />
      <div className="clip"></div>
    </section>
  );
};

export default Home;
