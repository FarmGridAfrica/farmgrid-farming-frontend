import React, { useEffect, useState } from "react";
import { DashboardNav } from "../../Components/navbar";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const Withdraw = () => {
  const history = useHistory();

  const delay = 3;

  const [show, setShow] = useState(false);

  const data = history.location.state.data;
  console.log(data);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setShow(true);
    }, delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

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

  const {
    getUserInvestmentsSuccess,
    investments,
    getUserInvestmentsError,
    getUserInvestmentsLoading,
    user,
    isLoggedIn,
    token,
  } = useSelector((state) => {
    const {
      success: { getUserInvestments: getUserInvestmentsSuccess },
      errors: { getUserInvestments: getUserInvestmentsError },
    } = state.ajaxStatuses;

    const { getUserInvestmentsLoading } = state.loadingIndicator;

    const { user, token, isLoggedIn } = state.userData;
    const { farms } = state.farmData;
    const { investments } = state.investmentData;

    return {
      getUserInvestmentsSuccess,
      getUserInvestmentsError,
      getUserInvestmentsLoading,
      investments,
      isLoggedIn,
      token,
      user,
    };
  });

  return (
    <div>
      <DashboardNav />

      <>
        <div className="container payment p-2 mt-3">
          <h3 className="font-20 text-start mb-1">
            Withdrawal request received, the account below will be credited
          </h3>
          <p className="font-22  text-start ">
            Account Name: {user.firstName} {user.lastName}
          </p>
          <p className="font-22  text-start">
            Account Number: {user.accountNumber}
          </p>
          <p className="font-22  text-start">Bank Name: {user.bankName}</p>
          <h3 className="font-20 text-start mt-1">
            Click on confirm button below after receiving credit
          </h3>
        </div>

        <div className="center-btn">
          <div onClick={onClick} className="btn-medium">
            {confirm ? (
              <CircularProgress color="black" size="20px" />
            ) : (
              "Confirm"
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default Withdraw;
