// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  react: require("../assets/react.png"),
  fire: require("../assets/fire.png"),
  sapient: require("../assets/sapient.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} textColor="secondary">React London - BYOP<br/>March 2017</Heading>
          <Image src={images.react} height={300}/>
          <Text textSize={32} textColor="secondary">@mcleo_d</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Wifi Details</Heading>
          <hr/>
          <Text size={6} textColor="secondary"><strong>Name:</strong> guestnet</Text>
          <Text size={6} textColor="secondary"><strong>Security Type:</strong> WPA2-Personal</Text>
          <Text size={6} textColor="secondary"><strong>Password:</strong> hold84pain</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.fire} height={600}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary">Our Hosts and Sponsors</Heading>
          <Heading size={2} fit textColor="secondary">SapientRazorfish</Heading>
          <br/>
          <Image src={images.sapient} height={250}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Statistics</Heading>
          <Heading size={4} textColor="secondary">React London -  BYOP</Heading>
          <hr/>
          <Text size={6} textColor="secondary"><strong>470 London React Members</strong></Text>
          <Text size={6} textColor="secondary"><strong>19 Additional Members</strong></Text>
          <Text size={6} textColor="secondary"><strong>5 Project Nights</strong></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Next React London<br/>Bring Your Own Project</Heading>
          <br/>
          <Text size={6} textColor="secondary">April 2017 Being Planned</Text>
          <Text size={6} textColor="secondary">Always looking for Lightning Talks</Text>
          <br/>
          <Text textSize={32} textColor="secondary">@mcleo_d</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="secondary">React London<br/>Bring Your Own Project</Heading>
          <Heading size={3} caps fit textColor="secondary">News</Heading>
          <Image src={images.react} height={200}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Your Announcements</Heading>
          <Image src={images.react} height={400}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Lightning Talks</Heading>
          <Image src={images.react} height={400}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Thank You</Heading>
          <Text size={6} textColor="secondary">Please push your slides</Text>
          <Image src={images.react} height={400}/>
        </Slide>
      </Deck>
    );
  }
}
