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

export default class FeatureComponent extends Component {
  state = {};

  componentWillMount() {
    this.state = this.props;
  }
  render() {
    let {
      header,
      description,
      imageURL,
      imagePosition,
      buttonText
    } = this.state;
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            {imagePosition === "left" ? (
              <Grid.Column floated="left" width={6}>
                <Image bordered rounded fluid src={imageURL} />
              </Grid.Column>
            ) : (
              ""
            )}
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                {header}
              </Header>
              <p style={{ fontSize: "1.33em" }}>{description}</p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Bananas That Can Dance
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            {imagePosition === "right" ? (
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded fluid src={imageURL} />
              </Grid.Column>
            ) : (
              ""
            )}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">
                {buttonText ? buttonText : "Check Them Out"}
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
