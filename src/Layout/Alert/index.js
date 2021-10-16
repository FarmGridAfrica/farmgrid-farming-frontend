import { Toaster } from "react-hot-toast";

export const Alert = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // Define default options
        className: "toast",
        // style: {
        //   margin: "170px",
        //   background: "#fff",
        //   zIndex: 1,
        // },
        duration: 5000,
        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: "green",
          },
        },
        error: {
          duration: 4000,
        },
      }}
    />
  );
};
