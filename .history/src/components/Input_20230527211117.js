import classes from "./Input.module.css";
export default function Input({ required, placeholder }) {
  return <input required={required} className={classes.input} placeholder={    border: 3px solid transparent;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: 300;
    outline: none;
    padding: 10px 10px 10px 15px;
    transition: .3s;} />;
}
