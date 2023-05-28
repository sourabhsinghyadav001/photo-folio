import { onSnapshot, doc, updateDoc, deleteField } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebaseSettings";
import { imageGalleryActions, store } from "../store";
import classes from "./ImageGallery.module.css";
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import PhotoForm from "./PhotoForm";
import { toast } from "react-toastify";
import PhotoEditForm from "./PhotoEditForm";
import { Spinner } from "react-bootstrap";
export default function ImageGallery() {
  const [loading, setLoading] = useState(true);
  const albumName = store.getState().router.album;
  const [images, setImages] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [showCarousel, setShowCarousel] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const realImages = useSelector((state) => state.imageGallery);
  const [editImageUrl, editImageName] = [useRef(), useRef()];
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "PhotoFolio", albumName), (snapshot) => {
      const data = snapshot.data();
      delete data.id;
      setImages(data);
      dispatch(imageGalleryActions.setPhotos(data));
      setLoading(false);
    });
    return () => unsub();
  }, []);
  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, [searchOpen]);
  if (loading)
    return (
      <div style={{ textAlign: "center" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  return (
    <>
      {editOpen ? (
        <PhotoEditForm
          hasData={Object.keys(realImages).length > 0}
          setEditOpen={setEditOpen}
          imageNameProp={editImageName.current}
          imageUrlProp={editImageUrl.current}
        />
      ) : (
        <PhotoForm hasData={Object.keys(realImages).length > 0} />
      )}
      {showCarousel !== "" && (
        <Carousel
          name={showCarousel}
          images={images}
          setShowCarousel={setShowCarousel}
        />
      )}
      <div className={classes.searchbar}>
        {searchOpen ? (
          <span className={classes.flex}>
            <input
              className={classes.input}
              ref={searchRef}
              placeholder="Search..."
              onChange={() => {
                setImages(
                  Object.keys(realImages)
                    .filter((key) => key.includes(searchRef.current.value))
                    .reduce(
                      (acc, key) =>
                        Object.assign(acc, { [key]: realImages[key] }),
                      {}
                    )
                );
              }}
            />
            <img
              src="/clear.png"
              className={classes.cross}
              onClick={() => {
                setSearchOpen(false);
                setImages(store.getState().imageGallery);
              }}
            />
          </span>
        ) : (
          <img
            src="/search.png"
            className={classes.search}
            alt="search icon"
            onClick={() => {
              setSearchOpen(true);
            }}
          />
        )}
      </div>
      <div className={classes.container}>
        {Object.entries(images)
          .sort()
          .map(([imageName, imageUrl]) => (
            <div className={classes.image} key={imageName}>
              <img
                src={imageUrl}
                alt={imageName}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/warning.png";
                }}
                onClick={() => {
                  setShowCarousel(imageName);
                }}
                className={classes.actualImage}
              />

              <img
                src="/edit.png"
                className={classes.edit}
                onClick={() => {
                  editImageName.current = imageName;
                  editImageUrl.current = imageUrl;
                  setEditOpen(true);
                }}
              />
              <img
                src="/trash-bin.png"
                className={classes.trash}
                onClick={async () => {
                  try {
                    await updateDoc(doc(db, "PhotoFolio", albumName), {
                      [imageName]: deleteField(),
                    });
                    toast("Deleted Successfully");
                  } catch (err) {
                    toast("Something Went Wrong");
                  }
                }}
              />

              <span>{imageName}</span>
            </div>
          ))}
      </div>
    </>
  );
}
