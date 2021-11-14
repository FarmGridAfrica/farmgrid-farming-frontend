import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  clearPostReferralSuccess,
  postReferralRequest,
} from "../../../redux/action";
import { Navbar } from "../../../Components/navbar";
import { SubmitBtn } from "../../../Components/button";
import GoogleLogin from "react-google-login";

const Register = () => {
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

  useEffect(() => {
    if (postReferralError) {
      toast.error(postReferralError, {
        duration: 3000,
      });
    }
  }, [postReferralError]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (postReferralSuccess) {
      history.replace("/farm");
    }
    dispatch(clearPostReferralSuccess());
  }, [postReferralSuccess]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      accountNumber: "",
      bankName: "",
      country: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      const isSignup = true;

      let formData = prop;

      const data = {
        formData,
        isSignup,
      };
      console.log(data);
      dispatch(postReferralRequest({ data }));
    },
  });

  const responseGoogle = (response) => {
    if (response.getAuthResponse().id_token) {
      history.push({
        pathname: "/auth/profile",
        state: { token: response.getAuthResponse().id_token },
      });
    }
  };

  return (
    <div className="main-background">
      <Navbar />
      <div className="showcase-form auth-form mt-4 card">
        <div>
          <h1 className="auth-form-h1">Register</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <label>first name</label>
              <input
                type="text"
                name="firstName"
                {...formik.getFieldProps("firstName")}
                placeholder="first name"
                required
              />
            </div>
            <div className="form-control">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                {...formik.getFieldProps("lastName")}
                placeholder="last name"
                required
              />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="email"
                {...formik.getFieldProps("email")}
                placeholder="E-mail"
                required
              />
            </div>
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
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                name="password"
                {...formik.getFieldProps("password")}
                placeholder="Password"
                required
              />
            </div>

            <SubmitBtn text="Register" loading={postReferralLoading} />
          </form>
          <h3 className="auth-form-swap">
            Already a user?
            <Link to="/auth/login" className="account-span">
              {" "}
              Log in
            </Link>
          </h3>
          <div className="google-sign-up">
            <GoogleLogin
              clientId="1009378875291-qdmhto918d8uksshhh0fp3vbdaafrfi7.apps.googleusercontent.com"
              buttonText="Sign Up"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              style={{ fontWeight: 500, fontSize: 20 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
