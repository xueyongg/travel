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
  state = {
    header: "",
    description: "",
    src: "",
    imagePosition: "",
    buttonText: "",
    isVideo: false
  };

  componentWillMount() {
    this.state = this.props;
  }
  render() {
    let {
      header,
      description,
      src,
      imagePosition,
      buttonText,
      isVideo
    } = this.state;
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            {imagePosition === "left" ? (
              <Grid.Column floated="left" width={6}>
                <Image bordered rounded fluid src={src} />
              </Grid.Column>
            ) : (
              ""
            )}
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                {header}
              </Header>
              <p style={{ fontSize: "1.33em" }}>{description}</p>
            </Grid.Column>
            {imagePosition === "right" ? (
              <Grid.Column floated="right" width={6}>
                {isVideo? 
                  <Embed
                  autoplay={false}
                  color='white'
                  hd={false}
                  id='gJscrxxl_Bg'
                  iframe={{
                    allowFullScreen: true,
                    style: {
                      padding: 10,
                    },
                  }}
                  placeholder='/images/image-16by9.png'
                  source='youtube'
                  />
                  : 
                  <Image bordered rounded fluid src={src} />
              }
              </Grid.Column>
            ) : (
              ""
            )}
          </Grid.Row>
          {/* <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">
                {buttonText ? buttonText : "Check Them Out"}
              </Button>
            </Grid.Column>
          </Grid.Row> */}
        </Grid>
      </Segment>
    );
  }
}

FeatureComponent.PropTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  imagePosition: PropTypes.string,
  buttonText: PropTypes.string,
  isVideo: PropTypes.bool,
}