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
  MarkdownSlides,
  CodePane,
  Layout,
  Fit,
  Fill,
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

  flow: require("../assets/flow.png"),
  cookoo: require("../assets/cookoo.jpg"),
  nachapp: require("../assets/nachapp.jpg"),
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
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Image height={200} src={images.flow}></Image>
          <Heading size={1} fit textColor="secondary" margin={40}>
            Detecting errors in React apps,<br />before they ever happen, with Flow
          </Heading>
          <Heading size={5} textColor="tertiary">James Isaac</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Layout>
            <Fill>
              <Image src={images.cookoo} width={920}></Image>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="primary">nachapp.com</Heading>
          <Layout>
            <Fill>
              <Image src={images.nachapp} width={920}></Image>
            </Fill>
          </Layout>
        </Slide>
        {MarkdownSlides`
## Why static typing?
- Bring structure to large projects
- Self-documenting code
- Compile-time error checking
- Proptypes are a hack
- Refactoring

---

## Data types
        `}
        <Slide>
          <Heading size={3}>Primitives, nullable</Heading>
          <CodePane lang="javascript" textSize={30} source={`
// @flow

let n: number = 1
n += 3

let n: ?string
n = 'Hello!'
          `} />
        </Slide>
        <Slide>
          <Heading size={3}>Functions</Heading>
          <CodePane lang="javascript" textSize={30} source={`
function capitalize(input: string): string {
  return input.substr(0, 1).toUpperCase()
    + input.substr(1)
}

const user = { firstName: 'John', lastName: null }
capitalize(user.lastName)
// Flow error: null is not compatible with string
          `} />
        </Slide>
        <Slide>
          <Heading size={3}>Objects</Heading>
          <CodePane lang="javascript" textSize={30} source={`
type Comment = {
  author?: string,
  content: string,
  postedAt: number,
}

const c: Comment = {
  content: 'My first comment',
}
// Flow error: required property 'postedAt' missing
          `} />
        </Slide>
        <Slide>
          <Heading size={3}>Union and intersection</Heading>
          <CodePane lang="javascript" textSize={30} source={`
type Status = 'pending' | 'success' | 'failure'

type CommentWithStatus = Comment & {
  status: Status,
}
          `} />
        </Slide>
        {MarkdownSlides`
### More...

- Arrays
- Generics
- Classes
- Tuples

---

## Real-world uses for flow
        `}
        <Slide>
          <Heading size={3}>Models</Heading>
          <CodePane lang="javascript" textSize={30} source={`
type Contact = {
  firstName: string,
  lastName: ?string,
  timesCalled: number,
}

const getFullName(c: Contact): string =>
  [c.firstName, c.lastName]
    .filter(Boolean)
    .join(' ')
          `} />
        </Slide>
        <Slide>
          <Heading size={3}>React, RN</Heading>
          <CodePane lang="javascript" textSize={28} source={`
type Props = {
  contact: Contact,
  size?: 'small' | 'med' | 'large',
}

const ContactRow = ({ contact, size = 'med' }: Props) =>
   <View style={styles[size]}>
     {contact.photo && <Image source={contact.photo} />}
     <Text>{getFullName(contact)}</Text>
   </View>
          `} />
        </Slide>
        <Slide>
          <Heading size={3}>Redux Reducers</Heading>
          <CodePane lang="javascript" textSize={30} source={`
type UserState = {
  username: string,
  apiKey: string,
}

type AuthState = {
  user: UserState | null,
}
          `} />
        </Slide>
        <Slide>
          <CodePane lang="javascript" textSize={30} source={`
export default function auth(
  state: AuthState = { user: null },
  action: Action
): AuthState {
  if (action.type === 'LOGIN') {
    return { user: action.payload }
  } else if (action.type === 'LOGOUT') {
    return initialState
  }
  return state
}
          `} />
        </Slide>
        <Slide>
          <Heading size={3}>Actions</Heading>
          <CodePane lang="javascript" textSize={30} source={`
export type Action =
    { type: 'LOGIN', payload: UserState }
  | { type: 'LOGOUT' }
  | { type: 'POST_COMMENT', payload: string }
          `} />
        </Slide>
        <Slide>
          <Heading size={3}>Redux Store</Heading>
          <CodePane lang="javascript" textSize={30} source={`
import type { Store as ReduxStore } from 'redux'

export type Store = ReduxStore<RootState, Action>
          `} />
        </Slide>
        {MarkdownSlides`
## Weaknesses

- Currying/partial application (.bind)
- ES6 spread
- Must keep external references updated
- Unsupported libraries
- Libraries with errors (RN)
- Server restarts / multi projects

---

## Vs Typescript

- Doesn't require own compiler / .ts files -- gradual typing
- Solid type system foundation - nullable from day one etc
- Strong inference
- Facebook support
        `}
        <Slide bgColor="tertiary">
          <Heading size={2} textColor="primary">Thank You</Heading>
          <List textColor="primary">
            <ListItem>flowtype.org</ListItem>
            <ListItem>jamesisaac.me</ListItem>
            <ListItem>@dotajames</ListItem>
            <ListItem>nachapp.com</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
