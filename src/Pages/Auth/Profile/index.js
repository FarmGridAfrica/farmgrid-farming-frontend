import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  clearPostReferralSuccess,
  googleAuthRequest,
} from "../../../redux/action";
import { Navbar } from "../../../Components/navbar";
import { SubmitBtn } from "../../../Components/button";

const Profile = () => {
  const { googleAuthSuccess, googleAuthError, googleAuthLoading, user } =
    useSelector((state) => {
      const {
        success: { googleAuth: googleAuthSuccess },
        errors: { googleAuth: googleAuthError },
      } = state.ajaxStatuses;

      const { googleAuthLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        googleAuthSuccess,
        googleAuthError,
        googleAuthLoading,
        user,
      };
    });

  useEffect(() => {
    if (googleAuthError) {
      toast.error(googleAuthError, {
        duration: 3000,
      });
    }
  }, [googleAuthError]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (googleAuthSuccess) {
      history.replace("/farm");
    }
    dispatch(clearPostReferralSuccess());
  }, [googleAuthSuccess]);

  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      bankName: "",
      country: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      let formData = prop;

      const token = history.location.state.token;

      console.log({ formData, token });

      dispatch(googleAuthRequest({ formData, token }));
    },
  });

  return (
    <div className="main-background">
      <Navbar />
      <div className="showcase-form auth-form mt-4 card">
        <div>
          <h1 className="auth-form-h1">Profile</h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <label>Country</label>
              <select
                name="country"
                {...formik.getFieldProps("country")}
                required
              >
                <option></option>
                <option value="Kenya">Kenya</option>
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>
            <div className="form-control">
              <label>Account nmber</label>
              <input
                type="text"
                name="accountNumber"
                {...formik.getFieldProps("accountNumber")}
                placeholder="Account number"
                required
              />
            </div>
            <div className="form-control">
              <label>Bank name</label>
              <input
                type="text"
                name="bankName"
                {...formik.getFieldProps("bankName")}
                placeholder="Bank name"
                required
              />
            </div>

            <SubmitBtn text="Register" loading={googleAuthLoading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
