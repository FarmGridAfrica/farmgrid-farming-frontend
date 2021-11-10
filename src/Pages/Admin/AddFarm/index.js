import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { postCreateFarmRequest } from "../../../redux/action";
import { AdminNav } from "../../../Components/navbar";
import { UploadForm } from "../../../Components/Upload";
import { SubmitBtn } from "../../../Components/button";

const AddFarm = () => {
  const {
    postCreateFarmSuccess,
    postCreateFarmError,
    postCreateFarmLoading,
    user,
  } = useSelector((state) => {
    const {
      success: { postCreateFarm: postCreateFarmSuccess },
      errors: { postCreateFarm: postCreateFarmError },
    } = state.ajaxStatuses;

    const { postCreateFarmLoading } = state.loadingIndicator;

    const { user } = state.userData;

    return {
      postCreateFarmSuccess,
      postCreateFarmError,
      postCreateFarmLoading,
      user,
    };
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      farmName: "",
      photo: "",
      description: "",
      country: "",
      returnOfInvestment: "",
      amount: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      if (prop.photo == "") {
        toast.error("Upload a photo", {
          duration: 3000,
        });
      } else {
        console.log(prop);
        dispatch(postCreateFarmRequest(prop));
      }
    },
  });

  useEffect(() => {
    if (postCreateFarmError) {
      toast.error(postCreateFarmError, {
        duration: 3000,
      });
    }
  }, [postCreateFarmError]);

  useEffect(() => {
    if (postCreateFarmSuccess) {
      toast.success(postCreateFarmSuccess, {
        duration: 3000,
      });
    }
  }, [postCreateFarmSuccess]);

  return (
    <div>
      <AdminNav />
      <div className="container mb-5">
        <div className="formcard mt-3 card">
          <div className="my-2">
            <h2 className="auth-form-h1 mb-1">Add farm</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="display-grid-2">
                <div>
                  <div className="form-control"></div>
                  <div className="form-control">
                    <label>Farm name</label>
                    <input
                      type="text"
                      name="farmName"
                      {...formik.getFieldProps("farmName")}
                      placeholder="farm name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label>Amount</label>
                    <input
                      type="number"
                      name="amount"
                      {...formik.getFieldProps("amount")}
                      placeholder="Amount"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label>Return of investment(%)</label>
                    <input
                      type="number"
                      name="returnOfInvestment"
                      {...formik.getFieldProps("returnOfInvestment")}
                      placeholder="ROI%"
                      required
                    />
                  </div>

                  <UploadForm formik={formik} />
                </div>

                <div>
                  <div className="form-control">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="description"
                      {...formik.getFieldProps("description")}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label>Country</label>
                    <select name="country" {...formik.getFieldProps("country")}>
                      <option value="Active"></option>
                      <option value="Kenya">Kenya</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="South Africa">South Africa</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label>Start date</label>
                    <input
                      type="date"
                      name="startDate"
                      {...formik.getFieldProps("startDate")}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label>End date</label>
                    <input
                      type="date"
                      name="endStart"
                      {...formik.getFieldProps("endDate")}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="center-btn">
                <SubmitBtn
                  action={formik.handleSubmit}
                  loading={postCreateFarmLoading}
                  text={"Add farm"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFarm;
