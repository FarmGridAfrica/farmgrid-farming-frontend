import React from "react";

import { SocialMediaIconsReact } from "social-media-icons-react";

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
        <a href="https://medium.com/@grid.farmgrid">
          <img src={"/img/referral/medium.png"} alt=""></img>
        </a>
        <a href="https://t.me/farmgrid">
          <img src={"/img/referral/telegram.png"} alt=""></img>
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
      </div>
    </div>
  );
};
