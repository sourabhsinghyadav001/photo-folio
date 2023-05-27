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
          <div className={classes.flex}>
            <Input placeholder="Album Name" />
            <div>
              <FormButton variant="red">Clear</FormButton>
              <FormButton>Create</FormButton>
            </div>
          </div>
        </div>
      )}
      <div className={classes.display}>
        <span>Your Albums</span>
        {isFormOpen ? (
          <Button onClick={() => setIsFormOpen(false)} variant="red">
            cancel
          </Button>
        ) : (
          <Button onClick={() => setIsFormOpen(true)}>Add Album</Button>
        )}
      </div>
    </div>
  );
}
