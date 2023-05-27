import classes from "./Input.module.css";
export default function Input({ required, placeholder, ...props }) {
  return (
    <input
      required={required}
      className={`classes.input`}
      placeholder={placeholder}
      {...props}
    />
  );
}
