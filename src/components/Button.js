import classes from "./Button.module.css";
export default function Button({ variant, children, ...props }) {
  return (
    <button className={`${classes.button} ${classes[variant]}`} {...props}>
      {children}
    </button>
  );
}
