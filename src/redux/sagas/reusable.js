// import axios from "./axios";
export const clientErrorMessage =
  "Could not send request. Kindly check your internet connection";

export const delay = (time = 4000) =>
  new Promise((resolve) => setTimeout(resolve, time));

// export const sendMediaToDoc = async ({ file }) => {
//   const newFile = { verify_image: file };

//   const formData = new FormData();
//   Object.keys(newFile).forEach((key) => {
//     formData.append(`${key}`, newFile[key]);
//   });
//   const response = await axios.post(`/onboarding/upload-doc`, formData, {
//     headers: {
//       // "Content-Type": `${file.type}`,
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response;
// };
