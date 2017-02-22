// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/react.png"),
  fire: require("../assets/fire.png"),
  sapient: require("../assets/sapient.png"),
  toilets: require("../assets/toilets.png"),
  mobx: require("../assets/mobx2.png"),
  flow: require("../assets/flow.png"),
  mobxflownotext: require("../assets/mobx_flow_notext.png")
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
          <Heading size={3} textColor="secondary">React London - BYOP<br/>February 2017</Heading>
          <Image src={images.react} height={300}/>
          <Text textSize={32} textColor="secondary">@mcleo_d</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Welcome Back!<br/>2017</Heading>
          <Image src={images.react} height={400}/>
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
          <Heading size={3} textColor="secondary">React London -  BYOP Stats</Heading>
          <h2>451 London React Members</h2>
          <h2>87 Additional Members</h2>
          <h2>4 Project Nights</h2>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Next React London<br/>Bring Your Own Project</Heading>
          <br/>
          <Text size={6} textColor="secondary">March 29th 2017 Being Planned</Text>
          <Text size={6} textColor="secondary">Lightning Talk and Project Themes</Text>
          <br/>
          <Text textSize={32} textColor="secondary">@mcleo_d</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="secondary">React London<br/>Bring Your Own Project</Heading>
          <Heading size={3} textColor="secondary" lineHeight={2}>News</Heading>
          <Image src={images.react} height={400}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" lineHeight={2}>Check Out Prettier</Heading>
          <BlockQuote>
            <Quote textSize={30}>
              @mcleo_d npm.im/prettier-eslint
              <br/><br/>
              and npm.im/prettier-eslin… received some updates.
              <br/><br/>
              And npm.im/nps also got some updates...
            </Quote>
            <Cite textColor="black">@kentcdodds</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" lineHeight={2}>Cypress Worth Investigating</Heading>
          <BlockQuote>
            <Quote textSize={30}>
              @mcleo_d also, @Cypress_io is pretty incredible
              <br/><br/>
              and people should look into it...
            </Quote>
            <Cite textColor="black">@kentcdodds</Cite>
          </BlockQuote>
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
          <Heading size={2} textColor="secondary">Have you heard of</Heading>
          <Heading size={4} textColor="secondary">MobX?</Heading>
          <Image src={images.mobx} height={300}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} fit textColor="secondary">Transparent Reactive<br/>Programming Library</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} fit textColor="secondary">MobX is all about State</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} fit textColor="secondary">State is the root of all Evil</Heading>
          <br/>
          <Heading size={1} textColor="secondary">😈</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary" lineHeight={2}>The view is a ...</Heading>
          <Heading size={6} textAlign="left" textColor="secondary">... Function of the State</Heading>
          <Heading size={6} textAlign="left" textColor="secondary">... Transformation of the State</Heading>
          <br/>
          <CodePane lang="javascript" textSize={32}>
            view = f(state)
          </CodePane>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">Consistency is guaranteed</Heading>
          <Heading size={6} textColor="secondary">Regardless how or when state is changed</Heading>
          <br/>
          <Image src={images.mobxflownotext} height={145}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">MobX Application Hooks</Heading>
          <List>
            <ListItem textSize={34}>
              <strong>Observable</strong>
              <List padding="none">
                <ListItem textSize={34}>Mark data as trackable</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={34}>
              <strong>Autorun / Observer</strong>
              <List padding="none">
                <ListItem textSize={34}>Automatically run if relevant state changed</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={34}>
              <strong>Computed</strong>
              <List padding="none">
                <ListItem textSize={34}>Derive value, if needed</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={34}>
              <strong>Action</strong>
              <List padding="none">
                <ListItem textSize={34}>Indicates that state will be changed</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">What does Observable do?</Heading>
          <CodePane lang="javascript" textSize={20} source={require("raw-loader!./code-examples/observable-2.example")}/>
          <Text textAlign="left" textSize={30} lineHeight={2}>Transforms to something like</Text>
          <CodePane lang="javascript" textSize={20} source={require("raw-loader!./code-examples/observable-1.example")}/>
          <Text textAlign="left" textSize={30} lineHeight={2}>It observes the properties not the object and not the values</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">What does Computed do?</Heading>
          <Text textAlign="left" textSize={30} lineHeight={2}>These are derived values that run on demand</Text>
          <CodePane lang="javascript" textSize={20} source={require("raw-loader!./code-examples/computed-1.example")}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">What does Autorun do?</Heading>
          <Text textAlign="left" textSize={30} lineHeight={2}>These execute side effects</Text>
          <CodePane lang="javascript" textSize={20} source={require("raw-loader!./code-examples/autorun-1.example")}/>
          <Text textAlign="left" textSize={30} lineHeight={2}>Runs on registration and when observable changes</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">MobX tracks the executed Autorun</Heading>
          <br/>
          <CodePane lang="javascript" textSize={20} source={require("raw-loader!./code-examples/autorun-2.example")}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">Mutating state can be messy</Heading>
          <br/>
          <CodePane lang="javascript" textSize={20} source={require("raw-loader!./code-examples/actions-1.example")}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps textColor="secondary">Actions set observables that<br/>envoke reactions</Heading>
          <br/>
          <Image src={images.flow} height={350}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" lineHeight={2}>Redux Compare Request</Heading>
          <BlockQuote>
            <Quote textSize={30}>
              @mcleo_d Would be great if you could do a bit of
              <br/><br/>
              contrast between MobX and Redux
              <br/><br/>
              during your talk tomorrow evening.
            </Quote>
            <Cite textColor="black">@ChrisTrotterNI</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="secondary" lineHeight={2}>So I asked @mweststrate</Heading>
          <BlockQuote>
            <Quote textSize={30}>
              @mcleo_d - Will be talking at React Amsterdam and
              <br/><br/>
              React Europe about mobx-state-tree, opiniated
              <br/><br/>
              state container, including time traveling and such
              <br/><br/>
              :)
            </Quote>
            <Cite textColor="black">@mweststrate</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit textColor="secondary">Quick Example</Heading>
        </Slide>
      </Deck>
    );
  }
}
