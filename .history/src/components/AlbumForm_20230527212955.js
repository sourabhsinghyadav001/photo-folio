import { useState } from "react";
import classes from "./AlbumForm.module.css";
import Input from "./Input";
export default function AlbumForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      {isFormOpen && <div></div>}
      <div className={classes.display}>
        <span>Your Albums</span>
        <button>Add
      </div>
    </>
  );
}
