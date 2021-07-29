import Navbar from "react-bootstrap/Navbar";
import PictureMaleLeft from "../Pictures/PictureMaleLeft.png";
import PictureMaleRight from "../Pictures/PictureMaleRight.png";
import PictureFemaleLeft from "../Pictures/PictureFemaleLeft.png";
import PictureFemaleRight from "../Pictures/PictureFemaleRight.png";
import { useSelector } from "react-redux";

export default function NavbarComponent(props) {
  const genderValue = useSelector((state) => state.diceRoll.genderValue);

  const pictureLeftCheck = useSelector(
    (state) => state.diceRoll.pictureLeftCheck
  );

  const pictureRightCheck = useSelector(
    (state) => state.diceRoll.pictureRightCheck
  );

  return (
    <Navbar className="p-0">
      <Navbar.Brand className="justify-content-start m-0 p-0">
        <img
          src={
            genderValue === "Male" && pictureLeftCheck
              ? PictureMaleLeft
              : genderValue === "Male" && pictureRightCheck
              ? PictureMaleRight
              : genderValue === "Female" && pictureLeftCheck
              ? PictureFemaleLeft
              : genderValue === "Female" && pictureRightCheck
              ? PictureFemaleRight
              : null
          }
          alt=""
          width="70"
          height="70"
        />{" "}
        <div className="d-inline-block align-middle text-white">
          Hello {props.userName}, Let's Roll Some Dice
        </div>
      </Navbar.Brand>
    </Navbar>
  );
}
