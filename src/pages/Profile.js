import React from 'react';
import { MdEdit } from 'react-icons/md';

export default function Profile() {
  return (
    <div className="ProfilePage">
      <div className="ProfileContainer">
        <div className="ProfileImage">
          <div className="ProfileImageContainer">
            <img src={require("../images/profile.png")} alt="Placeholder Profile Image"/>
          </div>
          <div className="LevelInProfile">
            <p>27</p>
          </div>
        </div>
        <div className="ProfileDetails1">
          <div className="Labels">
            <p className="Label">Name</p>
            <p className="Label">Username</p>
            <p className="Label">Birthdate</p>
            <p className="Label">About</p>
          </div>
          <div className="Informations">
            <p className="Information Name">Mark Gerald S. Sison</p>
            <p className="Information Username">MewSki2887</p>
            <p className="Information Birthdate">May 21, 2006</p>
            <p className="Information About">
              A junior high school student/gamer in the Philippines.
              I am a pet person, I like cats and dogs! 
              I am also interested in sports and outdoor activities.
            </p>
          </div>
        </div>
        <div className="ProfileDetails2">
          <div className="Labels">
            <p className="Label">Level</p>
            <p className="Label">Badges</p>
          </div>
          <div className="Informations">
            <p className="Information Level">27</p>
            <p className="Information Badges"></p>
          </div>
        </div>
        <div className="EditProfileDetails">
          <MdEdit size="30" style={{margin: 10}} /> 
        </div>
      </div>
      <hr align="center" noshade/>
      <div className="AccountStats">
        <div className="ProgressBarContainer">
          <p className="ProgressBarLabel">Progress Bar</p>
          <div className="ProgressBar">

          </div>
        </div>
        <div className="UserStats">
          <div className="StatsDataContainer">
            <p className="StatsDataLabel">Stats</p>
            <div className="StatsDataGraph">

            </div>
          </div>
          <div className="TaskAnalysisContainer">
            <p className="TaskAnalysisLabel">Task Analysis</p>
            <div className="TaskAnalysisGraph">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
