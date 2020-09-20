/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { store } from 'react-notifications-component'
import ReactNotification from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'
import 'animate.css'

import PropTypes from "prop-types"
import Image from "../components/image"
import _ from 'lodash'
import { faEnvelopeOpen, faMobileAlt} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

import { createGlobalStyle } from "styled-components"

import { Link } from "gatsby"
import { Box, Flex, Text } from 'rebass'
import { ThemeProvider } from 'emotion-theming'
import theme from '../themes/theme.js'

import {
  Position,
  // Relative,
  // Absolute,
  // Fixed,
  // Sticky
} from '@rebass/position'


function MenuItems({ sections }) {
  return _.map(sections, item => 
        <Box sx={{
          pl: [1,3,3],
          ml: [1,0,0],
          pt: ["2px","3px","6px"],
          pb: ["1px","2px","4px"],
          mb: 1,
          color: ['#394A56','black','black'],
          fontSize: ["12px","15px",2],
          ':hover': {
            color: 'oran',
          },
          transition: 'all 0.2s',
          transitionTimingFunction:  'linear'
        }}>
      <Link to={item.link} target={item.target} style={{
        textDecoration: 'none',
        color: 'inherit',
        }}>
        <Text fontFamily='Roboto Condensed, sans-serif'
              color='inherit'
              fontWeight='bold'>
          {item.label}
        </Text>
      </Link>
      </Box>
  );
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  store.addNotification({
    title: text,
    message: 'Copied to clipboard',
    type: 'success',                         // 'default', 'success', 'info', 'warning'
    container: 'bottom-center',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000
    }
  });
}

function getAlert(text){
  return () => text? copyToClipboard(text) : null
}

function ContactItems({ contacts }) {
  return _.map(contacts, item => 
    <Flex sx = {{
      ':hover': {
        color: 'gree',
      },
      pr: [3,0,0],
      // bg: 'red',
      fontSize: ['12px','10px', '12px'],
      color: ['gree','plainDark','plainDark'],
    }} onClick={getAlert(item.copy)}>
      <Box sx={{
          p: 1,
          pl: ['6px',"10px",'10px'],
          width: [103,170,200],
          display: ['none','inherit','inherit'],
          textAlign: ['right','left','left'],
        }}>
       <a style={{color: 'black', textDecoration: 'none', fontFamily :'Roboto Condensed, sans-serif'}} href = {item.href}>{item.link}</a>
      </Box>
      <Box sx={{
          p: 1,
          // pl: 0,
          // bg: 'red',
          width: [20,30,30],
          flexGrow: 0,
          textAlign: ['center','center','center'],
        }}>
        <a style={{color: 'inherit', textDecoration: 'none'}} href = {item.href}>{item.icon}</a>
      </Box>
  </Flex>
  );
}



const myContacts = [
  {
    'link': 't.abbiasov@columbia.edu',
    'type': 'email',
    'copy': 't.abbiasov@columbia.edu',
    'icon': <FontAwesomeIcon icon={faEnvelopeOpen}/>,
    // 'href': "mailto: t.abbiasov@columbia.edu"
  },
  {
    'link': '(646) 940-56-92',
    'type': 'phone',
    'copy': '(646) 940-56-92',
    'icon': <FontAwesomeIcon icon={faMobileAlt} />
  },
  {
    'link': 'github.com/tabbiasov',
    'type': 'github',
    'icon': <FontAwesomeIcon icon={faGithub} />,
    'href': "https://github.com/tabbiasov"
  }
]

const pageSections = [
  {label: 'About', link: '#'},
  {label: 'Research', link: '/#research'},
  {label: 'Teaching', link: '/#teaching'},
  {label: 'Skills', link: '/#skills'},
  {label: 'CV', link: 'https://tabbiasov.github.io/resume/',target: '_blank'},
];


