import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { postReferralRequest } from "../../../redux/action";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  let query = useQuery();

  const [loading, setLoading] = useState(false);
  const [changeFormState, setChangeFormState] = useState(false);

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

      const refId = query.get("refId");

      console.log({ formData, refId });

      dispatch(postReferralRequest({ formData, refId }));
    },
  });

  useEffect(() => {
    if (postReferralError) {
      toast.error(postReferralError, {
        duration: 4000,
      });
    }
  }, [postReferralError]);

  useEffect(() => {
    if (postReferralSuccess) {
      toast.success(postReferralSuccess, {
        duration: 4000,
      });
    }
  }, [postReferralSuccess]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://farmgridportal.web.app/referral/${user.referralLink}`
    );

    toast.success("Copied to clipboard", {
      duration: 4000,
    });
  };

  return (
    <div className="showcase">
      <div className="showcase-form card">
        <img src={`/img/referral/logo.jpg`} alt="farm grid logo"></img>
        <h2>FarmGrid Referal</h2>
        <p>Please fill the details below to get a referal link</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              name="walletAddress"
              {...formik.getFieldProps("walletAddress")}
              placeholder="wallet address"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="telegramUsername"
              {...formik.getFieldProps("telegramUsername")}
              placeholder="telegram username"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="facebookUsername"
              {...formik.getFieldProps("facebookUsername")}
              placeholder="facebook username"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="twitterUsername"
              {...formik.getFieldProps("twitterUsername")}
              placeholder="twitter username"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="instagramUsername"
              {...formik.getFieldProps("instagramUsername")}
              placeholder="instagram username"
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
                "Get Refferal"
              )}
            </button>
          </div>
        </form>

        <div className="copy-section">
          <p>Please click to copy your referral link below</p>
          <input
            value={`farmgrid/referral/${user.referralLink}`}
            onClick={() => copyToClipboard()}
            action={formik.handleSubmit}
            type="text"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
