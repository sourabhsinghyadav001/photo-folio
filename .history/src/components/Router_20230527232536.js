import Navbar from "./Navbar";
import Gallery from "./Gallery";
import AlbumForm from "./AlbumForm";
export default function Router({ page: { url, album, image } }) {
  switch (url) {
    case "HOME":
      return (
        <>
          <Navbar />
          <AlbumForm />
          <Gallery />
        </>
      );
    case "INSIDE_ALBUM":
      return (
        <>
          <Navbar />
          <>
        </>
      );
  }
}
