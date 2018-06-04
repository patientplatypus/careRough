import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';s s
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './style/grid.css'
import './style/global.css'

import About from './components/screens/About'
import Data from './components/screens/Data'
import Explorer from './components/screens/Explorer'
import Login from './components/screens/Login'
import "wired-elements"
import {Flex, FlexRow, FlexCol} from './style/flex';

const linkButtonStyle = {
  marginTop: '2%',
  marginLeft: "2%",
  marginRight: "2%",
  marginBottom: "2%",
  backgroundColor: 'orange'
}

const cardStyle = {
  margin: '5%',
  marginBottom: "10%",
  marginTop: '10%',
  height: '80%',
  width: '100%',
  backgroundColor: 'blue'
}

class App extends Component {
  render() {
    return (
        <Router>
          <div className='gridContainer'>
            <div className='headerContainer'>
              <div style={{position: "relative", left: "55vw", top: "-2vh", fontSize: "30pt"}}>
                <p>
                  Non-Prod Rough Cut ⚙️ CareIQ ❤️
                </p>
              </div>
            </div>
            <div className="navContainer">
              <FlexCol>
                <Flex>
                  <wired-card elevation="3" style={cardStyle}>
                    <wired-button style={linkButtonStyle}>
                      <Link to="/">Home</Link>
                    </wired-button>
                    <div style={{color: "white"}}>
                      <p>
                          Do you want a sidebar or a top nav bar?
                      </p>
                    </div>
                  </wired-card>
                </Flex>
                <Flex>
                  <wired-card elevation="3" style={cardStyle}>
                    <wired-button style={linkButtonStyle}>
                      <Link to="/data">Upload Patient Data</Link>
                    </wired-button>
                    <div style={{color: "white"}}>
                      <p>
                          Is it useful to have a space to explain page contents?
                      </p>
                    </div>
                  </wired-card>
                </Flex>
                <Flex>
                  <wired-card elevation="3" style={cardStyle}>
                    <wired-button style={linkButtonStyle}>
                      <Link to="/explorer">Explore Patient Data</Link>
                    </wired-button>
                    <div style={{color: "white"}}>
                      <p>
                          Do you like this boxed style of nav?
                      </p>
                    </div>
                  </wired-card>
                </Flex>
                <Flex>
                  <wired-card elevation="3" style={cardStyle}>
                    <wired-button style={linkButtonStyle}>
                      <Link to="/login">login</Link>
                    </wired-button>
                    <div style={{color: "white"}}>
                      <p>
                          What are your thoughts on mobile and hamburger menus?
                      </p>
                    </div>
                  </wired-card>
                </Flex>
              </FlexCol>
            </div>
  
            <Route exact path="/" component={About}/>
            <Route path="/data" component={Data}/>
            <Route path="/explorer" component={Explorer}/>
            <Route path="/login" component={Login}/>
          </div>
        </Router>
    );
  }
}

export default App;


{/* <Router>
<div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/data">Upload Patient Data</Link></li>
    <li><Link to="/explorer">Explore Patient Data</Link></li>
    <li><Link to="/login">login</Link></li>
  </ul>

  <hr/>

  <Route exact path="/" component={About}/>
  <Route path="/data" component={Data}/>
  <Route path="/explorer" component={Explorer}/>
  <Route path="/login" component={Login}/>
</div>
</Router> */}