import { useState } from "react";
import classes from "./AlbumForm.module.css";
import Input from "./Input";
import Button from "./Button";
export default function AlbumForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      {isFormOpen && <div><Input></Input></div>}
      <div className={classes.display}>
        <span>Your Albums</span>
        <Button>Add Album</Button>
      </div>
    </>
  );
}
