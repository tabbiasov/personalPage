import React from "react"
import ResearchPage from "../pages/research"
import TeachingPage from "../pages/teaching"
import SkillsPage from "../pages/skillpage"
import { Box, Flex } from 'rebass'
import Image from "../components/image"

import Layout from "../components/layout.jsx"

import SEO from "../components/seo"

const textSizes = ['15px','15px','16px'];
const headTextSizes = ['24px','28px', '32px'];

const IndexPage = () => (
  <Layout>
    <SEO title='Profile' />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Share+Tech+Mono&family=Roboto&family=Roboto+Condensed&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>

    <Flex sx={{ 
      // minHeight:[200,200,230], 
      justifyContent:"space-evenly",
      fontSize: textSizes,
      // bg: 'red',
      pb: 0,
      pl: ['0px','2px','6px'],
      mb: 0,
      flexDirection:'row', flexGrow: 1, pl:0, mt:[0,0,2], alignItems: "flex-start",
      justifyContent:"space-between"}}>
      <Flex sx={{
          flexDirection: 'column',
          maxWidth: ['40vw', '40vw' ,'50vw'],
          mr: 4,
          mt:[0,0,2],
          pt: 1,
          flexGrow:1, 
          bg: 'white',
          justifyContent:"space-between",
          '@media screen and (max-height: 600px)': {
            opacity: 1,
            maxWidth: '40vw'
          },
          }}>
        <Box sx={{fontWeight: 'bold', fontSize: headTextSizes,mb:2}}>
          Hi!
        </Box>
        <Box sx={{mb:2}}>
          My name is Timur Abbiasov.
        </Box>
        <Box sx={{mb:2}}>
          I am a PhD Candidate in the Economics Department at Columbia University. 
        </Box>
      </Flex> 
      <Box
        sx={{
          mt:2,
          width: [220,0,0],
          pr: 3,
          bg: 'white',
          mb: [0,2,2],
          '@media screen and (max-height: 600px)': {
            opacity: 1,
            width: [220,220,220]
          },
          }}>
         <Image
          src='/images/pic_vert_2000x2500.jpg'
          sx={{
            width: "100%"
          }}
        />
      </Box>
    </Flex>
    <Flex sx={{
      flexDirection: 'column',
      mt : [3,0,0] ,
      '@media screen and (max-height: 600px)': {
        mt: [3,2,2]
      },
      maxWidth: ['85vw', '60vw' ,'70vw'],}}>
      <Box sx={{mb:2}}>
        In my research I use large-scale GPS datasets to study human mobility patterns in urban settings, 
        and explore new ways to empirically address the major challanges in urban policy and planning.      
      </Box>
      <Box>
        <span style={{fontWeight:'bold'}}>I am on the job market</span> and will be available for interviews at the 2021 ASSA Meetings.
      </Box>
    </Flex>
    <ResearchPage/>
    <br/>
    <TeachingPage/>
    <br/>
    <SkillsPage/>
  </Layout>
)

export default IndexPage
