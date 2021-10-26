import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { getReferralRequest } from "../../../redux/action";

const ViewReferral = () => {
  const { getReferralSuccess, getReferralError, getReferralLoading, user } =
    useSelector((state) => {
      const {
        success: { getReferral: getReferralSuccess },
        errors: { getReferral: getReferralError },
      } = state.ajaxStatuses;

      const { getReferralLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        getReferralSuccess,
        getReferralError,
        getReferralLoading,
        user,
      };
    });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      walletAddress: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      dispatch(getReferralRequest(prop));
    },
  });

  useEffect(() => {
    if (getReferralError) {
      toast.error(getReferralError, {
        duration: 3000,
      });
    }
  }, [getReferralError]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://farmgridportal.web.app/referral/${user.referralLink}`
    );

    toast.success("Copied to clipboard", {
      duration: 3000,
    });
  };

  return (
    <div className="form-background">
      <div className="showcase-form card">
        <img src={`/img/referral/logo.png`} alt="farm grid logo"></img>
        <h2>Referal</h2>
        <p>Please fill the details below to get a referal link</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <div className="label-div">
              <label htmlFor="">Wallet Address</label>
            </div>
            <input
              type="text"
              name="walletAddress"
              {...formik.getFieldProps("walletAddress")}
              placeholder="wallet address"
              required
            />
          </div>

          <div>
            <button type="submit" className="btn">
              {getReferralLoading ? (
                <img
                  className="loader"
                  src={"/img/referral/loader.gif"}
                  alt=""
                ></img>
              ) : (
                "Get Refferal"
              )}
            </button>
            <div className="referral-count">
              <Link to="/referral">Back</Link>
            </div>
          </div>
        </form>

        {user.referralLink && (
          <div className="copy-section card">
            <p>Your referral link</p>
            <div>
              <input
                value={`https://farmgridportal.web.app/referral/${user.referralLink}`}
                onChange={() => copyToClipboard()}
                type="text"
                required
              />
              <div onClick={() => copyToClipboard()} className="copy-button">
                Copy
              </div>
            </div>
          </div>
        )}

        <div className="our-community">
          {user.referralCount && <h3>Total Referrals: {user.referralCount}</h3>}
          <h2>JOIN OUR COMMUNITY</h2>
          <p>
            Keep up-to-date and find out how you can get involved in all our
            social media channels. Follow, like and share!
          </p>
          <div className="icon">
            <img src="/img/referral/facebook.png" alt="" />
            <img src="/img/referral/twitter.png" alt="" />
            <img src="/img/referral/instagram.png" alt="" />
            <img src="/img/referral/telegram.png" alt="" />
            <img src="/img/referral/medium.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReferral;
