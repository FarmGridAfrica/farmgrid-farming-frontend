import React, { useState } from "react";

export const DepositeForm = () => {
  return (
    <div className="showcase-form mb-2 card">
      <div>
        <h3>Deposite</h3>
        <form>
          <div className="form-control">
            <label>Amount</label>
            <input
              type="number"
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
                "Invest"
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

  return (
    <div className="showcase-form mb-2 card">
      <div>
        <h3>Fund Wallet</h3>
        <form>
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
            <button onClick={() => fund(amountToFund)} className="btn">
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

export const WithdrawalForm = () => {
  return (
    <div className="showcase-form withdrawal-form card">
      <div>
        <h3>Withdraw</h3>
        <form>
          <div className="form-control">
            <label>Amount</label>
            <input
              type="number"
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
                "Withdraw"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
