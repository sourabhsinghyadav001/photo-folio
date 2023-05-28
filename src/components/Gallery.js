import { useEffect, useState } from "react";
import { db } from "../firebaseSettings";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { galleryActions, routerActions } from "../store";
import { Spinner } from "react-bootstrap";
import classes from "./Gallery.module.css";

export default function Gallery() {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "PhotoFolio"), (snapshot) => {
      dispatch(
        galleryActions.setGallery(
          snapshot.docs.map((data) => ({ id: data.id, ...data.data() }))
        )
      );
      setLoading(false);
    });
    return () => unsub();
  }, []);
  if (loading)
    return (
      <div style={{ textAlign: "center" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  return (
    <div className={classes.container}>
      {gallery.map((data) => (
        <div
          key={data.id}
          className={classes.albumContainer}
          onClick={() => {
            dispatch(
              routerActions.gotoPage({ url: "INSIDE_ALBUM", album: data.id })
            );
          }}
        >
          <img src="/photos.png" alt="image placeholder" />
          <span>{data.id}</span>
        </div>
      ))}
    </div>
  );
}
