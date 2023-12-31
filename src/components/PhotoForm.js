import Input from "./Input";
import FormButton from "./FormButton";
import Button from "./Button";
import classes from "./PhotoForm.module.css";
import { useDispatch } from "react-redux";
import { routerActions, store } from "../store";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebaseSettings";
import { toast } from "react-toastify";
export default function PhotoForm({ hasData }) {
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [imageTitle, setImageTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const albumName = store.getState().router.album;

  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <span
          onClick={() =>
            dispatch(routerActions.gotoPage({ url: "HOME", album: "" }))
          }
        >
          <img src="/back.png" alt="back"></img>
        </span>
        <h3>
          {hasData ? `Images in ${albumName}` : "No images found in the album."}
        </h3>
        {isFormOpen ? (
          <Button
            variant="red"
            onClick={() => {
              setIsFormOpen(false);
            }}
          >
            Cancel
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsFormOpen(true);
            }}
          >
            Add image
          </Button>
        )}
      </div>
      {isFormOpen && (
        <div className={classes.form}>
          <div className={classes.banner}>Add photo to {albumName}</div>
          <Input
            placeholder="Title"
            variant="width100"
            value={imageTitle}
            onChange={(event) => {
              setImageTitle(event.target.value);
            }}
          />
          <Input
            placeholder="Image URL"
            variant="width100"
            value={imageUrl}
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
          <div style={{ textAlign: "center" }}>
            <FormButton
              variant="red"
              onClick={() => {
                setImageTitle("");
                setImageUrl("");
              }}
            >
              Clear
            </FormButton>
            <FormButton
              onClick={async () => {
                try {
                  if (
                    Object.keys(store.getState().imageGallery).find(
                      (e) => e === imageTitle
                    ) === undefined
                  ) {
                    await setDoc(
                      doc(db, "PhotoFolio", albumName),
                      { [imageTitle]: imageUrl },
                      { merge: true }
                    );
                    toast("Added pic successfully");
                  } else toast("The name already exists");
                } catch (err) {
                  toast("Something went wrong!");
                }
              }}
            >
              Add
            </FormButton>
          </div>
        </div>
      )}
    </div>
  );
}
