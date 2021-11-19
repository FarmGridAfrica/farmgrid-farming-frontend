import React from "react";
import { CircularProgress } from "@material-ui/core";

export const SubmitBtn = ({ action, loading, text }) => {
  return (
    <>
      <button type="submit" onClick={action} className="btn">
        {loading ? (
          <div className="text-center">
            <CircularProgress color="black" size="20px" />
          </div>
        ) : text ? (
          text
        ) : (
          "submit"
        )}
      </button>
    </>
  );
};
