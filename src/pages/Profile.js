import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import EditProfileModal from '../modals/Edit_Profile_Modal';
import ProgressBar from "@ramonak/react-progress-bar";
import DonutChart from 'react-donut-chart';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export default function Profile() {
  //State of Edit Profile Modal
  const [showEPM, setShowEPM] = useState(false);

  //Spider Graph
  const data = [
      {
        data: {
          INT: 0.7,
          STR: .8,
          DEX: 0.9,
          VIT: 0.67,
          AGI: 0.8
        },
        meta: { color: 'blue' }
      }
    ];

  const captions = {
      // columns
      INT: 'Intelligence',
      STR: 'Strength',
      DEX: 'Dexterity',
      VIT: 'Vitality',
      AGI: 'Agility'
    };

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
              <MdEdit size="30" style={{margin: 10, color: "#55535B"}} onClick={()=> setShowEPM(true)} /> 
          </div>
        </div>
      </div>
      <hr align="center" noshade/>
      <div className="AccountStats">
        <div className="ProgressBarContainer">
          <p className="ProgressBarLabel">Progress Bar :</p>
          <ProgressBar
            width={'50vw'}
            height={'50px'}
            labelAlignment={'center'}
            baseBgColor={'#C4C4C4'}
            bgColor={'#5479FD'}
            completed={20}
          />
        </div>
        <div className="UserStats">
          <div className="StatsDataContainer">
            <p className="StatsDataLabel">Stats :</p>
            <div className="StatsDataGraph">
              <RadarChart
                captions={captions}
                data={data}
              />
            </div>
          </div>
          <div className="TaskAnalysisContainer">
            <p className="TaskAnalysisLabel">Task Analysis :</p>
            <div className="TaskAnalysisGraph">
              <DonutChart
                data={[
                  {
                    label: 'Social',
                    value: 4,
                  },
                  {
                    label: 'Work',
                    value: 1,
                  },
                  {
                    label: 'Hobbies',
                    value: 25,
                  },
                  {
                    label: 'Fitness',
                    value: 25,
                  },
                  {
                    label: 'School',
                    value: 5,
                  },
                  {
                    label: 'Chores',
                    value: 20,
                  },
                  {
                    label: 'Health',
                    value: 20,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    <EditProfileModal
      showEPM={showEPM}
      setShowEPM={setShowEPM}
    />
    </div>
  )
}
