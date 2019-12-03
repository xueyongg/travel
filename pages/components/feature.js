import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Embed
} from "semantic-ui-react";
import Link from "next/link";

const placeholderImagePath = "../../static/images/placeholder/image-placeholder.png";

export default class FeatureComponent extends Component {
  state = {
    header: "",
    description: "",
    src: "",
    imagePosition: "",
    buttonText: "",
    buttonUrl: "",
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
      imageSrc, 
      isVideo,
      videoSource,
      videoPlaceholderImage,
      imagePosition,
      buttonText,
      buttonUrl,
    } = this.state;
    
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            {imagePosition === "left" ? (
              <Grid.Column floated="left" width={6}>
                <FeatureMediaComponent
                  isVideo={isVideo}
                  src={src? src:placeholderImagePath}
                  videoPlaceholderImage={videoPlaceholderImage
                    ? videoPlaceholderImage
                    : placeholderImagePath}
                  videoSource={videoSource}
                  imageSrc={
                    imageSrc ? imageSrc
                    : placeholderImagePath
                  }
                />
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
                <FeatureMediaComponent
                 isVideo={isVideo}
                 src={src? src:placeholderImagePath}
                 videoPlaceholderImage={videoPlaceholderImage
                   ? videoPlaceholderImage
                   : placeholderImagePath}
                 videoSource={videoSource}
                 imageSrc={
                   imageSrc ? imageSrc
                   : placeholderImagePath
                 }
                />
              </Grid.Column>
            ) : (
              ""
            )}

          </Grid.Row>
          {buttonUrl && <Grid.Row>
            <Grid.Column textAlign="center">
            <Link
                href={buttonUrl}
                passHref
                prefetch
              >
              <Button animated size="huge" labelPosition='right' > 
                <Button.Content visible>
                  {buttonText ? buttonText : "Check Them Out"}
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
          }
          
        </Grid>
      </Segment>
    );
  }
}

FeatureComponent.PropTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  src: PropTypes.string,
  imagePosition: PropTypes.string,
  buttonText: PropTypes.string,
  isVideo: PropTypes.bool,
}


class FeatureMediaComponent extends Component{
  state = {}
  
  componentWillMount(){
    this.state = this.props
  }
  render(){
    let {
      src,
      imageSrc, 
      isVideo,
      videoSource,
      videoPlaceholderImage,
    } = this.state;
    return(
     <div>
       {isVideo? 
        <Embed
        autoplay={false}
        color='white'
        id={src}
        iframe={{
          allowFullScreen: true,
          style: {
            padding: 10,
          },
        }}
        placeholder={videoPlaceholderImage}
        source={videoSource} 
        />
        : 
        <Image bordered rounded fluid src={imageSrc} />
    }
     </div> 
    )
  }
}