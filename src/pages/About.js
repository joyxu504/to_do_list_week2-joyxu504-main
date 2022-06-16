import React, { Component } from "react";
import "./About.css";
import joyxuheadshot from "../assets/joyxuheadshot.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={joyxuheadshot}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Joy Xu</div>
            <div className="brief_description">
              Hi, I'm Joy!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
