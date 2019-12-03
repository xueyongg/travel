
import React, { Component } from "react";

import ResponsiveContainer from "./home";
import FeatureComponent from "./components/feature";

const application = "travelApp";
const data = require(`../static/data/${application}_data.json`);
const placeholderImagePath = "../static/images/placeholder/image-placeholder.png";

export default class HomepageLayout extends Component {
  render() {
    return (
      <ResponsiveContainer 
      landingTitle={data.header.landingTitle}
      landingSubtitle={data.header.landingSubtitle}
      iconTitle={data.header.iconTitle} 
      iconImageSrc={data.header.iconImageSrc}
      headerImageSrc={data.header.imageSrc}
      twitter={data.socialMedia.twitter}
      facebook={data.socialMedia.facebook}
      email={data.socialMedia.email}
      >
        {data.features.map((feature, index) => {
          let { header, description, src, 
            isVideo, videoSource, videoPlaceholderImage,
            buttonUrl,buttonText } = feature;
          return (
            <FeatureComponent
              key={index}
              header={header}
              description={description}
              src={
                src
                  ? src
                  : placeholderImagePath
              }
              isVideo={isVideo}
              videoSource={videoSource} // youtube || vimeo || undefined
              videoPlaceholderImage={ videoPlaceholderImage
                ? videoPlaceholderImage
                : placeholderImagePath}
              imagePosition={index % 2 === 0 ? "right" : "left"}
              buttonUrl={buttonUrl}
              buttonText={buttonText}
            />
          );
        })}
      </ResponsiveContainer>
    );
  }
}