const Layout = ({ children }) => {
  const GlobalStyles = createGlobalStyle`
     body {
      font-family: 'Source Sans', sans-serif;
      font-size: 15px;
     }
     html {
      scroll-behavior: smooth;
    }
  `

  return (
    <ThemeProvider theme={theme}>
      <ReactNotification/>
      <GlobalStyles/>
        <Position 
          position="sticky"
          zIndex={1}
          top={0}
          left={[0, 0, 0, 0, 0, 'auto']}
          right={['auto', 'auto', 'auto', 'auto', 'auto', 0]}>
          <Flex
            sx={{
              borderBottom: '2px solid',
              borderBottomColor: 'gree',
              
              height: ["50px","50px","60px"],
              fontSize: ["13px",2,2],
              px:[1,1,2],
            }}
            color='black'
            bg='white'
            alignItems='center'>
             <Box sx={{
               maxWidth: [80,999,999]
             }}><Text fontWeight='bold'><h3 >Timur Abbiasov</h3></Text></Box>
            <Box mx='auto' />
            <Flex sx={{
                        flexDirection: 'row',
                        opacity: [1,0,0],
                        // bg: 'red',
                        justifyContent: 'space-evenly',
                        maxWidth: ['90vw', 0, 0],
                        flexGrow:10,
                      }}>
                      <MenuItems sections={pageSections} />
            </Flex>
          </Flex>
        </Position>
        <Flex
          sx={{
            flexDirection: 'column',
            minHeight: '90vh',
          }}>
          <Flex
            sx={{
              flex: 1,
              // bg: 'red',
            }}>   
            <Box
              sx={{
                py: [0,2,3],
                pl: [0,'8px','12px'],
                pr: [0,'4px','4px'],
                minHeight: 120,
                flexGrow: 1,
                // bg: 'red',
                opacity: [0,1,1],
                maxWidth: [0, '90vw', '90vw'],
                flexBasis: [128,200,230],
                mr: [0,0,0],
              }}>
              <Position 
              position='sticky'
              top = '60px'>
                <Flex
                  sx={{
                    pt: [0,0,2],
                    px: 0,
                    overflow: 'hide',
                    justifyContent: 'flex-start',
                    bg: 'rbg(1,1,1,0)',
                    height: '90vh',
                    flexGrow: 1,
                    flexBasis: 100,
                    flexDirection: 'column'
                  }}>
                  <Box
                  sx={{
                    mt:[0,2,2],
                    bg: 'black',
                    mb: [0,2,2],
                    '@media screen and (max-height: 600px)': {
                      opacity: 0,
                      maxWidth: 0
                    },
                    // opacity: [0,0,1],
                    // maxWidth: [0,0,999],
                    }}>
                    <Image/>
                  </Box>
                  <Box
                    sx={{
                      p:0,
                      pt:2,
                      pb:2,
                      mb: 2,
                      mt: '2vh',
                      bg: 'plainLight',
                      // fontSize: '24px',
                      // bg: 'white',
                      // borderStyle: 'solid',
                      // borderWidth: '1px',
                      // borderColor: '#C2CED6',
                      }}>
                    <Flex sx={{
                        flexDirection: 'column',
                      }}>
                      <MenuItems sections={pageSections} />
                    </Flex>
                  </Box>
                  <Box
                    sx={{
                      p:0,
                      pt:2,
                      pb:2,
                      my: '2vh',
                      color: 'black',
                      fontSize: '12px',
                      bg: 'plainLight',
                      // borderStyle: 'solid',
                      // borderWidth: '1px',
                      // borderColor: 'plain',
                      }}>
                    <Flex sx={{
                        flexDirection: 'column',
                      }}>
                      <ContactItems contacts={myContacts} />
                    </Flex>
                  </Box>
                </Flex>
              </Position>
              
            </Box>
            <Box
              sx={{
                py: [0,1,2],
                // bg: 'blue',
                pl: ['0px','2px','8px'],
                flexGrow: 999999,
                flexBasis: 200,
                minWidth: 320,
                scrollBehavior: 'smooth'
              }}>
              <Flex sx={{
                        flexDirection: 'row',
                        opacity: [1,0,0],
                        // bg: 'blue',
                        flexGrow: 1,
                        pt:1,
                        maxHeight: ['20vw', 0, 0],
                        maxWidth: ['100vw', 0, 0],
                        justifyContent: 'flex-end',

                      }}>
                      <ContactItems contacts={myContacts} />
              </Flex>
              <Flex
                sx={{
                  p: 3,
                  // bg : 'red',
                  mt:0,
                  flexDirection: 'column',
                  scrollBehavior: 'smooth'
                }}>
                {children}
              </Flex>
            </Box>
          </Flex>
        </Flex>
    </ThemeProvider>
  )
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
