import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getUserInvestmentsRequest,
  putInvestmentRequest,
} from "../../../redux/action";
import { DashboardNav } from "../../../Components/navbar";
import { useHistory } from "react-router";
import { io } from "socket.io-client";
import CurrencyFormat from "react-currency-format";
import { CircularProgress } from "@material-ui/core";
import { BASE_URL, BASE_URL_SOCKET } from "../../../redux/sagas/axios";

const Home = () => {
  const history = useHistory();
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

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/auth/login");
    }
  }, [isLoggedIn]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInvestmentsRequest(token));
  }, [getUserInvestmentsRequest]);

  const [invmLength, setInvmLength] = useState(0);

  useEffect(() => {
    if (getUserInvestmentsError) {
      toast.error(getUserInvestmentsError, {
        duration: 3000,
      });
    }

    if (!getUserInvestmentsLoading) {
      const invesmentLength = investments.length - 1;
      setInvmLength(invesmentLength);
    }
  }, [getUserInvestmentsError]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io(BASE_URL_SOCKET);
  }, []);

  const withdrawal = (_) => {
    // let formData = { status: "Withdrawn" };
    // dispatch(putInvestmentRequest({ formData, id: _._id }));
    toast.success("Withdrawal Request Sent", {
      duration: 3000,
    });

    socket.current.emit("Withdrawal_request", { id: _._id });

    history.push({
      pathname: "/withdraw",
      state: { data: _ },
    });
  };

  const [amount, setAmount] = useState("");

  return (
    <div>
      <DashboardNav />
      <section className="container">
        <h1 className="invest-heading">My Farms</h1>

        {getUserInvestmentsLoading ? (
          <div style={{ marginTop: "300px" }} className="text-center">
            <CircularProgress color="success" size="20px" />
          </div>
        ) : (
          <div className="investemt-table">
            <table id="customers">
              <thead>
                <tr>
                  <th>Farm</th>
                  <th>Amount</th>
                  <th>Expected Return</th>
                  <th>APY%</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {investments.map((_, index) => (
                  <tr
                    className={invmLength == index && "last-child"}
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
                    <td>{_.farm.duration} months</td>
                    <td>
                      {_.status == "Active" && (
                        <div className={"table-btn-active"}>{_.status} </div>
                      )}
                      {_.status == "Withdrawn" && (
                        <div className={"table-btn-pending"}>{_.status}</div>
                      )}
                      {_.status == "Completed" && (
                        <div className={"table-btn-pending"}>{_.status}</div>
                      )}
                    </td>

                    {_.status == "Completed" && (
                      <td>
                        {}
                        <div
                          onClick={() => withdrawal(_)}
                          className="table-btn-active"
                        >
                          Withdraw
                        </div>
                      </td>
                    )}
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

export default Home;
