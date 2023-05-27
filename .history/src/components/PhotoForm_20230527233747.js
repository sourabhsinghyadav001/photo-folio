import Input from "./Input";
import FormButton from "./FormButton";
import Button from "./Button";
import classes from "./PhotoForm.module.css";
import { useDispatch } from "react-redux";
import { routerActions } from "../store";
export default function PhotoForm() {
    const dispatch=useDispatch();
  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <span onClick={dispatch(routerActions.gotoPage({url:"HOME",}))}>
          <img src="/back.png" alt="back"></img>
        </span>
        <h3>No images found in the album.</h3>
        <Button>Add image</Button>
      </div>
    </div>
  );
}
