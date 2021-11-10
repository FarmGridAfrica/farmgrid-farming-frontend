import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { InvestmentCard, ProductCard } from "../../../Components/cards";
import {
  getFarmRequest,
  postCreateInvestmentRequest,
  clearPostCreateInvestmentSuccess,
} from "../../../redux/action";
import { DashboardNav, Navbar } from "../../../Components/navbar";
import { Link, useParams, useHistory } from "react-router-dom";

const SingleFarm = () => {
  let { id } = useParams();

  const {
    getFarmSuccess,
    postCreateInvestmentError,
    farm,
    getFarmError,
    getFarmLoading,
    user,
    isLoggedIn,
    postCreateInvestmentSuccess,
    postCreateInvestmentLoading,
  } = useSelector((state) => {
    const {
      success: {
        getFarm: getFarmSuccess,
        postCreateInvestment: postCreateInvestmentSuccess,
      },
      errors: {
        getFarm: getFarmError,
        postCreateInvestment: postCreateInvestmentError,
      },
    } = state.ajaxStatuses;

    const { getFarmLoading, postCreateInvestmentLoading } =
      state.loadingIndicator;

    const { user, isLoggedIn } = state.userData;
    const { farm } = state.farmData;

    return {
      postCreateInvestmentSuccess,
      postCreateInvestmentLoading,
      getFarmSuccess,
      postCreateInvestmentError,
      getFarmError,
      getFarmLoading,
      farm,
      isLoggedIn,
      user,
    };
  });

  const dispatch = useDispatch();

  const [duration, setDuration] = useState(null);

  useEffect(() => {
    dispatch(getFarmRequest(id));

    if (!getFarmLoading) {
      let duration = Math.abs(
        Date.parse(farm.endDate) - Date.parse(farm.startDate)
      );

      duration = Math.floor(duration / 6048000000);

      setDuration(duration);
    }
  }, [getFarmRequest]);

  useEffect(() => {
    if (getFarmError) {
      toast.error(getFarmError, {
        duration: 3000,
      });
    }
  }, [getFarmError]);

  const history = useHistory();

  useEffect(() => {
    if (postCreateInvestmentSuccess) {
      history.replace("/payment");
    }

    dispatch(clearPostCreateInvestmentSuccess());
  }, [postCreateInvestmentSuccess]);

  useEffect(() => {
    if (postCreateInvestmentError) {
      toast.error(postCreateInvestmentError, {
        duration: 3000,
      });
    }
  }, [postCreateInvestmentError]);

  const [unit, setUnit] = useState(1);

  const onChange = (e) => {
    setUnit(e.target.value);
  };

  const invest = () => {
    let formData = { user: user._id, farm: farm._id, unit };

    dispatch(postCreateInvestmentRequest(formData));
  };

  return (
    <div>
      {isLoggedIn ? <DashboardNav /> : <Navbar />}
      {!getFarmLoading && (
        <section className="container">
          <div className="display-grid-2">
            <div>
              <h1 className="invest-heading">{farm.farmName}</h1>
              <p className="font-18 text-start">{farm.description}</p>
              <div className="card bg-primary  color-light width-400 p-1 mt-2">
                <p className="font-20 text-start">
                  Return of investment: {farm.returnOfInvestment}%
                </p>
                <p className="font-20 text-start">Amount: ₦{farm.amount}</p>
                <p className="font-20 text-start">Duration: {duration} weeks</p>
                <p className="font-20 text-start">Location: {farm.country}</p>
              </div>
            </div>
            <div className="mt-4 justify-self-center">
              <img
                className="rounded"
                src={`/img/flag/${farm.country}.png`}
                alt=""
              />
            </div>
          </div>

          <div className="display-grid-2">
            <div className="my-2 rounded">
              <img className="rounded" src={farm.photo} alt="" />
            </div>

            <div className="center-btn">
              <div className="form-control">
                <label>Enter Unit</label>
                <input
                  type="number"
                  name="Unit"
                  value={unit}
                  onChange={(e) => onChange(e)}
                  placeholder="0"
                  required
                />
              </div>
              <div onClick={() => invest()} className="btn-medium">
                {postCreateInvestmentLoading ? (
                  <img
                    className="loader"
                    src={"/img/referral/loader.gif"}
                    alt=""
                  ></img>
                ) : (
                  "Invest"
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleFarm;
