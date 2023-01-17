import React from 'react';
import Modal from 'react-modal';
import { AiFillCheckCircle }  from 'react-icons/ai';
import './modals.css';

export default function Task_Added_Successfully_Modal(props) {
  return (
    <Modal
        className="TaskAddedSuccessfullyModal"
        isOpen={props.showTASM} 
        onRequestClose={()=> props.setShowTASM(false)} 
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
                outline: 'none',
                padding: '20px'
            }
        }}
    >
      <div className="Container">
        <div className="Content">
            <label style={{color: "#BD3838", fontSize: "24px"}}>Task added successfully</label>
            <AiFillCheckCircle style={{color: "#38BDA5"}} size="30" onClick={()=> props.setShowTASM(false)} />
        </div>
      </div>
    </Modal>
  )
}
