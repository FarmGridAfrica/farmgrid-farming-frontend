import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { FaTelegram } from "react-icons/fa";
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
        <SocialMediaIconsReact
          roundness={50}
          borderColor="#212529"
          icon="facebook"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="#212529"
          url="https://web.facebook.com/farmgrid"
          size="38"
        />
        <SocialMediaIconsReact
          roundness={50}
          borderColor="#212529"
          icon="twitter"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="#212529"
          url="https://twitter.com/farmgrid"
          size="38"
        />
        <SocialMediaIconsReact
          roundness={50}
          borderColor="#212529"
          icon="instagram"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="#212529"
          url="https://instagram.com/farmgrid"
          size="38"
        />
        <SocialMediaIconsReact
          roundness={50}
          borderColor="#212529"
          icon="reddit"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="#212529"
          url="https://www.reddit.com/u/Farm_Grid"
          size="38"
        />

        <a href="https://t.me/farmgrid" target="_blank">
          <FaTelegram className="react-icon" />
        </a>

        <SocialMediaIconsReact
          roundness={50}
          borderColor="#212529"
          icon="youtube"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="#212529"
          url="https://www.youtube.com/channel/UCIoPcYfOHV1rHtoNhi5zNmA"
          size="38"
        />
        <a href="https://medium.com/@grid.farmgrid" target="_blank">
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
        13,000,000 $GRID Token Airdropped, refer your friends to participate{" "}
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
