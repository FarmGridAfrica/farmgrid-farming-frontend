import React, { useState } from "react";
import toast from "react-hot-toast";
import { UploadForm } from "./Upload";
import { CircularProgress } from "@material-ui/core";

export const DepositeForm = ({ makeMyDeposite, loading }) => {
  const [amount, setAmount] = useState("0");

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(amount) > 1000) {
      toast.error("Above set fundable value", { duration: 3000 });
    } else {
      makeMyDeposite(amount);
    }
  };

  return (
    <div className="showcase-form mb-2 card">
      <div>
        <h3>Deposite</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-control">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
            />
          </div>

          <div>
            <button type="submit" className="btn">
              {loading ? (
                <div className="text-center">
                  <CircularProgress color="success" size="20px" />
                </div>
              ) : (
                "Deposite"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export const FundWalletForm = ({ fund }) => {
  const [amountToFund, setAmountToFund] = useState("0");

  const onSubmit = (e) => {
    e.preventDefault();
    fund(amountToFund);
  };

  return (
    <div className="showcase-form mb-2 card">
      <div>
        <h3>Fund Wallet</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-control">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={amountToFund}
              onChange={(e) => setAmountToFund(e.target.value)}
              placeholder="Amount"
              required
            />
          </div>

          <div>
            <button className="btn">
              {false ? (
                <img
                  className="loader"
                  src={"/img/referral/loader.gif"}
                  alt=""
                ></img>
              ) : (
                "Fund"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const WithdrawalForm = ({ makeMyWithdrawal, loading }) => {
  const [amount, setAmount] = useState("0");

  const onSubmit = (e) => {
    e.preventDefault();
    makeMyWithdrawal(amount);
  };

  return (
    <div className="showcase-form withdrawal-form card">
      <div>
        <h3>Withdraw</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-control">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
            />
          </div>

          <div>
            <button type="submit" className="btn">
              {loading ? (
                <div className="text-center">
                  <CircularProgress color="success" size="20px" />
                </div>
              ) : (
                "Withdraw"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const AddFarmForm = () => {
  return (
    <div className="showcase-form mt-3 card">
      <div className="my-2">
        <h3>Add farm</h3>
        <form>
          <div className="form-control"></div>
          <div className="form-control">
            <label>Name</label>
            <input
              type="number"
              name="telegramUsername"
              placeholder="Amount"
              required
            />
          </div>
          <UploadForm />
          <div className="form-control">
            <label>Description</label>
            <textarea type="text" name="telegramUsername" required />
          </div>
          <div className="form-control">
            <label>Start Date</label>
            <input
              type="date"
              name="telegramUsername"
              placeholder="Amount"
              required
            />
          </div>
          <div className="form-control">
            <label>End Date</label>
            <input
              type="date"
              name="telegramUsername"
              placeholder="Amount"
              required
            />
          </div>

          <div>
            <button type="submit" className="btn">
              {false ? (
                <img
                  className="loader"
                  src={"/img/referral/loader.gif"}
                  alt=""
                ></img>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
