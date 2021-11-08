import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getFarmsRequest } from "../../../redux/action";
import { InvestmentCard } from "../../../Components/cards";
import { DashboardNav, Navbar } from "../../../Components/navbar";

const Home = () => {
  const {
    getFarmsSuccess,
    farms,
    getFarmsError,
    getFarmsLoading,
    user,
    isLoggedIn,
  } = useSelector((state) => {
    const {
      success: { getFarms: getFarmsSuccess },
      errors: { getFarms: getFarmsError },
    } = state.ajaxStatuses;

    const { getFarmsLoading } = state.loadingIndicator;

    const { user, isLoggedIn } = state.userData;
    const { farms } = state.farmData;

    return {
      getFarmsSuccess,
      getFarmsError,
      getFarmsLoading,
      farms,
      isLoggedIn,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFarmsRequest());
  }, [getFarmsRequest]);

  useEffect(() => {
    if (getFarmsError) {
      toast.error(getFarmsError, {
        duration: 3000,
      });
    }
  }, [getFarmsError]);

  return (
    <div>
      {isLoggedIn ? <DashboardNav /> : <Navbar />}

      <section className="invest container">
        <h1 className="invest-heading">Farms</h1>

        {!getFarmsLoading && (
          <div className="collection">
            {farms.map((farm) => (
              <InvestmentCard farm={farm} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
