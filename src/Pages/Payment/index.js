import React from "react";
import { DashboardNav } from "../../Components/navbar";

const Payment = () => {
  return (
    <div>
      <DashboardNav />
      <div className="container payment p-2 mt-3">
        <h3 className="font-20 text-start mb-1">
          Proceed to make payment to the bank account provided below
        </h3>
        <p className="font-22  text-start ">Account Name: Martin Nello</p>
        <p className="font-22  text-start">Account Number: 0085537210</p>
        <p className="font-22  text-start">Bank Name: Bank of africa</p>
        <h3 className="font-20 text-start mt-1">
          Click on confirm button below after making payment
        </h3>
      </div>

      <div className="center-btn">
        <div className="btn-medium">
          {false ? (
            <img
              className="loader"
              src={"/img/referral/loader.gif"}
              alt=""
            ></img>
          ) : (
            "Confirm"
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
