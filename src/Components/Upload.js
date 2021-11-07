import { useState, useRef } from "react";
import {
  getStorage,
  sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "../firebase/config";

export const UploadForm = ({ formik }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState([]);
  const [uploadUrl, setUploadUrl] = useState("");
  const [progress, setProgress] = useState("");

  const types = ["image/png", "image/jpeg"];

  const inputFileRef = useRef(null);

  const changeHandle = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setUrl(URL.createObjectURL(selected));
      // fileUpload(selected, setUploadUrl, setProgress);

      setError("");
    } else {
      setFile(null);
      setError("Please select an Image file(png or jpeg)");
    }
  };

  return (
    <div className="upload">
      <input
        type="file"
        accept={types.join(",")}
        ref={inputFileRef}
        onChange={(e) => changeHandle(e)}
      />

      <div
        onClick={() => {
          inputFileRef.current.click();
        }}
        className="upload-btn"
      >
        Upload Image
      </div>

      {error && <div className="my-1 text-danger">{error}</div>}
      <img o className="my-1" src={url} alt="" />
    </div>
  );
};

const fileUpload = async (file, setUploadUrl, setProgress) => {
  const storage = getStorage();

  const storageRef = sRef(storage, "image/" + file.name);

  const uploadTask = uploadBytesResumable(storageRef, file);

  let imgUrl = "";
  let progress = "";
  let error;

  uploadTask.on(
    "state-change",
    (snap) => {
      progress = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(progress);
      console.log(progress);
    },
    (err) => {
      error = "Image not uploaded";
      console.log("Image not uploaded");
    },
    async () => {
      imgUrl = await getDownloadURL(uploadTask.snapshot.ref);

      setUploadUrl(imgUrl);

      console.log(imgUrl);
    }
  );

  return { imgUrl, progress, error };
};
