import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout.jsx"
// import SEO from "../components/seo"
import { Box, Flex } from 'rebass'
import _ from 'lodash'

// import { ThemeProvider } from 'emotion-theming'
// import theme from '../themes/theme.js'

const textSizes = ['15px','15px','16px'];
const headTextSizes = ['20px','28px', '32px'];
const smallTextSizes = ['12px','12px', '14px'];
const titleTextSizes = ['16px','18px', '20px'];

const myResearch = [
  
  {
    'title': 'Do urban parks promote racial diversity in social interactions? Evidence from New York City',
    'authors': [],
    'abstract': "In this paper I introduce a measure of racial diversity that captures one's level of exposure to diverse others in places visited on a daily basis utilizing a novel dataset featuring individual GPS tracking data for more than 60 thousand Twitter users in the New York metro area, collected over a six-month period. My empirical strategy relies on using the variation in the timing of park construction works across the city, which temporarily limit the capacity of said parks, to identify the impact of the effectively accessible parkland area on the individual experienced diversity.",
    'pdflink': 'https://tabbiasov.github.io/resume/',
    'tags' : [{'name': 'Job Market Paper', 'color': 'oranLight'},{'name': 'Working Paper'}],
    'open': 1
  },
  {
    'title': 'Do Local Businesses Benefit from Stadiums? An Empirical Study of Major Sports Leagues Using Mobile Location Data',
    'authors': ['with Dmitry Sedov'],
    'pdflink': 'https://tabbiasov.github.io/resume/',
    'tags' : [{'name': 'Working Paper'}],
    'open' : 0,
    'abstract': "While substantial amounts of public funds have been historically allocated to stadium construction projects on the grounds of potential positive spillover effects stadiums generate for local businesses, the lack of plausible variation in the data has rendered difficult the task of actually estimating these spillovers. In this paper we use daily visit counts to Major Sports Leagues stadiums and local businesses as well as the information on game dates to overcome these difficulties, estimating the spillover effects and exploring the heterogeneity of spillover benefits by industries and distance."
  }
]


function AuthorItems({ authors }) {
    return _.map(authors, author =>
      <Box sx={{
        ml:3, py: '3px', px: '6px',
        color: 'black',
        fontWeight: 'normal',
        bg:'#E8F6E0',
        fontSize: smallTextSizes,
        // fontFamily: 'slab',
        display: 'inline-block',
        }}>
        <span>{author}</span>
      </Box>
    )
}

function PaperTags({ tags }) {
  return _.map(tags, tag =>
    <Box sx={{
      ml:[2,2,3], py: '3px', px: '6px',
      color: 'black',
      fontWeight: 'normal',
      bg: tag.color ? tag.color : 'plainLight',
      fontSize: smallTextSizes,
      }}>
      <span>{tag.name}</span>
    </Box>
  )
}


class ResearchItem extends React.Component {
  constructor(props) {
    super();
    this.state = {open: props.item.open};
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState({ open: !this.state.open });
  }
 
  render () {
    return (
      // <ThemeProvider theme={theme}>
      <Flex   
        sx={{
          p: [2,2,3],
          pl:0,
          ml:0,
          color: 'black',
          pt: 1,
          height: 'auto',
          maxHeight: (this.state.open ? 9999 : 200),
          flexBasis: 160,
          transition: 'max-height 0.7s ease-in-out',
        }}>
        
        <Flex sx={{
            bg:'white',
            p: [2,3,3],
            ml:[1,1,2],
            pt: [2,1,1],
            pb:[1,2,3],
            flexGrow: 1,
            color: 'plainDark',
            flexDirection: 'column',
            borderStyle: 'solid',
            ':hover': {
              color: 'oran',
            },
            borderColor: (this.state.open ? 'oran' : 'plain'),
            borderWidth: "1px",
            mt:0,
          }} onClick={this.toggleOpen}>
          <Box sx={{
             bg:'white',
             px:[2,2,2],
             pb:0,
             pt:[2,3,"24px"],
            //  py:[3,5,6],
             fontWeight: 'bold',
             fontSize: titleTextSizes,
             color: 'black',
             flexGrow: 99,
             transition: 'all 0.3s linear',
          }}>
           {this.props.item.title}
          </Box>
          <Box sx={{
             bg:'white',
             p:2,
             pt: [2,"16px","24px"],
             flexGrow: 99,
            //  display: (this.state.open ? 'inherit' : 'none'),
             opacity: (this.state.open ? 1 : 0),
             maxHeight: (this.state.open ? 400 : 0),
             overflow: 'hidden',
             color: '#223144',
             fontSize: textSizes,
             transition: 'all 0.7s ease-in-out',
          }}>
           {this.props.item.abstract}
          </Box>
          <Flex sx={{
             p:1,
             pr:[1,10,14],
             bg: 'white',
             flexGrow: 1,
             mt: [0,1,1],
             justifyContent: 'flex-end'
          }}>
            <Box sx={{
              pl:1, pr:1,
              opacity: (this.state.open ? 0 : 1),
              // color: 'plainDark',
              mx: 'auto',
              ml:0,
              fontWeight: 'normal',
              bg:'white',
              transition: 'all 0.3s linear',
              fontSize: smallTextSizes,
              }}>
              <span>&lt;Abstract...&gt;</span>
            </Box>
            <Box>
              <AuthorItems authors = {this.props.item.authors}>
              </AuthorItems>
            </Box>
            <Flex>
              <PaperTags tags = {this.props.item.tags}>
              </PaperTags>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      // </ThemeProvider>
    );
  }
}

class ResearchItems extends React.Component {
  render () {
    return _.map(this.props.items, item => 
      <ResearchItem item = {item} state = {{open:item.open}}/>
    );
  }
}


// class PaperDetail extends React.Component {
//   state = {
//     index: 0
//   };

//   onToggle = index =>
//     this.setState(state => ({ index: state.index === index ? null : index }));

//   render() {
//     return (
//       <section className="paperDetail">
//        <div className={classNames("item", { "item--active": this.state.index === 1 })}>
//           <button className="btn" onClick={() => this.onToggle(1)}>
//             <span>select 1</span> <span>{this.state.item1}</span>
//           </button>
//           <Collapse
//             className="collapse"
//             isOpen={this.state.index === 1}
//             onChange={({ state }) => {
//               this.setState({ item1: state });
//             }}
//             onInit={({ state }) => {
//               this.setState({ item1: state });
//             }}
//             render={collapseState => createContent(collapseState)}
//           />
//         </div>
//       </section>
//     );
//   }
// }

// function createContent(collapseState) {
//   return (
//     <div className={`content ${collapseState}`}>
//       <p className="text">
//         <span className="state">{collapseState}:</span> Lorem ipsum dolor sit
//         amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
//         <a href="#">link</a>
//       </p>
//       <div className="image-wrapper">
//         <img
//           className="image-wrapper__img"
//           alt="random"
//           src="https://source.unsplash.com/user/erondu/500x200"
//         />
//       </div>
//     </div>
//   );
// }


const ResearchPage = (props) => {

  return (
    <Box>
      <span id='research'></span>
      <Box sx={{
        px:[0,2,2],
        pt:2,
        mt:3,
        // bg: 'red',
        pb:2,
        borderTop: '2px solid',
        borderTopColor: 'black',
        fontSize: ['10px','12px', '15px'],
      }}>
        <h1 >Research</h1>
        {/* <br/> */}
        <ResearchItems items={myResearch} />
      </Box>
    </Box>
  )
}



export default ResearchPage
