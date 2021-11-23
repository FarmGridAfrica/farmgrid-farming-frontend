import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getInvestmentsRequest } from "../../../../redux/action";
import { AdminNav, DashboardNav } from "../../../../Components/navbar";
import { useHistory } from "react-router";
import CurrencyFormat from "react-currency-format";
import { CircularProgress } from "@material-ui/core";

const Investments = () => {
  const history = useHistory();

  const {
    getInvestmentsSuccess,
    investments,
    getInvestmentsError,
    getInvestmentsLoading,
    user,
    isLoggedIn,
    token,
  } = useSelector((state) => {
    const {
      success: { getInvestments: getInvestmentsSuccess },
      errors: { getInvestments: getInvestmentsError },
    } = state.ajaxStatuses;

    const { getInvestmentsLoading } = state.loadingIndicator;

    const { user, token, isLoggedIn } = state.userData;
    const { farms } = state.farmData;
    const { investments } = state.investmentData;

    return {
      getInvestmentsSuccess,
      getInvestmentsError,
      getInvestmentsLoading,
      investments,
      isLoggedIn,
      token,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvestmentsRequest(token));
  }, [getInvestmentsRequest]);

  const [invmLength, setInvmLength] = useState(0);

  useEffect(() => {
    if (getInvestmentsError) {
      toast.error(getInvestmentsError, {
        duration: 3000,
      });
    }

    if (!getInvestmentsLoading) {
      const invesmentLength = investments.length - 1;
      setInvmLength(invesmentLength);
    }
  }, [getInvestmentsError]);

  const openInvestemt = (_) => {
    history.replace(`/admin/farms/${_._id}`);
  };

  return (
    <div>
      <AdminNav />
      <section className="container">
        <h1 className="invest-heading">Farms</h1>

        {getInvestmentsLoading ? (
          <div style={{ marginTop: "300px" }} className="text-center">
            <CircularProgress color="success" size="20px" />
          </div>
        ) : (
          <div className="investemt-table mb-5">
            <table id="customers">
              <thead>
                <tr>
                  <th>Farm</th>
                  <th>Amount</th>
                  <th>Expected Return</th>
                  <th>APY%</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {investments.map((_, index) => (
                  <tr
                    className={invmLength == index ? "last-child" : ""}
                    key={index}
                  >
                    <td>{_.farm.farmName}</td>
                    <td>
                      <CurrencyFormat
                        value={_.amount}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      (
                      <CurrencyFormat
                        value={_.dollarEquivalent}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={`$`}
                      />
                      )
                    </td>
                    <td>
                      <CurrencyFormat
                        value={_.expectedReturn}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      (
                      <CurrencyFormat
                        value={_.expectedReturnDollar}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={`$`}
                      />
                      )
                    </td>
                    <td>{_.farm.annualPercentageYield}%</td>
                    <td>
                      <div
                        className={
                          _.status == "Active"
                            ? "table-btn-active"
                            : "table-btn-pending"
                        }
                      >
                        {_.status}
                      </div>
                    </td>
                    <td>
                      <div
                        onClick={() => openInvestemt(_)}
                        className="table-btn-active"
                      >
                        View
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default Investments;
