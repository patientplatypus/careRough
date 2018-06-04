// https://coolors.co/c6ebbe-a9dbb8-7ca5b8-38369a-020887


import React, { Component } from 'react';

import {Flex, FlexRow, FlexCol} from '../../style/flex';

import '../../style/grid.css'
import '../../style/global.css'
import "wired-elements"


const notesBoxStyle = {
    // background: 'blue',
    height: '100%',
    width: '100%',
    // padding: '2.5%'
}

const cardStyle = {
    // width: '70%',
    // height: '100%',
    // // marginLeft: '2.5%',
    // marginRight: '10%',
    // marginLeft: "10%",
    height: '88%',
    width: '75%', 
    marginRight: '2.5%',
    marginLeft: '2.5%',
    background: "red", 
    textAlign: "center"
}

const headerStyle = {
    width: "50%",
    fontSize: "15pt",
    background: "purple",
}

const textStyle = {
    textAlign: 'left',
    marginLeft: "2%", 
    marginRight: "2%"
}

const colorBoxStyle1 = {    
    width: "10%",
    height: "20px",
    background: "#c6ebbe",
    margin: "2%",   
}

const colorBoxStyle2 = {    
    width: "10%",
    height: "20px",
    background: "#a9dbb8",
    margin: "2%",   
}

const colorBoxStyle3 = {    
    width: "10%",
    height: "20px",
    background: "#7ca5b8",
    margin: "2%",   
}

const colorBoxStyle4 = {    
    width: "10%",
    height: "20px",
    background: "#38369a",
    margin: "2%",   
}

const colorBoxStyle5 = {    
    width: "10%",
    height: "20px",
    background: "#020887",
    margin: "2%",   
}

class NotesBox extends Component {
  render() {
    return (
        <div style={notesBoxStyle}>
            <wired-card elevation="3" style={cardStyle}>
                <wired-card elevation="3" style={headerStyle}>
                    <p>
                        Notes Box
                    </p>
                </wired-card>
                <FlexCol>
                    <Flex style={textStyle}>
                        <p>
                            This is the notebox. The purpose here is to provide information to the user on how to interact with the page.
                        </p>
                    </Flex>
                    <Flex>
                        <p>
                            As the site example is built out tricky parts that a simple user might not know how to handle will be written here.
                        </p>
                    </Flex>
                    <Flex>
                        <div>
                            <p>
                                One (non-user/design) consideration is colors - Here is a cool palette I think would look nice. (Currently colors are being selected for contrast, and ease of seeing elements on the page.)
                            </p>
                        </div>
                    </Flex>
                    <Flex>
                        <wired-card elevation="3" style={colorBoxStyle1}>
                        </wired-card>
                        <wired-card elevation="3" style={colorBoxStyle2}>
                        </wired-card>
                        <wired-card elevation="3" style={colorBoxStyle3}>
                        </wired-card>
                        <wired-card elevation="3" style={colorBoxStyle4}>
                        </wired-card>
                        <wired-card elevation="3" style={colorBoxStyle5}>
                        </wired-card>
                    </Flex>
                    <Flex>
                        <p>
                            More color palettes can be easily prototyped at coolors.co! 😆
                        </p>
                    </Flex>
                </FlexCol>

            </wired-card>
        </div>
    );
  }
}

export default NotesBox;
