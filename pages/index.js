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
import { ResponsiveContainer } from "./home";
import FeatureComponent from "./components/feature";

export default class HomepageLayout extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <FeatureComponent
          header={"We Help Companies and Companions"}
          description={
            "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."
          }
          imageURL={
            "https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
          }
          imagePosition={"right"}
        />

        <FeatureComponent
          header={"We Help Companies and Companions"}
          description={
            "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."
          }
          imageURL={
            "https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
          }
          imagePosition={"left"}
          buttonText={"Test this out"}
        />
      </ResponsiveContainer>
    );
  }
}
