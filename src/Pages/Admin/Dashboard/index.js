import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  DepositeForm,
  FundWalletForm,
  InvestmentForm,
  WithdrawalForm,
} from "../../../Components/form";
import { AdminNav } from "../../../Components/navbar";
import {
  getMyAccountBalance,
  myAddress,
  flexibleInfo,
  makeDeposit,
  doWithdraw,
  getWalletBalance,
} from "../../../sdk/index.js";
import { getAccountBalance, getMyAddress } from "../../../sdk/sdkactions";
import { sendFunds } from "../../../sdk/sendFund";
import { CircularProgress } from "@material-ui/core";

const Dashboard = () => {
  const [accountBalance, setAccountBalance] = useState(0);
  const [accountBalanceLoading, setAccountBalanceLoading] = useState(false);
  const [activeAddress, setActiveAddress] = useState("");
  const [activeAddressLoading, setActiveAddressLoading] = useState(false);
  const [getInfoLoading, setGetInfoLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [withloading, setWithLoading] = useState(false);

  const [xendBalance, setXendBalance] = useState(0);
  const [xendSharedBalance, setXendSharedBalance] = useState(0);
  const [xresponse, setXresponse] = useState({});

  useEffect(async () => {
    getAccountBalance(setAccountBalance, setAccountBalanceLoading);
    getMyAddress(setActiveAddress, setActiveAddressLoading);

    getInfo();

    const activeAddress = await myAddress();
    setActiveAddress(activeAddress);
  }, [getWalletBalance, getMyAddress, xresponse]);

  // const fund = async (amountToFund) => {
  //   await sendFunds(amountToFund, () => {
  //     getAccountBalance(setAccountBalance, setAccountBalanceLoading);
  //   });
  //   // setAmountToFund("0");
  // };

  const getInfo = async () => {
    setGetInfoLoading(true);
    const x = await flexibleInfo();
    if (x && Object.keys(x).length > 0) {
      setXendBalance(x.balance);
      setXendSharedBalance(x.shareBalance);
      setGetInfoLoading(false);
    }

    setGetInfoLoading(false);
  };

  const makeMyDeposite = async (amount) => {
    setLoading(true);
    const response = await makeDeposit(amount);
    setXresponse(response);
    setLoading(false);
  };

  const makeMyWithdrawal = async (amount) => {
    setWithLoading(true);
    const response = await doWithdraw(amount);
    setXresponse(response);
    setWithLoading(false);
  };

  useEffect(() => {
    if (xresponse && Object.keys(xresponse).length > 0) {
      if (!xresponse.status) {
        toast.error(xresponse.data.message, { duration: 3000 });
      }
      if (xresponse.status) {
        toast.success("Successful", { duration: 3000 });
      }
    }
  }, [xresponse]);

  return (
    <div>
      <AdminNav />
      <div className="container ">
        <div className="card p-1 my-2">
          {activeAddressLoading ? (
            <div className=" text-center">
              <CircularProgress color="success" size="20px" />
            </div>
          ) : (
            <>
              <h3 className="font-20" style={{ overflow: "hidden" }}>
                Custodian Wallet Address:{" "}
                <span className="font-weight-normal font-20">
                  {activeAddress}
                </span>
              </h3>
            </>
          )}
        </div>
      </div>

      <div className="container admin-dashboard">
        <div className="balance mb-2">
          <div className="card wallet-balance">
            {accountBalanceLoading ? (
              <div className=" text-center mt-2">
                <CircularProgress color="success" size="20px" />
              </div>
            ) : (
              <>
                {" "}
                <h3 className="font-weight-normal">Wallet Balance</h3>
                <h3 className="font-weight-normal">{accountBalance} BUSD</h3>
              </>
            )}
          </div>

          <div className="card invested-balance my-1">
            {getInfoLoading ? (
              <div className=" text-center mt-2">
                <CircularProgress color="success" size="20px" />
              </div>
            ) : (
              <>
                <h3 className="font-weight-normal">Xend Savings Balance</h3>
                <h3 className="font-weight-normal">{xendBalance} BUSD</h3>
              </>
            )}
          </div>
          <div className="card wallet-balance">
            {getInfoLoading ? (
              <div className=" text-center mt-2">
                <CircularProgress color="success" size="20px" />
              </div>
            ) : (
              <>
                <h3 className="font-weight-normal">Xend Shared Balance</h3>
                <h3 className="font-weight-normal">
                  {xendSharedBalance} VBUSD
                </h3>
              </>
            )}
          </div>
        </div>
        <div className="mb-2">
          {/* <FundWalletForm fund={fund} /> */}
          <DepositeForm makeMyDeposite={makeMyDeposite} loading={loading} />
          <WithdrawalForm
            makeMyWithdrawal={makeMyWithdrawal}
            loading={withloading}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
