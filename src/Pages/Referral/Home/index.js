import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import {
  clearPostReferralSuccess,
  postReferralRequest,
} from "../../../redux/action";
import Walletmodel from "../../../models/WalletModels";
import { Heading, Icons, ReferralLink } from "../../../Components/Icons";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const { getweb3 } = Walletmodel();
  const [myWeb3, setMyWeb3] = useState(null);
  const [loading, setLoading] = useState(false);

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

  let query = useQuery();

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
      youtubeUsername: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      let formData = prop;

      let refId = query.get("refId");

      console.log(formData);

      const isSignup = false;

      dispatch(postReferralRequest({ data: { formData, isSignup }, refId }));
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

      dispatch(clearPostReferralSuccess());
    }
  }, [postReferralSuccess]);

  return (
    <div className="main-background">
      <div className="showcase-form mt-4 mb-4 card">
        <Heading />
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <div className="label-div">
              <label>Wallet Address(BSC)</label>

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
          <div className="form-control">
            <div className="label-div">
              <label>Telegram username</label>
              {/* <a href="https://t.me/farmgridafrica" target="_blank">
                Click to follow
              </a> */}
            </div>
            <input
              type="text"
              name="telegramUsername"
              {...formik.getFieldProps("telegramUsername")}
              placeholder="telegram username"
              required
            />
          </div>
          <div className="form-control">
            <div className="label-div">
              <label>Facebook username</label>
              {/* <a href="https://web.facebook.com/farmgrid" target="_blank">
                Click to follow
              </a> */}
            </div>
            <input
              type="text"
              name="facebookUsername"
              {...formik.getFieldProps("facebookUsername")}
              placeholder="facebook username"
              required
            />
          </div>

          <div className="form-control">
            <div className="label-div">
              <label>Twitter username</label>
              {/* <a href="https://twitter.com/FarmGriddao" target="_blank">
                Click to follow
              </a> */}
            </div>

            <input
              type="text"
              name="twitterUsername"
              {...formik.getFieldProps("twitterUsername")}
              placeholder="twitter username"
            />
          </div>
          <div className="form-control">
            <div className="label-div">
              <label>Instagram username</label>
              {/* <a href="https://instagram.com/farmgrid" target="_blank">
                Click to follow
              </a> */}
            </div>
            <input
              type="text"
              name="instagramUsername"
              {...formik.getFieldProps("instagramUsername")}
              placeholder="instagram username"
            />
          </div>
          <div className="form-control">
            <div className="label-div">
              <label>Youtube username</label>
              {/* <a
                href="https://www.youtube.com/channel/UCIoPcYfOHV1rHtoNhi5zNmA"
                target="_blank"
              >
                Click to follow
              </a> */}
            </div>
            <input
              type="text"
              name="instagramUsername"
              {...formik.getFieldProps("youtubeUsername")}
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
                "JOIN AIRDROP"
              )}
            </button>
            {/* <div className="referral-count">
              <Link to="/referral/getreferral">View My Referral Link</Link>
              <Link to="/referral/getreferral">View Referal Count</Link>
            </div> */}
          </div>
        </form>

        {/* {user.referralLink && <ReferralLink user={user} />} */}

        <Icons />
      </div>
    </div>
  );
};

export default Home;
