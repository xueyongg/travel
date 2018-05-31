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


export default class HomepageLayout extends Component {

  render() {
    return (
      <ResponsiveContainer>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={6}>
                <Image
                  bordered
                  rounded
                  fluid
                  src="https://react.semantic-ui.com/assets/images/wireframe/image-text.png"
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </ResponsiveContainer>
    );
  }
}
