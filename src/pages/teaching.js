import React from "react"
import { Box, Flex } from 'rebass'
import _ from 'lodash'

import { faGoogleDrive} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import SEO from "../components/seo"

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
                Teaching Assistant Appointments
            </Box>
            <Box>
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
        p:2,
        pt:3,
        mt:3,
        pb:0,
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
          <Box sx={{
                p:2,
                ml:1,
                color: 'black',
                fontSize: '16px',
                minWidth: '30vw',
                justifyContent: 'space-between',
                }}>
                <span>{item.name}</span>
            </Box>
            <Flex sx={{
                    p:2,
                    justifyContent: 'flex-end',
                    }}>
                <Box sx={{
                        color: 'plainDark',
                        ':hover': {
                            color: 'oran',
                        },
                        fontSize: '14px',
                        mr: 4
                        }}>
                    {_.map(item.attachments, link => <a href={link} target="_blank" rel="noreferrer" style={{textDecoration: 'none',
                    color: 'inherit', fontWeight: 'normal'}}>teaching notes &nbsp;&nbsp;<FontAwesomeIcon icon={faGoogleDrive}/></a>)}
                </Box>
                <Box sx={{
                    fontSize: '16px',
                    }}>
                    <span>{item.time}</span>
                </Box>
            </Flex>
            
        </Flex>
    )
  }
  

export default TeachingPage
