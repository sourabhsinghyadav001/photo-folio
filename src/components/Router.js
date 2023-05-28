import Navbar from "./Navbar";
import Gallery from "./Gallery";
import AlbumForm from "./AlbumForm";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./ImageGallery";
import { useEffect } from "react";

export default function Router({ page: { url, album, image } }) {
  useEffect(() => (document.title = "PhotoFolio"), []);
  switch (url) {
    case "HOME":
      return (
        <>
          <ToastContainer />
          <Navbar />
          <AlbumForm />
          <Gallery />
        </>
      );
    case "INSIDE_ALBUM":
      return (
        <>
          <ToastContainer />
          <Navbar />
          <ImageGallery />
        </>
      );
  }
}
