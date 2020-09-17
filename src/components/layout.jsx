/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Image from "../components/image"
import _ from 'lodash'
import SmoothScroll from 'smooth-scroll'
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
          p: 3,
          pt: 1,
          mb: 1,
          pb: 1,
          color: 'black',
          // borderRadius: '3px',
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
        <Text fontFamily='heading'
              fontSize={2}
              color='inherit'
              fontWeight='bold'>
          {item.label}
        </Text>
      </Link>
      </Box>
  );
}

function ContactItems({ contacts }) {
  return _.map(contacts, item => 
    <Flex sx = {{
      ':hover': {
        color: 'black',
      },
      color: 'plainDark',
    }}>
      <Box sx={{
          p: 1,
          pl: 3,
          width: 170,
          textAlign: 'left',
        }}>
       <a style={{color: 'black', textDecoration: 'none'}} href = {item.href}>{item.link}</a>
      </Box>
      <Box sx={{
          p: 1,
          width: 30,
          flexGrow: 0,
          float: 'center',
          textAlign: 'center',
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
    'icon': <FontAwesomeIcon icon={faEnvelopeOpen}/>,
    'href': "mailto: t.abbiasov@columbia.edu"
  },
  {
    'link': '(646) 940-56-92',
    'type': 'phone',
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
  `
  if (typeof window !== "undefined") {
    new SmoothScroll('a[href*="#"]', {
      speed: 1200,
      offset: 0
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Position 
          position="sticky"
          top={0}
          left={[0, 0, 0, 0, 0, 'auto']}
          right={['auto', 'auto', 'auto', 'auto', 'auto', 0]}>
          <Flex
            px={2}
            sx={{
              borderBottom: '2px solid',
              borderBottomColor: 'gree'
            }}
            color='black'
            height='60px'
            bg='white'
            alignItems='center'>
            <Text p={2} fontWeight='bold' fontSize='3'><h3 >Timur Abbiasov</h3></Text>
            <Box mx='auto' />
            <Link to='#'>
              .
            </Link>
          </Flex>
        </Position>
        <Flex
          sx={{
            flexDirection: 'column',
            minHeight: '90vh'
          }}>
          <Flex
            sx={{
              flex: 1
            }}>   
            <Box
              sx={{
                p: 3,
                minHeight: 120,
                flexGrow: 1,
                flexBasis: 256,
                mr: 2,
              }}>
              <Position 
              position='sticky'
              top = '60px'>
                <Flex
                  sx={{
                    p: 3,
                    justifyContent: 'flex-start',
                    py: '5vh',
                    bg: 'rbg(1,1,1,0)',
                    width: 256,
                    height: '90vh',
                    // flexGrow: 1,
                    flexBasis: 100,
                    flexDirection: 'column'
                  }}>
                  <Box
                  sx={{
                    p:0,
                    bg: 'black',
                    mb: 2,
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
                p: 3,
                flexGrow: 999999,
                flexBasis: 0,
                minWidth: 320,
              }}>
              <Flex
                sx={{
                  p: 3,
                  mt:0,
                  flexDirection: 'column',
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
