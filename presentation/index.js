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
  Typeface
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  codeBg: "#2a3b4c",
  yellow: "#facd67",
  grey: "#d9d8d7",
  red: "#f76c5f",
  blue: "#5f80a1",
  green: "#8ebb69",
  pink: "hotpink"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[""]}
        transitionDuration={500}
        theme={theme}
        controls={false}
        bgColor="codeBg"
      >
        <CodeSlide
          bgColor="codeBg"
          lang="js"
          notes={
            `<ul>
            <li>Extreme example but shows the problem at hand</li>
            <li>Lack of consistency can have a direct relationship on productivity</li>
            </ul>`
          }
          code={`const func=(x)=>{return x;};
const foo={x:1,y:2};
[1,2,3,4].map((i)=>i + 1)
  .filter((i)=>i%2)
  .reduce((a,b)=>a+b)
  
  











const func = (x) => { return x; };

const foo = { x : 1, y : 2 };

[1, 2, 3, 4]
  .map((i) => i + 1)
  .filter((i) => i % 2)
  .reduce((a, b) => a + b);`}
          ranges={[
            { loc: [0, 5] },
            { loc: [18, 26] }
          ]}
        />
        <Slide transition={[""]} bgColor="codeBg">
          <Typeface googleFont="Dancing Script" weight={400}>
            <Heading size={1} fit lineHeight={1} textColor="yellow">
              Prettier
            </Heading>
            <div style={ { width: 50, margin: "0 auto" } }>
              <a href="https://github.com/prettier/prettier">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77">
                  <path style={ { fill: "#d9d8d7" } } d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75A0.82,0.82,0,0,0,12.25,31c0-.39,0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,0.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18C9.7,23.08,5.9,21.68,5.9,15.44a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67A5.85,5.85,0,0,1,25,11.07a6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47a0.82,0.82,0,0,0,1.12.78A16.29,16.29,0,0,0,16.29,0Z"/>
                </svg>
              </a>
            </div>
          </Typeface>
        </Slide>
        <Slide transition={["slide"]} bgColor="codeBg" notes={
            `<ul>
            <li>Takes code as input then passes that through a parser that returns an AST which is then printed by prettier</li>
            <li>Prettier gets rid of all original styling and guarantees consistency by parsing JavaScript into an AST and pretty-printing the AST</li>
            <li>Completely ignores all formatting of the given input</li>
            <li>Makes intelligent decisions concerning problems like max line length</li>
              <uL>
              <li>Understands that line length has a direct impact on coding style</li>
              <li>Will split code based on groupings.</li>
              <li>Groups are often nested and the printer will try to fit everything on one line, but if it doesn't fit it will break the outermost group first and try again</li>
              </ul>
            <li>ES2017, JSX, and flow support</li>
            <li>Limited config on purpose</li></ul>`
          }
        >
          <Heading size={1} textColor="white" caps>How it works</Heading>
          <div>
            <svg style={ { width: 250, marginTop: 50 } } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.5 425.1">
              <circle className="cls-1" cx="175.66" cy="30" r="28.5"/>
              <circle className="cls-2" cx="248.5" cy="159.5" r="28.5"/>
              <circle className="cls-2" cx="102.83" cy="159.5" r="28.5"/>
              <line className="cls-3" x1="156.5" y1="51.1" x2="112.16" y2="131"/>
              <line className="cls-3" x1="241.04" y1="130.5" x2="194.96" y2="51.59"/>
              <circle className="cls-4" cx="102.83" cy="265.6" r="28.5"/>
              <circle className="cls-2" cx="175.66" cy="395.1" r="28.5"/>
              <circle className="cls-2" cx="30" cy="395.1" r="28.5"/>
              <line className="cls-3" x1="83.67" y1="286.69" x2="39.33" y2="366.6"/>
              <line className="cls-3" x1="168.2" y1="366.1" x2="122.12" y2="287.19"/>
              <line className="cls-3" x1="102.83" y1="188" x2="102.83" y2="237.1"/>
              <circle className="cls-4" cx="248.5" cy="261.64" r="28.5"/>
              <line className="cls-3" x1="248.5" y1="184.05" x2="248.5" y2="233.14"/>
            </svg>
          </div>
        </Slide>
        <CodeSlide
          notes={`handleMemberExpressionComments
        handleIfStatementComments
        handleTryStatementComments
        handleClassComments
        handleImportSpecifierComments
        handleObjectPropertyComments
        handleForComments`}
          bgColor="codeBg"
          transition={[""]}
          lang="js"
          maxWidth={1200}
          code={`function format(code, opts) {
// parse based on chosen parser option, 
// flow|babylon and generate the ast
const ast = parse(code, opts);
// do a whole lot of comment checking
const astComments = attachComments(
  code, 
  ast, 
  opts
);
const doc = printAstToDoc(ast, opts);
const str = printDocToString(
  doc, 
  opts.printWidth, 
  guessLineEnding(code)
);
ensureAllCommentsPrinted(astComments);
// enjoy 😀
return str;
}`
          }
          ranges={[
            { loc: [0, 1], title: "the entire api" },
            { loc: [1, 4] },
            { loc: [4, 10] },
            { loc: [10, 17] },
            { loc: [17, 19] }
          ]}
        />
        <Slide
          transition={[""]}
          bgColor="codeBg"
          textColor="green"
          notes={`<ul>
            <li>- eslint in a lot of ways can identify problems that we configure it to identify
            but it does not have the capabilities to resolve most of them.</li>
            <li>- prettier looks at the input and takes into consideration some edge cases</li>
            <li>- examples being: indentation, newlines, expanded objects</li>
          </ul>`}
        >
          <BlockQuote>
            <Quote textColor="white">12,817 nits on GitHub. ESLint isn’t solving the problem</Quote>
            <Cite textColor="blue">Christopher Chedeau</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="codeBg"
          textColor="green"
        >
           <Heading size={1} textColor="white" caps>Ease of Integration</Heading>
        </Slide>
        <Slide
          transition={[""]}
          bgColor="codeBg"
          textColor="green"
          maxWidth={1200}
        >
           <List>
            <ListItem>Includes a CLI</ListItem>
            <ListItem><a style={ { color: "#8ebb69" } } href="https://prettier.github.io/prettier/">REPL</a></ListItem>
            <ListItem>JavaScript API</ListItem>
            <ListItem>Allows for ignores via comment primitives</ListItem>
            <ListItem>Easy integrated in a wide varieties of IDEs</ListItem>
            <ListItem>Can be run easily as precommit hook</ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="codeBg"
          textColor="green"
        >
           <Heading size={1} textColor="white" caps>Why?</Heading>
        </Slide>
        <CodeSlide
          bgColor="codeBg"
          textColor="green"
          lang="js"
          notes={`
            <ul>
            <li>Aids in productivity which in turn makes us more efficient</li>
            <li>Allow developers to move past the nuances and subjectivity and simply write code</li>
            <li>Brings consistency among teams as a project grows and people fluxuate</li>
            </ul>
          `}
          code={`// 1.
func(foo, bar, bazz)
// 2.
func(foo, 
  bar, 
  bazz)
// 3.
func(
  foo, 
  bar, 
  bazz
)
// etc.`}
          ranges={[
            { loc: [0, 2] },
            { loc: [2, 6] },
            { loc: [6, 12] },
            { loc: [12, 13], title: "Too many options" }
          ]}
        />
        <Slide
          transition={[""]}
          bgColor="codeBg"
          textColor="green"
        >
           <Heading size={1} textColor="white" caps>Demo</Heading>
        </Slide>
      </Deck>
    );
  }
}
