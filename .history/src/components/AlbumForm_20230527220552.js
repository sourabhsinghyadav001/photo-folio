import { useState } from "react";
import classes from "./AlbumForm.module.css";
import Input from "./Input";
import Button from "./Button";
import FormButton from "./FormButton";
export default function AlbumForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [albumName,setAlbumName]=useState("");
  return (
    <div className={classes.container}>
      {isFormOpen && (
        <div className={classes.form}>
          <div className={classes.flex}>
            <Input placeholder="Album Name" value={albumName}/>
            <div>
              <FormButton variant="red" onClick={}>Clear</FormButton>
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
