
import React, { Component } from "react";

import ResponsiveContainer from "./home";
import FeatureComponent from "./components/feature";
import {Container, Header, Divider, Icon} from "semantic-ui-react";

const application = "songkids2019";
const data = require(`../static/data/${application}_data.json`);
const placeholderImagePath = "../static/images/placeholder/image-placeholder.png";

export default class HomepageLayout extends Component {
  render() {
    return (
      <ResponsiveContainer 
      landingTitle={data.header.landingTitle}
      landingSubtitle={data.header.landingSubtitle}
      landingTitleColor={data.header.landingTitleColor}
      landingSubtitleColor={data.header.landingSubtitleColor}
      iconTitle={data.header.iconTitle} 
      iconImageSrc={data.header.iconImageSrc}
      headerImageSrc={data.header.imageSrc}
      twitter={data.socialMedia.twitter}
      facebook={data.socialMedia.facebook}
      email={data.socialMedia.email}
      >
        {data.introduction.title? <Container text style={{marginTop: '50px', marginBottom: "0"}}>
          <Header as={data.introduction.titleSize}>{data.introduction.title}</Header>
          {data.introduction.paragraphs.map((paragraph, index)=>{
            return (
              <p>
                {paragraph}
              </p>
            )
          })}
        </Container>: ""}
        
        {data.divider.wording? <Divider horizontal style={{padding: "4em 0em 0em 0em"}}>
          <Header as={data.divider.wordSize}>
            <Icon name='tag' />
              {data.divider.wording}
          </Header>
          
        </Divider>: ""}
        
        {data.features.map((feature, index) => {
          let { header, description, src, imageSrc,
            isVideo, videoSource, videoPlaceholderImage,
            buttonUrl,buttonText } = feature;
          return (
            <FeatureComponent
              key={index}
              header={header}
              description={description}
              imageSrc={imageSrc}
              src={src}
              isVideo={isVideo}
              videoSource={videoSource} // youtube || vimeo || undefined
              videoPlaceholderImage={videoPlaceholderImage}
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
