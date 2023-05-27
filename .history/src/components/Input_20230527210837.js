import classes from "./Input.module.css";
export default function Input({ required }) {
  return <input required={required} className={classes.input} />;
}
