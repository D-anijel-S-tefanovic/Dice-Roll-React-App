import React from "react";
import "./ProfilePicturesStyles.css";

export default function ProfilePictureLeft(props) {
  return (
    <React.Fragment>
      <ul className="fade-in-pictures">
        <li>
          <input
            id={props.pictureLeftId}
            type="checkbox"
            onChange={props.handleLeftCheck}
            checked={props.pictureLeftCheck}
          />

          <label for={props.pictureLeftFor}>
            {" "}
            <img src={props.pictureLeft} alt="" />{" "}
          </label>
        </li>
      </ul>
    </React.Fragment>
  );
}
