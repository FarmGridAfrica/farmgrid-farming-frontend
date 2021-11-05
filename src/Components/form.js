import React from "react";

export const DepositeForm = () => {
  return (
    <div className="showcase-form card">
      <div>
        <h3>Deposite</h3>
        <form>
          <div className="form-control">
            <label>Amount</label>
            <input
              type="text"
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

export const WithdrawalForm = () => {
  return (
    <div className="showcase-form withdrawal-form card">
      <div>
        <h3>Withdraw</h3>
        <form>
          <div className="form-control">
            <label>Amount</label>
            <input
              type="text"
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
