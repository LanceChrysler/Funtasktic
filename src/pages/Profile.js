import React from 'react';
import { MdEdit } from 'react-icons/md';

export default function Profile() {
  return (
    <div className="ProfilePage">
      <div className="ProfileContainer">
        <div className="ProfileImage">
            <img src={require("../images/profile.png")} alt="Placeholder Profile Image"/>
            <div>
              <p>27</p>
            </div>
        </div>
        <div className="ProfileDetailsContainer">
          <div className="ProfileDetails">
            <div className="ProfileInformation">
              <p className="Label">Name</p>
              <p className="Information Name">Mark Gerald S. Sison</p>
            </div>
            <div className="ProfileInformation">
              <p className="Label">Username</p>
              <p className="Information Username">MewSki2887</p>
            </div>
            <div className="ProfileInformation">
              <p className="Label">Birthdate</p>
              <p className="Information Birthdate">May 21, 2006</p>
            </div>
            <div className="ProfileInformation">
              <p className="Label">About</p>
              <p className="Information About">
                A junior high school student/gamer in the Philippines.
                I am a pet person, I like cats and dogs! 
                I am also interested in sports and outdoor activities.
              </p>
            </div>
          </div>
          <div className="ProfileDetails">
            <div className="ProfileInformation">
                <p className="Label">Level</p>
                <p className="Information Level">27</p>
            </div>
            <div className="ProfileInformation">
                <p className="Label">Badges</p>
                <p className="Information Badges"></p>
            </div>
          </div>
          <div className="EditProfileDetails">
            <MdEdit size="30" style={{margin: 10}} /> 
          </div>
        </div>
      </div>
      <hr align="center" noshade/>
      <div className="AccountStats">
        <div className="ProgressBarContainer">
          <p className="ProgressBarLabel">Progress Bar</p>
          <div className="ProgressBar">
            [ProgressBar Placeholder]
          </div>
        </div>
        <div className="UserStats">
          <div className="StatsDataContainer">
            <p className="StatsDataLabel">Stats</p>
            <div className="StatsDataGraph">
              [StatsDataGraph Placeholder]
            </div>
          </div>
          <div className="TaskAnalysisContainer">
            <p className="TaskAnalysisLabel">Task Analysis</p>
            <div className="TaskAnalysisGraph">
              [TaskAnalysisGraph Placeholder]
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
