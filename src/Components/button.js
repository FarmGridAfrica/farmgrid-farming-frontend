import React from "react";

export const SubmitBtn = ({ action, loading, text }) => {
  return (
    <>
      <button type="submit" onClick={action} className="btn">
        {loading ? (
          <img className="loader" src={"/img/referral/loader.gif"} alt=""></img>
        ) : text ? (
          text
        ) : (
          "submit"
        )}
      </button>
    </>
  );
};
