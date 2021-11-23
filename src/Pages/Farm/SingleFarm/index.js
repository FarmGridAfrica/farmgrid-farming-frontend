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
import Flag from "react-flagpack";
import { CircularProgress } from "@material-ui/core";
import CurrencyFormat from "react-currency-format";

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

  useEffect(() => {
    dispatch(getFarmRequest(id));
  }, [getFarmRequest]);

  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!getFarmLoading) {
      let amount = "";

      if (farm.country == "Kenya") {
        amount = "KES";
        amount = setAmount(amount);
      } else if (farm.country == "South Africa") {
        amount = "R";
        setAmount(amount);
      } else {
        amount = "₦";
        setAmount(amount);
      }
    }
  }, [getFarmLoading]);

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
    if (!isLoggedIn) {
      history.push("/auth/login");
    } else {
      let formData = { user: user._id, farm: farm._id, unit };
      dispatch(postCreateInvestmentRequest(formData));
    }
  };

  const [flag, setFlag] = useState("");

  useEffect(() => {
    if (!getFarmLoading) {
      setFlag(farm.country.split(" ").join(""));
    }
  }, [getFarmLoading]);

  return (
    <div>
      {isLoggedIn ? <DashboardNav /> : <Navbar />}
      {getFarmLoading ? (
        <div style={{ marginTop: "300px" }} className="text-center">
          <CircularProgress color="success" size="20px" />
        </div>
      ) : (
        <section className="container">
          <div className="display-grid-2">
            <div>
              <h1 className="invest-heading">{farm.farmName}</h1>
              <p className="font-18 text-start">{farm.description}</p>
              <div className="card bg-primary color-light font-weight-400 width-400 p-1 mt-2">
                <p className="font-20 text-start">
                  Annual percentage yield: {farm.annualPercentageYield}%
                </p>
                <p className="font-20 text-start">
                  Amount:{" "}
                  <CurrencyFormat
                    value={farm.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={`${amount}`}
                  />
                </p>
                <p className="font-20 text-start">
                  Duration: {farm.duration} months
                </p>
                <div style={{ display: "flex" }}>
                  <p className="font-20 text-start">Location: {farm.country}</p>{" "}
                  <img
                    className="rounded country-image-size"
                    src={`/img/flagicon/${flag}.png`}
                    style={{ width: "30px", marginLeft: "5px" }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 justify-self-center">
              <img
                className="rounded farm-single-image"
                src={farm.photo}
                alt=""
              />
            </div>
          </div>

          <div>
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
                  "Stake"
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
