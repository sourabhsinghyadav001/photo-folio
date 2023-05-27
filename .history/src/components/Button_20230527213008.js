import classes from "./Button.module.css";
export default function Button({ variant ,children}) {
  return <button className={`${classes.button} ${classes[variant]}`}></button>;
}
