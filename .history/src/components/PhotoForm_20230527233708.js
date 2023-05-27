import Input from "./Input";
import FormButton from "./FormButton";
import Button from "./Button";
import classes from "./PhotoForm.module.css";
export default function PhotoForm() {
  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <span onc>
          <img src="/back.png" alt="back"></img>
        </span>
        <h3>No images found in the album.</h3>
        <Button>Add image</Button>
      </div>
    </div>
  );
}
