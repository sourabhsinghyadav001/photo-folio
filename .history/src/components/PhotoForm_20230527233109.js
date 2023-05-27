import Input from "./Input";
import FormButton from "./FormButton";
import Button from "./Button";
import classes from "./PhotoForm.module.css";
export default function PhotoForm() {
  return (
    <>
      <div className={classes.bar}>
        <span></span>
        <img src="/back.png" alt="back"></img>
      </div>
    </>
  );
}
