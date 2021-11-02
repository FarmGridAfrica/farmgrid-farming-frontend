import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { getReferralRequest } from "../../../redux/action";
import Walletmodel from "../../../models/WalletModels";
import { Heading, Icons, ReferralLink } from "../../../Components/Icons";

const ViewReferral = () => {
  const { getweb3 } = Walletmodel();
  const [myWeb3, setMyWeb3] = useState();
  const [loading, setLoading] = useState(false);

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

  const connectWallet = async () => {
    setLoading(true);

    try {
      const response = await getweb3();

      setMyWeb3(response);

      const result = await response.eth.getAccounts();

      formik.setFieldValue("walletAddress", result[0]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // disconnect wallet
  const disconnectWallet = async () => {
    formik.setFieldValue("walletAddress", "");
  };

  return (
    <div className="form-background">
      <div className="showcase-form card">
        <Heading />

        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <div className="label-div">
              <label htmlFor="">Wallet Address</label>
              {formik.values.walletAddress ? (
                <div
                  className="connect-wallet-btn"
                  onClick={() => disconnectWallet()}
                >
                  {loading ? (
                    <img
                      className="loader"
                      src={"/img/referral/loader.gif"}
                      alt=""
                    ></img>
                  ) : (
                    "Disconnect"
                  )}
                </div>
              ) : (
                <div
                  className="connect-wallet-btn"
                  onClick={() => connectWallet()}
                >
                  {loading ? (
                    <img
                      className="loader"
                      src={"/img/referral/loader.gif"}
                      alt=""
                    ></img>
                  ) : (
                    "Connect Wallet"
                  )}
                </div>
              )}
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
                "SEND"
              )}
            </button>
            <div className="referral-count">
              <Link to="/referral">Back</Link>
            </div>
          </div>
        </form>

        {user.referralLink && (
          <>
            <ReferralLink user={user} />
            <div className="referral-count">
              <h2>Referral Count: {user.referralCount}</h2>
            </div>
          </>
        )}

        <Icons />
      </div>
    </div>
  );
};

export default ViewReferral;
