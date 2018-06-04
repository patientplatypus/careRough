import React, { Component } from 'react';

import '../../style/grid.css'
import '../../style/global.css'

import NotesBox from "../bits/NotesBox"
import {Flex, FlexRow, FlexCol} from '../../style/flex';
import renderIf from "render-if"; 


class Data extends Component {
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
                  We are integrating with existing Oracle databases. Does the user have to specify which group of patients they are selecting?
                </p>
              </Flex>
              <Flex>
                <p>
                  Are we giving the option for the physician to upload patient data to the database or only select?
                </p>
              </Flex>
              <Flex>
                <p>
                  Would it be better to integrate this page with the analytics page or have it standalone as it is here?
                </p>
              </Flex>
            </FlexCol>
          </wired-card>
          <wired-card elevation="1" style={{position: "absolute", background: "red", top: "25vh", left: "30vw"}}>
            <FlexCol>
              <Flex>
                <p>
                  Please select from available daterbases your user has access to:
                </p>
              </Flex>
              <Flex>
                <wired-combo selected="one" style={{background: "purple"}}>
                  <wired-item value="one" text="Daterbase one"></wired-item>
                  <wired-item value="two" text="Daterbase two"></wired-item>
                  <wired-item value="three" text="Daterbase three"></wired-item>
                </wired-combo>
              </Flex>
              <Flex>
                Alternatively, upload user data to the database and perform analysis on that group.
              </Flex>
              <Flex>
                <wired-input placeholder="upload input box goes here" style={{width: "80%"}}></wired-input>
              </Flex>
              <Flex>
                <wired-button style={{background: 'green'}}>
                  <p>
                    Select Data!
                  </p>
                </wired-button>
              </Flex>
            </FlexCol>
            
          </wired-card>
        </div>
        <div className="notesContainer">
          <NotesBox/>
        </div>
      </div>
    );
  }
}

export default Data;
