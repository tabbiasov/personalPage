import React from "react"
import ResearchPage from "../pages/research"
import TeachingPage from "../pages/teaching"
import SkillsPage from "../pages/skillpage"
import { Box } from 'rebass'

import Layout from "../components/layout.jsx"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title='Profile' />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Share+Tech+Mono&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
    <Box sx={{fontWeight: 'bold', fontSize: '32px', pt:4,mb:4}}>
      Hi!
    </Box>
    <Box sx={{fontSize: '16px',mb:3}}>
      My name is Timur Abbiasov. I am a PhD Candidate in the Economics Department at Columbia University. 
    </Box>
    <Box sx={{fontSize: '16px', mb:3}}>
      In my research I use large-scale GPS datasets to study human mobility patterns in urban settings, 
      and explore new ways to empirically address the major challanges in urban policy and planning.      
    </Box>
    <Box sx={{fontSize: '16px', mb:3}}>
      <span style={{fontWeight:'bold'}}>I am on the job market</span> and will be available for interviews at the 2021 ASSA Meetings.
    </Box>
    <ResearchPage/>
    <br/>
    <TeachingPage/>
    <br/>
    <SkillsPage/>
  </Layout>
)

export default IndexPage
