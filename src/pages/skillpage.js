import React from "react"
// import { Link } from "gatsby"
import { Box, Flex } from 'rebass'
import _ from 'lodash'

// import { faGoogleDrive} from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import SEO from "../components/seo"
const textSizes = ['15px','15px','16px'];
const headTextSizes = ['24px','28px', '32px'];
const smallTextSizes = ['12px','12px', '14px'];
const titleTextSizes = ['14px','18px', '20px'];
const tableItemSizes = ['14px','14px','16px'];

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
            p: [2,3,3],
            ml:[1,1,2],
            pt: [2,1,1],
            pb:[1,2,3],
            flexGrow: 1,
            flexDirection: 'column',
            borderStyle: 'solid',
            borderColor: 'plain',
            borderWidth: "1px",
          }}>
        <Flex sx={{
                fontSize: tableItemSizes,
                p:1, pt:2, pl:1, pb: '8pt', mb:2,
                ml:1, mr:2, fontWeight: 'bold',
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
        p: [2,3,3],
        pl:0,
        ml:0,
        fontSize: ['10px','12px', '15px'],
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
                p:['2px','6px','8spx'],
                ml:1,
                color: 'black',
                fontSize: tableItemSizes,
                minWidth: '10vw',
                justifyContent: 'space-between',
                }}>
                <span>{item.group}</span>
            </Box>
            <Flex sx={{
                    pt:['4px','8px','6px'],
                    // bg: 'red',
                    flexWrap: "wrap",
                    justifyContent: 'flex-end',
                    }}>
                    {_.map(item.langs, lang => 
                        <Box sx={{
                            pt:0,
                            mt:[0,0,'2px'],
                            pr: ['10px','12px', '14px'],
                            // ':hover': {
                            //     color: 'gree',
                            // },
                            fontFamily: 'tech',
                            // p:2,
                            fontSize: smallTextSizes,
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
