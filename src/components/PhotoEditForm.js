import Input from "./Input";
import FormButton from "./FormButton";
import Button from "./Button";
import classes from "./PhotoForm.module.css";
import { useDispatch } from "react-redux";
import { routerActions, store } from "../store";
import { useState } from "react";
import { setDoc, doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../firebaseSettings";
import { toast } from "react-toastify";
export default function PhotoEditForm({
  hasData,
  setEditOpen,
  imageNameProp,
  imageUrlProp,
}) {
  const dispatch = useDispatch();
  const [imageTitle, setImageTitle] = useState(imageNameProp);
  const [imageUrl, setImageUrl] = useState(imageUrlProp);
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

        <Button
          variant="red"
          onClick={() => {
            setEditOpen(false);
          }}
        >
          Cancel
        </Button>
      </div>

      <div className={classes.form}>
        <div className={classes.banner}>Edit photo in {albumName}</div>
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
                  await updateDoc(doc(db, "PhotoFolio", albumName), {
                    [imageNameProp]: deleteField(),
                  });
                  await setDoc(
                    doc(db, "PhotoFolio", albumName),
                    { [imageTitle]: imageUrl },
                    { merge: true }
                  );
                  toast("Edited pic successfully");
                } else toast("The name already exists");
              } catch (err) {
                toast("Something went wrong!");
              }
            }}
          >
            Update
          </FormButton>
        </div>
      </div>
    </div>
  );
}
