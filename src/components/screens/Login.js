import React, { Component } from 'react';

import '../../style/grid.css'
import '../../style/global.css'

import NotesBox from "../bits/NotesBox"
import {Flex, FlexRow, FlexCol} from '../../style/flex';
import renderIf from "render-if"; 


class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn: false
    }
  }
  render() {
    return (
      <div className="componentContainer">
        <div className="mainContainer">
          <wired-card elevation="1" style={{position: 'relative', top: '2vh', left: '2vw', width: "10vw", background: "green"}}>
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
                  Do you want a standalone login page or do you want this integrated on another page?
                </p>
              </Flex>
              <Flex>
                <p>
                  Is there any other login that needs to occur besides standard username/password (remember for a POC)? For example, are they going to have to specify a usergroup for the databases? 
                </p>
              </Flex>
            </FlexCol>
          </wired-card>
          {renderIf(!this.state.loggedIn)(
            <wired-card elevation="2" style={{background: "purple", width: "40vw", position: "absolute", top: "20vh", left: "20vw"}}>
              <FlexCol>
                <Flex>
                  <wired-input placeholder="username" style={{width:"100%"}}></wired-input>
                </Flex>
                <Flex>
                  <wired-input placeholder="password" style={{width:"100%"}}></wired-input>
                </Flex>
                <Flex>
                  <wired-button style={{width:"100%", background: "green"}} onClick={()=>{this.setState({loggedIn: true})}}>
                    <p>
                      Login
                    </p>
                  </wired-button>
                </Flex>
              </FlexCol>
            </wired-card>
          )}
          {renderIf(this.state.loggedIn)(
            <div>
              <wired-card elevation="1" style={{borderRadius: "50%", background: "purple", position: "absolute", top: "5vh", left: '35vw', fontSize: '95pt'}}>
                😜
              </wired-card>
              <wired-card elevation="2" style={{background: "purple", width: "40vw", position: "absolute", top: "30vh", left: "20vw"}}>
                <FlexCol>
                  <Flex>
                    <p>
                      Welcome Username!
                    </p>
                  </Flex>
                  <Flex>
                    <wired-button style={{width:"100%", background: "red"}} onClick={()=>{this.setState({loggedIn: false})}}>
                      <p>
                        Logout
                      </p>
                    </wired-button>
                  </Flex>
                </FlexCol>
              </wired-card>
            </div>
          )}
        </div>
        <div className="notesContainer">
          <NotesBox />
        </div>
      </div>
    );
  }
}

export default Login;
