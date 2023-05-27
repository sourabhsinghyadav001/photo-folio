import classes from "./Input.module.css";
export default function Input({ required,place }) {
  return <input required={required} className={classes.input} />;
}
