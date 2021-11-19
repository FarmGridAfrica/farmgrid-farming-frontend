import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getInvestmentRequest,
  putInvestmentRequest,
} from "../../../../redux/action";
import { AdminNav } from "../../../../Components/navbar";
import { UploadForm } from "../../../../Components/Upload";
import { SubmitBtn } from "../../../../Components/button";
import { useParams } from "react-router";
import { InvestmentCard, ProductCard } from "../../../../Components/cards";

const UpdateInvestment = () => {
  const { id } = useParams();
  const {
    getInvestmentSuccess,
    getInvestmentError,
    getInvestmentLoading,
    putInvestmentSuccess,
    putInvestmentError,
    putInvestmentLoading,
    user,
    investment,
  } = useSelector((state) => {
    const {
      success: {
        getInvestment: getInvestmentSuccess,
        putInvestment: putInvestmentSuccess,
      },
      errors: {
        getInvestment: getInvestmentError,
        putInvestment: putInvestmentError,
      },
    } = state.ajaxStatuses;

    const { getInvestmentLoading, putInvestmentLoading } =
      state.loadingIndicator;

    const { user } = state.userData;
    const { investment } = state.investmentData;

    return {
      getInvestmentSuccess,
      getInvestmentError,
      getInvestmentLoading,
      putInvestmentSuccess,
      putInvestmentError,
      putInvestmentLoading,
      user,
      investment,
    };
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      status: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      let formData = prop;
      dispatch(putInvestmentRequest({ formData, id }));
    },
  });

  useEffect(() => {
    if (investment) {
      formik.setValues((values) => ({
        ...values,
        status: investment.status,
      }));
    }
  }, [investment]);

  useEffect(() => {
    dispatch(getInvestmentRequest(id));
  }, [getInvestmentRequest]);

  useEffect(() => {
    if (getInvestmentError) {
      toast.error(getInvestmentError, {
        duration: 3000,
      });
    }
  }, [getInvestmentError]);

  useEffect(() => {
    if (putInvestmentSuccess) {
      dispatch(getInvestmentRequest(id));
    }
  }, [putInvestmentSuccess]);

  return (
    <div>
      <AdminNav />
      <div className="container mb-5">
        <div className="formcard mt-3 card">
          <div className="my-2">
            <h2 className="auth-form-h1 mb-1">Edit Farm</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="display-grid-2">
                <div>
                  <div className="form-control">
                    <label>Status</label>
                    <select name="status" {...formik.getFieldProps("status")}>
                      <option value="Active">Active</option>
                      <option value="Withdrawn">Withdrawn</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  {!getInvestmentLoading && (
                    <div className="card p-1 mt-4 bg-primary color-light">
                      <h3 className="font-weight-normal font-22">
                        Farmer details
                      </h3>
                      <p className="font-18 text-start">
                        Name: {investment.user.firstName}{" "}
                        {investment.user.lastName}
                      </p>
                      <p className="font-18 text-start">
                        Email: {investment.user.email}
                      </p>
                      <p className="font-18 text-start">
                        Country: {investment.user.country}{" "}
                      </p>
                      <p className="font-18 text-start">
                        Bank name: {investment.user.bankName}{" "}
                      </p>
                      <p className="font-18 text-start">
                        Account number: {investment.user.accountNumber}{" "}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  {!getInvestmentLoading && (
                    <ProductCard farm={investment.farm} />
                  )}
                </div>
              </div>

              <div className="center-btn">
                <SubmitBtn
                  action={formik.handleSubmit}
                  loading={putInvestmentLoading}
                  text={"Update"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInvestment;
