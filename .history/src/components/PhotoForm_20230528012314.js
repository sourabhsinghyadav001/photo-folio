import Input from "./Input";
import FormButton from "./FormButton";
import Button from "./Button";
import classes from "./PhotoForm.module.css";
import { useDispatch } from "react-redux";
import { routerActions, store } from "../store";
import { useState } from "react";
export default function PhotoForm() {
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [imageTitle, setImageTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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
        <h3>No images found in the album.</h3>
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
          <div className={classes.banner}>
            Add photo to {store.getState().router.album}
          </div>
          <Input placeholder="Title" variant="width100"  value={ti}/>
          <Input placeholder="Image URL" variant="width100" />
          <div style={{ textAlign: "center" }}>
            <FormButton variant="red">Clear</FormButton>
            <FormButton>Add</FormButton>
          </div>
        </div>
      )}
    </div>
  );
}
