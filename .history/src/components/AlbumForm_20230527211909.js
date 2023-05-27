import { useState } from "react";
import Input from "./Input";
export default function AlbumForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      {isFormOpen && <div></div>}
      <div>
        <span>Your Albums</span>
        
      </div>
    </>
  );
}
