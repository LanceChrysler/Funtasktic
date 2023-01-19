import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiFillCloseCircle, AiFillCheckCircle }  from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';

export default function Difficulty_Modal(props) {
    // State of Star Rating
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)


  return (
    <Modal
        className="DifficultyModal"
        isOpen={props.showDM} 
        onRequestClose={()=> props.setShowDM(false)} 
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
                <label>Difficulty</label>
                <AiFillCloseCircle style={{color: "#ECE9E9"}} size="30" onClick={()=> props.setShowDM(false)} /> 
            </div>
        </div>
        <div className="Body">
            <div className="RatingContainer">
                <Rating
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    /* Available Props */
                    transition={true}
                    allowFraction={true}
                    fillColor='#55535B'
                    emptyColor='#FFFFFF'
                />
            </div>
        </div>
        <div className="Footer">
            <AiFillCheckCircle style={{color: "#55535B"}} size="30" onClick={()=> props.setShowDM(false)} />
        </div>
    </Modal>
  )
}
