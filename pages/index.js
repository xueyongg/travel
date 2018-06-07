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

export default class HomepageLayout extends Component {
  render() {
    return (
      <ResponsiveContainer>
        {data.features.map((feature, i) => {
          let { header, description, image } = feature;
          return (
            <FeatureComponent
              header={header}
              description={description}
              imageURL={
                image
                  ? image
                  : "https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
              }
              imagePosition={i % 2 === 0 ? "right" : "left"}
            />
          );
        })}
      </ResponsiveContainer>
    );
  }
}
