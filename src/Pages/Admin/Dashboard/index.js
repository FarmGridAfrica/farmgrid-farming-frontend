import React from "react";
import {
  DepositeForm,
  InvestmentForm,
  WithdrawalForm,
} from "../../../Components/form";
import { AdminNav } from "../../../Components/navbar";

const Dashboard = () => {
  return (
    <div>
      <AdminNav />
      <div className="container admin-dashboard">
        <div className="balance">
          <div className="card wallet-balance">
            <h3>Wallet Balance</h3>
            <h3>₦70000</h3>
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
        <div className="dashboard-forms">
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
