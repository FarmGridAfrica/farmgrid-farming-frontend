import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import { clearLoginSuccess, loginRequest } from "../../../redux/action";
import { Navbar } from "../../../Components/navbar";
import { SubmitBtn } from "../../../Components/button";

const Login = () => {
  const { loginSuccess, loginError, loginLoading, user } = useSelector(
    (state) => {
      const {
        success: { login: loginSuccess },
        errors: { login: loginError },
      } = state.ajaxStatuses;

      const { loginLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        loginSuccess,
        loginError,
        loginLoading,
        user,
      };
    }
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      dispatch(loginRequest(prop));
    },
  });

  useEffect(() => {
    if (loginError) {
      toast.error(loginError, {
        duration: 3000,
      });
    }
  }, [loginError]);

  useEffect(() => {
    if (loginSuccess) {
      history.replace("/admin/dashboard");
    }
    dispatch(clearLoginSuccess());
  }, [loginSuccess]);

  return (
    <div className="main-background">
      <div
        className="showcase-form auth-form card"
        style={{ marginTop: "150px" }}
      >
        <div className="my-5">
          <h1 className="auth-form-h1">Admin log in</h1>
          <form onSubmit={formik.handleSubmit}>
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
              <label>Password</label>
              <input
                type="password"
                name="password"
                {...formik.getFieldProps("password")}
                placeholder="Password"
                required
              />
            </div>

            <SubmitBtn text="Log in" loading={loginLoading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
