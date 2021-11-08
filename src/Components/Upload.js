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
  const [url, setUrl] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const types = ["image/png", "image/jpeg"];

  const inputFileRef = useRef(null);

  const changeHandle = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setUrl(URL.createObjectURL(selected));
      fileUpload(selected, setUploadUrl, formik, setProgress);

      setError("");
    } else {
      setFile(null);
      setError("Please select an Image file(png or jpeg)");
    }
  };

  return (
    <div className="upload my-1">
      <div className="display-grid-2">
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
        <div className="upload-progress">progress: {progress}%</div>
      </div>
      {error && <div className="my-1 text-danger">{error}</div>}
      {uploadUrl && <img className="my-1" src={uploadUrl} />}
    </div>
  );
};

const fileUpload = async (file, setUploadUrl, formik, setProgress) => {
  const storage = getStorage();

  const storageRef = sRef(storage, "image/" + file.name);

  const uploadTask = uploadBytesResumable(storageRef, file);

  let imgUrl = "";
  let progress = "";
  let error;

  uploadTask.on(
    "state-change",
    (snap) => {
      progress = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
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

      formik.setFieldValue("photo", imgUrl);

      console.log(imgUrl);
    }
  );
};
