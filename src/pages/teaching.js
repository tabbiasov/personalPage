import React from "react"
import { Box, Flex } from 'rebass'
import _ from 'lodash'

import { faGoogleDrive} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import SEO from "../components/seo"

const textSizes = ['15px','15px','16px'];
const headTextSizes = ['24px','28px', '32px'];
const smallTextSizes = ['12px','12px', '14px'];
const titleTextSizes = ['14px','18px', '20px'];
const tableItemSizes = ['14px','14px','16px'];

const myTeachingItems = [
    {'name': 'Econometrics I (graduate)', 'time': 'Fall, 2017-2019',
     'attachments': ['https://drive.google.com/drive/folders/1v-O25mvl-zEzK6lv1E4pAw80lzquS143?usp=sharing']},
    {'name': 'Econometrics II (graduate)', 'time': 'Fall, 2018-2020',
    'attachments': ['https://drive.google.com/drive/folders/1LO9Aq-kD_568Em7R7MQA6sbhCw5tvD_w?usp=sharing']},
    {'name': 'Economics of Information', 'time': 'Spring 2017'},
    {'name': 'Intermediate Microeconomics', 'time': 'Fall 2016'},
]

class TeachingItems extends React.Component {
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
                fontSize: textSizes,
                px:1, py: '8px',
                mb:2, mx:[1,1,2], 
                // bg: 'red',
                fontWeight: 'bold',
                borderBottom: '2px solid',
                borderBottomColor: 'plainLight',
                justifyContent: 'space-between'
            }}>
            <Box sx={{pr:3}}>
                Teaching Assistant Appointments
            </Box>
            <Box sx={{
              //  bg:'blue',
               textAlign: 'right'
            }}>
                Columbia University
            </Box>

        </Flex >
        {_.map(this.props.items, item => 
        <TeachingItem item = {item}/>
        )}
        </Flex>
      )  
    }
  }


const TeachingPage = () => (
    <Box>
      <span id='teaching'></span>
      <Box sx={{
        p: [2,3,3],
        pl:0,
        ml:0,
        pt: 1,
        fontSize: ['10px','12px', '15px'],
        borderTop: '2px solid',
        borderTopColor: 'black'
      }}>
        <h1 >Teaching</h1>
        <br/>
        <TeachingItems items={myTeachingItems} />
      </Box>
    </Box>
)

function TeachingItem({ item }) {
    return (
      <Flex sx={{justifyContent:"space-between", flexGrow:1000,
       flexDirection:"row"}}>
          <Flex sx={{
                p:2,
                ml:1,
                // p: 0, m: 0,
                // width: 50,
                overflowClipBox: "content-box",
                // bg: 'blue',
                color: 'black',
                fontSize: tableItemSizes,
                // flexGrow: 0,
                // minWidth: '30vw',
                // justifyContent: 'space-between',
                }}>
                <text>{item.name}</text>
            </Flex>
            <Flex sx={{
                    p:2,
                    // bg : 'red',
                    flexGrow: 100,
                    justifyContent: 'flex-end',
                    }}>
                <Flex sx={{
                        color: 'plainDark',
                        ':hover': {
                            color: 'oran',
                        },
                        fontSize: smallTextSizes,
                        textAlign: 'center',
                        mr: [1,3,4],
                        // bg: 'white'
                        }}>
                    {_.map(item.attachments, link => <a href={link} target="_blank" rel="noreferrer" style={
                      {
                        textDecoration: 'none',
                        color: 'inherit', fontWeight: 'normal',
                      }
                    }>teaching notes <FontAwesomeIcon icon={faGoogleDrive}/></a>)}
                </Flex>
                <Box sx={{
                    fontSize: tableItemSizes,
                    textAlign: 'right',
                    // minWidth: 80
                    // bg: 'blue',
                    }}>
                    <span>{item.time}</span>
                </Box>
            </Flex>
            
        </Flex>
    )
  }
  

export default TeachingPage
