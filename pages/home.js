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
import HomepageLayout from "./index";
import HomepageHeading from "./components/home_page_layout";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
export class DesktopContainer extends Component {
  state = { percent: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let totalHeight =
      Number(event.target.documentElement.scrollHeight) -
      Number(event.target.documentElement.clientHeight);
    let currentHeight = Number(event.target.documentElement.scrollTop);
    let percent = currentHeight / totalHeight;
    this.setState({
      percent: percent * 100
    });
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleOnProgressChange = () => {
    this.setState({ progress });
  };

  render() {
    const { children } = this.props;
    const { fixed, percent } = this.state;
    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Container style={{ width: "100%" }}>
            <Progress
              percent={this.state.percent}
              size="tiny"
              color="teal"
              style={{ width: "100%", position: "fixed", top: 0, zIndex: 100 }}
            />
          </Container>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={false}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{ marginBottom: 0, top: fixed ? 5 : 0 }}
            >
              <Menu.Item as="a" icon>
                <Image
                  src="/static/images/icon/T.jpg"
                  size="mini"
                  spaced
                  circular
                />
                Title of the company
              </Menu.Item>
            </Menu>

            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

export class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

export const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};
DesktopContainer.propTypes = {
  children: PropTypes.node
};
MobileContainer.propTypes = {
  children: PropTypes.node
};
