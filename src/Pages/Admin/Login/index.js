import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  clearPostReferralSuccess,
  postReferralRequest,
} from "../../../redux/action";

const Login = () => {
  const { postReferralSuccess, postReferralError, postReferralLoading, user } =
    useSelector((state) => {
      const {
        success: { postReferral: postReferralSuccess },
        errors: { postReferral: postReferralError },
      } = state.ajaxStatuses;

      const { postReferralLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        postReferralSuccess,
        postReferralError,
        postReferralLoading,
        user,
      };
    });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      walletAddress: "",
      telegramUsername: "",
      facebookUsername: "",
      twitterUsername: "",
      instagramUsername: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      let formData = prop;

      dispatch(postReferralRequest({ formData }));
    },
  });
  return (
    <div className="main-background">
      <div className="showcase-form auth-form card">
        <div>
          <h1 className="auth-form-h1">Admin Log in</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="telegramUsername"
                {...formik.getFieldProps("telegramUsername")}
                placeholder="E-mail"
                required
              />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                name="facebookUsername"
                {...formik.getFieldProps("facebookUsername")}
                placeholder="Password"
                required
              />
            </div>

            <div>
              <button type="submit" className="btn">
                {postReferralLoading ? (
                  <img
                    className="loader"
                    src={"/img/referral/loader.gif"}
                    alt=""
                  ></img>
                ) : (
                  "Log in"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
