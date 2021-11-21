import React, { useEffect, useState } from "react";
import { DashboardNav } from "../../Components/navbar";
import toast from "react-hot-toast";
import { useHistory } from "react-router";

const Payment = () => {
  const history = useHistory();

  const delay = 3;

  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  const [confirm, setConfirm] = useState(false);

  const onClick = () => {
    setConfirm(!confirm);

    let timer2 = setTimeout(() => {
      setConfirm(false);
      toast.success("Payment confirmed", {
        duration: 3000,
      });
      history.replace("/dashboard");
    }, delay * 1000);

    return () => {
      clearTimeout(timer2);
    };
  };

  return (
    <div>
      <DashboardNav />
      {show ? (
        <>
          <div className="container payment p-2 m-3">
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
            <div onClick={() => onClick()} className="btn-medium">
              {confirm ? (
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
        </>
      ) : (
        <div className="container">
          <div className="on-screen-spinner">
            <img
              className="loader"
              src={"/img/spinner/spinner.gif"}
              alt=""
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
