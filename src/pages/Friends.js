import React, { useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle }  from 'react-icons/ai';
import "./pages.css";
import RequestAcceptedSuccessfullyModal from '../modals/Request_Accepted_Successfully_Modal';
import RequestRejectedSuccessfullyModal from '../modals/Request_Rejected_Successfully_Modal';


export default function Friends() {
  const [showRASM, setShowRASM] = useState(false);
  const [showRRSM, setShowRRSM] = useState(false);
  return (
    <div className="FriendsPage">
      <div className="FriendsListColumn">
        <h2 style={{margin: '5px 20px'}}>FRIENDS LIST</h2>
        <div className="FriendsList">
            <ul className="Friends">
                <li>Ediiwow1</li>
                <li>Ediiwow2</li>
                <li>Ediiwow3</li>
                <li>Ediiwow4</li>
            </ul>
        </div>
      </div>

      <div className="FriendRequestColumn">
        <h2 style={{margin: '5px 20px'}}>FRIEND REQUEST</h2>
        <div className="FriendRequest">
            <ul className="Requests">
                <li>
                    <label>Ediiwow1</label>
                        <AiFillCheckCircle className="Buttons" style={{ color: "00FF00" }} size="30"/>
                        <AiFillCloseCircle className="Buttons" style={{ color: "FF0000" }} size="30"/>
                </li>
                <li>
                    <label>Ediiwow2</label>
                        <AiFillCheckCircle className="Buttons" style={{ color: "00FF00" }} size="30"/>
                        <AiFillCloseCircle className="Buttons" style={{ color: "FF0000" }} size="30"/>
                </li>
                <li>
                    <label>Ediiwow3</label>
                        <AiFillCheckCircle className="Buttons" style={{ color: "00FF00" }} size="30"/>
                        <AiFillCloseCircle className="Buttons" style={{ color: "FF0000" }} size="30"/>
                </li>
                <li>
                    <label>Ediiwow4</label>
                        <AiFillCheckCircle className="Buttons" style={{ color: "00FF00" }} size="30"/>
                        <AiFillCloseCircle className="Buttons" style={{ color: "FF0000" }} size="30"/>
                </li>
            </ul>
        </div>
      </div>

      <div className="AddFriendsColumn">
        <div className="AddFriends">
            <div>
                <h2 style={{margin: '15px 5px', textAlign: 'center'}}>
                    Send Friend Request via Username
                </h2>
                <hr style={{ background: "#55535B", width: "80%", height: "3px", borderRadius: "5px" }} />
            </div>
            
            <div className="AddFriendsForm">
                <input type="text" style={{textAlign: 'center'}} className="AddUsername" placeholder="Username" />
                <button>SEND</button>
            </div>
        </div>
      </div>
        <RequestAcceptedSuccessfullyModal
        showTASM={showRASM}
        setShowTASM={setShowRASM}
        />

        <RequestRejectedSuccessfullyModal
        showTASM={showRRSM}
        setShowTASM={setShowRRSM}
        />
      </div>
      
  )
}
