import React from 'react';
import Modal from 'react-modal';
import { AiFillCloseCircle, AiFillCheckCircle }  from 'react-icons/ai';
import './modals.css';

export default function Edit_Profile_Modal(props) {
  return (
    <Modal 
        className="EditProfileModal"
        isOpen={props.showEPM} 
        onRequestClose={()=> props.setShowEPM(false)} 
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, .5)'
            },
            content: {
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                background: '#ECE9E9',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '15px',
                outline: 'none'
            }
        }}
    >
        <div className="Header">
            <div className="Title">
                <label>Edit Profile</label>
                <AiFillCloseCircle style={{color: "#ECE9E9"}} size="30" onClick={()=> props.setShowEPM(false)} /> 
            </div>
        </div>
        <div className="Body">
            <div className="Form">
                <label>Name </label>
                <input className="EditName"  type="text" />
                <label>Username </label>
                <input className="EditUsername"  type="text" />
                <label>Birthdate </label>
                <input className="EditBirthdate"  type="text" />
                <label>About </label>
                <textarea className="EditAbout" type="text" rows="10"/>
            </div>
            <div className="Button">
                <AiFillCheckCircle style={{color: "#38BDA5"}} size="30" onClick={()=> props.setShowEPM(false)} />
            </div>
        </div>
    </Modal>
  )
}

    