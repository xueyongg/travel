import PropTypes from "prop-types";
import React, { Component } from "react";
import _ from "lodash";
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

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class HomepageHeading extends Component {
  state = {
    overlayFixed: false,
    mobile: false
  };

  componentDidMount() {
    let currentState = this.state;
    currentState.mobile = this.props.mobile;
    this.setState(currentState);
  }

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect)
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
      });
  };

  stickOverlay = () => this.setState({ overlayFixed: true });
  unStickOverlay = () => this.setState({ overlayFixed: false });

  render() {
    let { mobile, overlayFixed, overlayRect } = this.state;
    const overlayStyle = {
      float: "left",
      margin: "0em 3em 3em 0em"
    };

    const fixedOverlayStyle = {
      ...overlayStyle,
      position: "fixed",
      top: "80px",
      zIndex: 10
    };

    const overlayMenuStyle = {
      position: "relative",
      left: "200px",
      transition: "left 0.5s ease"
    };

    const fixedOverlayMenuStyle = {
      ...overlayMenuStyle,
      left: "940px"
    };

    return (
      <Container text>
        <Header
          as="h1"
          content="Imagine-a-Company"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em"
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em"
          }}
        />

        <Visibility
          offset={80}
          once={false}
          onTopPassed={this.stickOverlay}
          onTopVisible={this.unStickOverlay}
          style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
        />
        <div
          ref={this.handleOverlayRef}
          style={overlayFixed ? fixedOverlayStyle : overlayStyle}
        >
          <Menu
            icon="labeled"
            style={
              overlayFixed
                ? {
                    ...fixedOverlayMenuStyle,
                    left:
                      window.innerWidth * 0.7 > 940
                        ? 940
                        : window.innerWidth * 0.7
                  }
                : overlayMenuStyle
            }
            vertical={overlayFixed ? true : false}
          >
            <Menu.Item>
              <Icon name="twitter" />
              Twitter
            </Menu.Item>
            <Menu.Item>
              <Icon name="facebook" />
              Share
            </Menu.Item>

            <Menu.Item>
              <Icon name="mail" />
              Email
            </Menu.Item>
          </Menu>
        </div>
      </Container>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
