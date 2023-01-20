import React from 'react';
import Modal from 'react-modal';
import { DatePicker } from 'rsuite';
import { AiFillCloseCircle, AiFillCheckCircle }  from 'react-icons/ai';
import './modals.css';

export default function Deadline_Modal(props) {
  return (
    <Modal 
        className="DeadlineModal"
        isOpen={props.showDLM} 
        onRequestClose={()=> props.setshowDLM(false)} 
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
                width: '275px',
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
                <label>Deadline</label>
                <AiFillCloseCircle style={{color: "#55535B"}} size="30" onClick={()=> props.setShowDLM(false)} /> 
            </div>
        </div>
        <div className="Body">
            <>
                {' '}
                <DatePicker placeholder="Select Date" className="AddDadline" style={{ width: 200 }} />
            </>
        </div>
        <div className="Footer">
            <AiFillCheckCircle style={{color: "#55535B"}} size="30" onClick={()=> props.setShowDLM(false)} />
        </div>
    </Modal>
  )
}