import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Progress
} from "semantic-ui-react";
import ResponsiveContainer from "./home";
import FeatureComponent from "./components/feature";
const data = require("../static/data/data.json");
const placeholderImagePath = "../static/images/placeholder/image-placeholder.png";
export default class HomepageLayout extends Component {
  render() {
    return (
      <ResponsiveContainer 
      landingTitle={data.header.landingTitle}
      iconTitle={data.header.iconTitle} 
      iconImageSrc={data.header.iconImageSrc}
      headerImageSrc={data.header.imageSrc}
      >
        {data.features.map((feature, index) => {
          let { header, description, src, isVideo } = feature;
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
              imagePosition={index % 2 === 0 ? "right" : "left"}
            />
          );
        })}
      </ResponsiveContainer>
    );
  }
}
