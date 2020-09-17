import React from "react"
// import { Link } from "gatsby"
import { Box, Flex } from 'rebass'
import _ from 'lodash'

// import { faGoogleDrive} from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import SEO from "../components/seo"

const mySkills = [
    {
        'group': 'Computation and Statistics',
        'langs': ['Python', 'R', 'Stata', 'Mathematica', 'MATLAB']
    },
    {
        'group': 'Databases',
        'langs': ['SQL', 'MongoDB']
    },
    {
        'group': 'Mapping and GIS',
        'langs': ['QGIS', 'ArcGIS', 'Mapbox', 'deck.gl', 'geopandas', 'GDAL']
    },
    {
        'group': 'Full-stack, Web',
        'langs': ['JavasSript', 'Node.js', 'React', 'D3.js']
    },
]

class SkillItems extends React.Component {
    render () {
      return (
        <Flex sx={{
            bg:'white',
            p:2,
            ml:3,
            mr:3,
            flexGrow: 1,
            flexDirection: 'column',
            borderStyle: 'solid',
            borderColor: 'plain',
            borderWidth: "1px",
          }}>
        <Flex sx={{
                fontSize: '16px',
                p:1, pt:2,  pb: '8pt', mb:2,
                ml:2, mr:2, fontWeight: 'bold',
                borderBottom: '2px solid',
                borderBottomColor: 'plainLight',
                justifyContent: 'space-between'
            }}>
            <Box>
                Coding Skills
            </Box>
        </Flex>
        {_.map(this.props.items, item => 
        <SkillItem item = {item}/>
        )}
        </Flex>
      )  
    }
  }


const SkillsPage = () => (
    <Box>
      <span id='skills'></span>
      <Box sx={{
        p:2,
        pt:3,
        mt:3,
        pb:0,
        borderTop: '2px solid',
        borderTopColor: 'black'
      }}>
        <h1 >Skills</h1>
        <br/>
        <SkillItems items={mySkills} />
      </Box>
    </Box>
)

function SkillItem({ item }) {
    return (
      <Flex sx={{justifyContent:"space-between", flexGrow:0,
      ':hover': {
        color: 'oran'
      }, transition: 'all 0.15s linear',
      flexDirection:"row"}}>
          <Box sx={{
                p:'10px',
                ml:1,
                color: 'black',
                fontSize: '16px',
                minWidth: '10vw',
                justifyContent: 'space-between',
                }}>
                <span>{item.group}</span>
            </Box>
            <Flex sx={{
                    p:'10px',
                    // bg: 'red',
                    justifyContent: 'flex-end',
                    }}>
                    {_.map(item.langs, lang => 
                        <Box sx={{
                            pt:0,
                            mt:1,
                            pr: 3,
                            // ':hover': {
                            //     color: 'gree',
                            // },
                            fontFamily: 'tech',
                            // p:2,
                            fontSize: '14px',
                            // mr: 4
                            }}>
                        {lang}
                        </Box>
                    )}
            </Flex>
        </Flex>
    )
  }
  

export default SkillsPage
