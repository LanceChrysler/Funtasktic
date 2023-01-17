import React from 'react';
import Modal from 'react-modal';
import { AiFillCloseCircle, AiFillCheckCircle, AiOutlineTag}  from 'react-icons/ai';
import './modals.css';

export default function Task_Type_Modal(props) {
  return (
    <Modal
        className="TaskTypeModal"
        isOpen={props.showTTM} 
        onRequestClose={()=> props.setShowTTM(false)} 
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
        <div className="Header">
            <div className="Title">
                <label>Task Type</label>
                <AiFillCloseCircle style={{color: "#ECE9E9"}} size="35" onClick={()=> props.setShowTTM(false)} /> 
            </div>
        </div>
        <div className="Body">
            <AiOutlineTag className="TagIcon" size="35" onClick={()=> props.setShowDeM(false)} />
            <div className="Tags">
                <button style={{backgroundColor: "#BD3838", borderColor: "#BD3838"}} value="Fitness">Fitness</button>
                <button style={{backgroundColor: "#8238BD", borderColor: "#8238BD"}} value="Fitness">School</button>
                <button style={{backgroundColor: "#38BDA5", borderColor: "#38BDA5"}} value="Fitness">Chores</button>
                <button style={{backgroundColor: "#BABD38", borderColor: "#BABD38"}} value="Fitness">Health</button>
                <button style={{backgroundColor: "#BD3898", borderColor: "#BD3898"}} value="Fitness">Social</button>
                <button style={{backgroundColor: "#BD7838", borderColor: "#BD7838"}} value="Fitness">Work</button>
            </div>
            <AiFillCheckCircle className="CheckIcon" size="35" onClick={()=> props.setShowTTM(false)} />
        </div>
    </Modal>
  )
}
