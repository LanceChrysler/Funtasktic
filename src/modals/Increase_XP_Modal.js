import React from 'react';
import Modal from 'react-modal';
import './modals.css';

export default function Increase_XP_Modal(props) {
    const sampleText = "UPDATE TEXT BACKEND";
  return (
    <Modal
        className="IncreaseXPModal"
        isOpen={props.showIXM} 
        onRequestClose={()=> props.setShowIXM(false)} 
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

                background: '#ECE9E9',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '15px',
                outline: 'none'
            }
        }}
    >
        <div className="Body">
            <label>{sampleText}</label>
            <div className="ProgressBarContainer">
                <p className="ProgressBarLabel">Progress Bar</p>
                <div className="ProgressBar">
                    [ProgressBar Placeholder]
                </div>
            </div>
        </div>
    </Modal>
  )
}
