import React from "react";
import {
  FaTelegram,
  FaYoutube,
  FaReddit,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import toast from "react-hot-toast";

export const Icons = () => {
  return (
    <div className="our-community">
      <h2>JOIN OUR COMMUNITY</h2>
      <p>
        Keep up-to-date and find out how you can get involved in all our social
        media channels. Follow, like and share!
      </p>
      <div className="icon">
        <a href="https://web.facebook.com/farmgrid" target="_blank">
          <FaFacebook className="react-icon" />
        </a>
        <a href="https://twitter.com/FarmGridAfrica" target="_blank">
          <FaTwitter className="react-icon" />
        </a>

        <a href="https://instagram.com/farmgrid" target="_blank">
          <FaInstagram className="react-icon" />
        </a>

        <a href="hhttps://www.reddit.com/u/farmgrid" target="_blank">
          <FaReddit className="react-icon" />
        </a>

        <a href="https://t.me/farmgrid" target="_blank">
          <FaTelegram className="react-icon" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCIoPcYfOHV1rHtoNhi5zNmA"
          target="_blank"
        >
          <FaYoutube className="react-icon" />
        </a>

        <a href="http://farmgrid.medium.com" target="_blank">
          <SiMedium className="react-icon" />
        </a>
      </div>
    </div>
  );
};

export const ReferralLink = ({ user }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://airdrop.farmgrid.org/${user.referralLink}`
    );

    toast.success("Copied to clipboard", {
      duration: 4000,
    });
  };

  return (
    <div className="copy-section card">
      <p>Your referral link</p>
      <div>
        <input
          value={`https://airdrop.farmgrid.org/${user.referralLink}`}
          onChange={() => copyToClipboard()}
          type="text"
          required
        />
        <div onClick={() => copyToClipboard()} className="copy-button">
          Copy
        </div>
      </div>
    </div>
  );
};

export const Heading = ({ user }) => {
  return (
    <>
      <img src={`/img/referral/logo.png`} alt="farm grid logo"></img>
      <h2>Referal</h2>
      <p>
        2,720,000 $GRID Token worth $51,000 Airdropped, refer your friends to
        participate{" "}
        <a
          href="https://medium.com/@grid.farmgrid/farm-grid-referral-airdrop-7dbc6e29a552"
          target="_blank"
        >
          read more
        </a>
      </p>
    </>
  );
};
