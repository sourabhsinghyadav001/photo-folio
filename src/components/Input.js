import classes from "./Input.module.css";
export default function Input({ required, placeholder, variant, ...props }) {
  return (
    <input
      required={required}
      className={`${classes.input} ${classes[variant]}`}
      placeholder={placeholder}
      {...props}
    />
  );
}
