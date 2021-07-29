import React from "react";
import "./ProfilePicturesStyles.css";

export default function ProfilePictureRight(props) {
  return (
    <React.Fragment>
      <ul className="fade-in-pictures">
        <li>
          <input
            id={props.pictureRightId}
            type="checkbox"
            onChange={props.handleRightCheck}
            checked={props.pictureRightCheck}
          />

          <label for={props.pictureRightFor}>
            {" "}
            <img src={props.pictureRight} alt="" />{" "}
          </label>
        </li>
      </ul>
    </React.Fragment>
  );
}
