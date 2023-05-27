import { useDispatch } from "react-redux";
import classes from "./Navbar.module.css";
import { routerActions } from "../store";
export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.container}
      onClick={() => {
        dispatch(routerActions.gotoPage("HOME"));
      }}
    >
      <img src="/logo.png" alt=""></img>
      <span className={classes.logo}>PhotoFolio</span>
    </div>
  );
}
