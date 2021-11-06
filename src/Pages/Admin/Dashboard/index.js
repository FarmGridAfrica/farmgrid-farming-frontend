import React, { useEffect, useState } from "react";
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

const Dashboard = () => {
  const [accountBalance, setAccountBalance] = useState(0);
  const [accountBalanceLoading, setAccountBalanceLoading] = useState(false);
  const [activeAddress, setActiveAddress] = useState("");
  const [activeAddressLoading, setActiveAddressLoading] = useState(false);

  useEffect(async () => {
    getAccountBalance(setAccountBalance, setAccountBalanceLoading);
    getMyAddress(setActiveAddress, setActiveAddressLoading);

    const activeAddress = await myAddress();
    setActiveAddress(activeAddress);
  }, [getWalletBalance, getMyAddress]);

  const fund = async (amountToFund) => {
    await sendFunds(amountToFund, () => {
      getWalletBalance(setAccountBalance, setAccountBalanceLoading);
    });
    // setAmountToFund('0')
  };

  return (
    <div>
      <AdminNav />
      <div className="container">
        <h3 className="my-3 font-weight-normal font-22">
          Custodian Wallet Address: {activeAddress}
        </h3>
      </div>

      <div className="container admin-dashboard">
        <div className="balance">
          <div className="card wallet-balance">
            <h3>Wallet Balance</h3>
            <h3>{accountBalance} BUSD</h3>
          </div>

          <div className="card invested-balance">
            <h3>Total Invested Balance</h3>
            <h3>₦20000</h3>
          </div>
          <div className="card wallet-balance">
            <h3>Wallet Balance</h3>
            <h3>₦70000</h3>
          </div>
        </div>
        <div>
          <FundWalletForm fund={fund} />
          <DepositeForm />
          <WithdrawalForm />
        </div>
      </div>
      <div className="container">
        <h2> Admin container history</h2>
      </div>
    </div>
  );
};

export default Dashboard;
