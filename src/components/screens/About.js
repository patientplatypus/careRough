import React, { Component } from 'react';

import '../../style/grid.css'
import '../../style/global.css'

import NotesBox from '../bits/NotesBox'
import {Flex, FlexRow, FlexCol} from '../../style/flex';
import renderIf from "render-if"; 


// const notesContainerStyle = {
//   background: 'red',
// }

// const mainContainerStyle = {
//   background: 'blue',
// }


class About extends Component {
  render() {
    return (
      <div className="componentContainer">
        <div className="mainContainer">
          <wired-card elevation="1" style={{position: 'absolute', top: '2vh', left: '2vw', width: "10vw", background: "green"}}>
            <FlexCol>
              <Flex>
                <div style={{fontSize: "15pt", fontWeight: "bold"}}>
                  <p>
                    Questions:
                  </p>  
                </div>
              </Flex>
              <Flex>
                <p>
                  Here I have a home page, it may not be necessary, and is potentially integratable with the login page.
                </p>
              </Flex>
              <Flex>
                <p>
                  Here there is some balance between corporate branding and ad copy/product explanation, the amount and desision is up to you guys. (Any assets you have would be appreciated).
                </p>
              </Flex> 
            </FlexCol>
          </wired-card>
          <wired-card style={{position: "absolute", background: "purple", height: "30vh", width: "40vw", top: "10vh", left: "15vw", fontSize: "20pt"}}>
            <p>
              Corporate Branding
            </p>
          </wired-card>
          <wired-card style={{position: "absolute", background: "purple", height: "30vh", width: "40vw", top: "50vh", left: "5vw", fontSize: "20pt"}}>
            <p>
              Ad Copy
            </p>
          </wired-card>
          <wired-card style={{position: "absolute", background: "purple", height: "30vh", width: "20vw", top: "50vh", left: "50vw", fontSize: "20pt"}}>
            <p>
              Product Explanation
            </p>
          </wired-card>
        </div>
        <div className="notesContainer">
          <NotesBox />
        </div>
      </div>
    );
  }
}

export default About;
