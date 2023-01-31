import React from 'react';
import Modal from 'react-modal';
import './modals.css';
import ProgressBar from "@ramonak/react-progress-bar";

export default function Increase_XP_Modal(props) {
    const sampleText = "UPDATE THIS TEXT";
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
            <label style={{fontWeight: 'bolder', fontSize: '24px'}}>{sampleText}</label>
            <div className="ProgressBarContainer">
                <p className="ProgressBarLabel">Progress Bar :</p>
                <ProgressBar
                    width={'40vw'}
                    height={'50px'}
                    labelAlignment={'center'}
                    baseBgColor={'#C4C4C4'}
                    bgColor={'#5479FD'}
                    completed={20}
                />
            </div>
        </div>
    </Modal>
  )
}
