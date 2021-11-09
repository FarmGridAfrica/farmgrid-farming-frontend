import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getInvestmentsRequest } from "../../../../redux/action";
import { AdminNav, DashboardNav } from "../../../../Components/navbar";
import { useHistory } from "react-router";

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
    history.replace(`/admin/investment/${_._id}`);
  };

  return (
    <div>
      <AdminNav />
      <section className="container">
        <h1 className="invest-heading">My Farms</h1>

        {!getInvestmentsLoading && (
          <div className="investemt-table">
            <table id="customers">
              <thead>
                <tr>
                  <th>Farm</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>ROI%</th>
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
                    <td>13-01-2022</td>
                    <td>13-03-2022</td>
                    <td>{_.farm.returnOfInvestment}%</td>
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
