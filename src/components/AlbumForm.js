import { useState } from "react";
import classes from "./AlbumForm.module.css";
import Input from "./Input";
import Button from "./Button";
import FormButton from "./FormButton";
import { toast } from "react-toastify";
import { db } from "../firebaseSettings";
import { store } from "../store";
import { setDoc, doc } from "firebase/firestore";

export default function AlbumForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [albumName, setAlbumName] = useState("");
  return (
    <div className={classes.container}>
      {isFormOpen && (
        <div className={classes.form}>
          <div className={classes.createAnAlbum}>Create an album</div>
          <div className={classes.flex}>
            <Input
              placeholder="Album Name"
              value={albumName}
              onChange={(event) => {
                setAlbumName(event.target.value);
              }}
            />
            <div>
              <FormButton
                variant="red"
                onClick={() => {
                  setAlbumName("");
                }}
              >
                Clear
              </FormButton>
              <FormButton
                onClick={async () => {
                  try {
                    if (
                      store
                        .getState()
                        .gallery.find((e) => e.id === albumName) !== undefined
                    )
                      toast("Album Name Already There");
                    else {
                      await setDoc(doc(db, "PhotoFolio", albumName), {
                        id: albumName,
                      });
                      toast("Added album successfully");
                    }
                  } catch (err) {
                    toast("Something went wrong");
                  }
                }}
              >
                Create
              </FormButton>
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
