import { useEffect } from "react";
import { db } from "../firebaseSettings";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { galleryActions } from "../store";
import classes from "./Gallery.module.css";
export default function Gallery() {
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "PhotoFolio"), (snapshot) => {
      dispatch(
        galleryActions.setGallery(
          snapshot.docs.map((data) => ({ id: data.id, ...data.data() }))
        )
      );
    });
  }, []);
  return (
    <div>
      {gallery.map((data) => (
        <div key={data.id} className={classes.albumContainer}>
          <img src="/photos.png"  alt="images"/>
          <span>{data.id}</span>
        </div>
      ))}
    </div>
  );
}
