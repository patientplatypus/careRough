import React, { Component } from 'react';

import '../../style/grid.css'
import '../../style/global.css'

import NotesBox from "../bits/NotesBox"
import {Flex, FlexRow, FlexCol} from '../../style/flex';
import renderIf from "render-if"; 

class Explorer extends Component {
  render() {
    return (
      <div className="componentContainer">
        <div className="mainContainer">
          <wired-card elevation="1" style={{position: 'absolute', top: '2vh', left: '2vw', width: "15vw", background: "green"}}>
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
                    A *lot* of the design of this page will be dependent on how you want to display patient statistics *&* what kind of statistical analysis we are performing.
                  </p>
                </Flex>
                <Flex>
                  <p>
                    Is it useful to have a population overall analysis of *all* patients (mean, median, mode and other statistics) to compare to a selected individual?
                  </p>
                </Flex>
                <Flex>
                  <p>
                    Do you want to be able to find users by sub-population (those most likely to have a medical disorder) and display those and perform analysis on them?
                  </p>
                </Flex>
                <Flex>
                  <p>
                    For graphics what is the right balance between *ooh shiny* and useful? If the target users are doctors, it would be my personal recommendation to have
                    as clean and uncluttered a design as possible so that it can be used with minimal cognitive load, however this does make it less *technical looking/wall o' text*.
                  </p>
                </Flex>
                <Flex>
                  <p>
                    How much user interaction do you want on this page? What are the inputs to outputs?
                  </p>
                </Flex>
              </FlexCol>
          </wired-card>
          <wired-card style={{position: 'absolute', height: "85vh", width: "17vw", left: "20vw", top: "2vh", background: "purple"}}>
            <FlexCol>
              <Flex style={{textAlign: 'center', marginLeft: "25%"}}>
                <div style={{fontWeight: "bold", fontSize: "20pt"}}>
                  <p>
                    All Patients
                  </p>
                </div>
              </Flex>
              <Flex style={{textAlign: 'center'}}>
                <wired-card style={{height: "150px", width: "80%", marginRight: "10%", marginLeft: "10%", marginBottom: "1%", background: "green"}}>
                  <p>
                    Chart Goes Here
                  </p>
                </wired-card>
              </Flex>
              <Flex style={{textAlign: 'center'}}>
                <wired-card style={{height: "150px", width: "80%", marginRight: "10%", marginLeft: "10%", marginBottom: "1%", background: "green"}}>
                  <p>
                    Chart Goes Here
                  </p>
                </wired-card>
              </Flex>
              <Flex>
                <div style={{textAlign:"center", marginLeft: "15%"}}>
                  <p>
                    Select Chart Data to Display
                  </p>
                  <wired-combo selected="one" style={{background: "purple"}}>
                    <wired-item value="one" text="Risk Factor Prevalence"></wired-item>
                    <wired-item value="two" text="Disease Types"></wired-item>
                    <wired-item value="three" text="Warning Barcharts"></wired-item>
                  </wired-combo>
                </div>
              </Flex>
              <Flex>
                <p> Here we are going to display some statistics on the overall population of patients</p>
              </Flex>
              <Flex>
                <p> These are the most common diseases, these are the height/weight/age/gender breakdowns, maybe a table</p>
              </Flex>
            </FlexCol>
          </wired-card>
          <wired-card style={{position: 'absolute', height: "85vh", width: "17vw", left: "38.5vw", top: "2vh", background: "purple"}}>
            <FlexCol>
              <Flex style={{textAlign: 'center', marginLeft: "15%"}}>
                <div style={{fontWeight: "bold", fontSize: "20pt"}}>
                  <p>
                    Sub-Population
                  </p>
                </div>
              </Flex>
              <Flex style={{textAlign: 'center'}}>
                <wired-card style={{height: "150px", width: "80%", marginRight: "10%", marginLeft: "10%", marginBottom: "1%", background: "green"}}>
                  <p>
                    Chart Goes Here
                  </p>
                </wired-card>
              </Flex>
              <Flex style={{textAlign: 'center'}}>
                <wired-card style={{height: "150px", width: "80%", marginRight: "10%", marginLeft: "10%", marginBottom: "1%", background: "green"}}>
                  <p>
                    Chart Goes Here
                  </p>
                </wired-card>
              </Flex>
              <Flex>
                <div style={{textAlign:"center"}}>
                  <p>
                    Select Potential Risk Factor to Display
                  </p>
                  <wired-combo selected="one" style={{background: "purple"}}>
                    <wired-item value="one" text="Risk Factor one"></wired-item>
                    <wired-item value="two" text="Disease two"></wired-item>
                    <wired-item value="three" text="Warning three"></wired-item>
                  </wired-combo>
                </div>
              </Flex>
              <Flex>
                <p>
                  Here we could display comorbidities with other diseases, number of patients with this type of disease, or other factors that relate to the selected sub-population.
                </p>
              </Flex>
            </FlexCol>
          </wired-card>
          <wired-card style={{position: 'absolute', height: "85vh", width: "17vw", left: "57vw", top: "2vh", background: "purple"}}>
            <FlexCol>
              <Flex style={{textAlign: 'center', marginLeft: "15%"}}>
                <div style={{fontWeight: "bold", fontSize: "20pt"}}>
                  <p>
                    Individual Patient
                  </p>
                </div>
              </Flex>
              <Flex style={{textAlign: 'center'}}>
                <wired-card style={{height: "150px", width: "80%", marginRight: "10%", marginLeft: "10%", marginBottom: "1%", background: "green"}}>
                  <p>
                    Chart Goes Here
                  </p>
                </wired-card>
              </Flex>
              <Flex style={{textAlign: 'center'}}>
                <wired-card style={{height: "150px", width: "80%", marginRight: "10%", marginLeft: "10%", marginBottom: "1%", background: "green"}}>
                  <p>
                    Chart Goes Here
                  </p>
                </wired-card>
              </Flex>
              <Flex>
                <div style={{textAlign:"center"}}>
                  <p>
                    Please enter patient ID
                  </p>
                  <FlexRow style={{textAlign: "center", width: '100%', marginLeft: "10%"}}>
                    <Flex>
                      <wired-input placeholder="patientID"></wired-input>
                    </Flex>
                    <Flex>
                      <wired-button> Search </wired-button>
                    </Flex>
                  </FlexRow>
                </div>
              </Flex>
              <Flex>
                <p>
                  Here we could have all the risk factors of the individual patient, a deep dive in comparison to the selected sub-population both in a chart with a comparison.
                </p>
              </Flex>
            </FlexCol>
          </wired-card>
        </div>
        <div className="notesContainer">
          <NotesBox />
        </div>
      </div>
    );
  }
}

export default Explorer;
