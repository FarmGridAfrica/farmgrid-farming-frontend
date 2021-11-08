import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { InvestmentCard, ProductCard } from "../../../Components/cards";
import {
  getFarmRequest,
  postCreateInvestmentRequest,
} from "../../../redux/action";
import { DashboardNav, Navbar } from "../../../Components/navbar";
import { Link, useParams } from "react-router-dom";

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
      const duration = Math.floor(farm.duration / 60480000);
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

  useEffect(() => {
    if (postCreateInvestmentSuccess) {
      toast.success(postCreateInvestmentSuccess, {
        duration: 3000,
      });
    }
  }, [postCreateInvestmentSuccess]);

  useEffect(() => {
    if (postCreateInvestmentError) {
      toast.error(postCreateInvestmentError, {
        duration: 3000,
      });
    }
  }, [postCreateInvestmentError]);

  const invest = () => {
    let formData = { user: user._id, farm: farm._id };

    dispatch(postCreateInvestmentRequest(formData));
  };

  return (
    <div>
      {isLoggedIn ? <DashboardNav /> : <Navbar />}
      {!getFarmLoading && (
        <section className="container">
          <h1 className="invest-heading">{farm.farmName}</h1>
          <p className="font-18 text-start">{farm.description}</p>
          <p className="font-22 text-start">
            Return of investment:{farm.returnOfInvestment}%
          </p>
          <p className="font-22 text-start">Amount: ₦{farm.amount}</p>
          <p className="font-22 text-start">Duration: {duration} weeks</p>

          <div className="my-2 rounded">
            <img className="rounded" src={farm.photo} alt="" />
          </div>

          <div className="center-btn">
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
        </section>
      )}
    </div>
  );
};

export default SingleFarm;
