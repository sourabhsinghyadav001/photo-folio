import { useState } from "react";
import classes from "./AlbumForm.module.css";
import Input from "./Input";
import Button from "./Button";
import FormButton from "./FormButton";
export default function AlbumForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className={classes.container}>
      {isFormOpen && (
        <div className={classes.form}>
          <div>
            <Input placeholder="Album Name" />
            <FormButton variant="red">Clear</FormButton>
            <FormButton>Create</FormButton>
          </div>
        </div>
      )}
      <div className={classes.display}>
        <span>Your Albums</span>
        {isFormOpen ? (
          <Button onClick={() => setIsFormOpen(false)} variant={}>cancel</Button>
        ) : (
          <Button onClick={() => setIsFormOpen(true)}>Add Album</Button>
        )}
      </div>
    </div>
  );
}
