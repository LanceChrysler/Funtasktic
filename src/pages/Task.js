import React, { useState } from 'react';
<<<<<<< HEAD
import { IconButton, Button, Tooltip, Whisper } from "rsuite";
import { Detail, Calendar, Time, Rate, Tag } from '@rsuite/icons'; // npm install rsuite @rsuite/icons
import DescriptionModal from '../modals/Description_Modal';
import DifficultyModal from '../modals/Difficulty_Modal';
import TaskTypeModal from '../modals/Task_Type_Modal';
import "rsuite/dist/rsuite.min.css";
=======
>>>>>>> fb78e788cd44fac436036874a2d7601feb370c13
import "./pages.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
<<<<<<< HEAD

export default function Task() {
  const ButtonStyle = { margin: "0px 5px" };
  const [showButtons, setShowButtons] = useState(false);
  const [showDeM, setShowDeM] = useState(false);
  const [showDM, setShowDM] = useState(false);
  const [showTTM, setShowTTM] = useState(false);
=======


export default function Task() {
  const [showButtons, setShowButtons] = useState(false);
>>>>>>> fb78e788cd44fac436036874a2d7601feb370c13
  return (
    <div className="TaskPage">
      <div className="LeftColumn">
        <div className="AddTaskForm">
            <ul>
            <input type="text" className="AddTask" placeholder="Add Task" />
              <div>
                <Whisper followCursor speaker={<Tooltip>Description</Tooltip>}>
                  <IconButton icon={<Detail />} color="cyan" appearance="primary" style={ButtonStyle} 
                    onClick={()=> {setShowDeM(true); console.log("Add Icon Pressed")}} />
                </Whisper>

                <Whisper followCursor speaker={<Tooltip>Deadline</Tooltip>}>
                  <IconButton icon={<Calendar />} color="green" appearance="primary" style={ButtonStyle} />
                </Whisper>
                
                <Whisper followCursor speaker={<Tooltip> </Tooltip>}>
                  <IconButton icon={<Time />} color="violet" 
                    appearance="primary" style={ButtonStyle} />
                </Whisper>

                <Whisper followCursor speaker={<Tooltip>Difficulty</Tooltip>}>
                  <IconButton icon={<Rate />} color="yellow" appearance="primary" style={ButtonStyle}
                    onClick={()=> {setShowDM(true); console.log("Add Icon Pressed")}} />
                </Whisper>
                
                <Whisper followCursor speaker={<Tooltip>Task Type</Tooltip>}>
                  <IconButton icon={<Tag />} color="blue" appearance="primary" style={ButtonStyle}
                    onClick={()=> {setShowTTM(true); console.log("Add Icon Pressed")}} />
                </Whisper>

                <Button appearance="primary" color="orange" size="lg"
                  style={{float: 'right'}}>ADD</Button>

                <DescriptionModal
                  showDeM={showDeM}
                  setShowDeM={setShowDeM}
                />
                <DifficultyModal
                  showDM={showDM}
                  setShowDM={setShowDM}
                />
                <TaskTypeModal
                  showTTM={showTTM}
                  setShowTTM={setShowTTM}
                />
              </div>
          </ul>
        </div>
        <div className="TaskList">
          <Accordion className="TaskListContainer" allowMultipleExpanded allowZeroExpanded="true">
            <AccordionItem className="TaskTypeContainer">
                <AccordionItemHeading>
                    <AccordionItemButton className="TaskTypeHeader" style={{backgroundColor: '#BD3838'}}>
                        Fitness
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="TaskTypeList">
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #1</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer">
                <AccordionItemHeading>
                    <AccordionItemButton className="TaskTypeHeader" style={{backgroundColor: '#8238BD'}}>
                        School
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="TaskTypeList">
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #1</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer">
                <AccordionItemHeading>
                    <AccordionItemButton className="TaskTypeHeader" style={{backgroundColor: '#38BDA5'}}>
                        Chores
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="TaskTypeList">
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #1</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer">
                <AccordionItemHeading>
                    <AccordionItemButton className="TaskTypeHeader" style={{backgroundColor: '#BABD38'}}>
                        Health
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="TaskTypeList">
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #1</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer">
                <AccordionItemHeading>
                    <AccordionItemButton className="TaskTypeHeader" style={{backgroundColor: '#BD3898'}}>
                        Social
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="TaskTypeList">
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #1</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer">
                <AccordionItemHeading>
                    <AccordionItemButton className="TaskTypeHeader" style={{backgroundColor: '#BD7838'}}>
                        Work
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="TaskTypeList">
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #1</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-end', display: showButtons ? 'block' : 'none'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
      </div>
      <div className="RightColumn">
        <div className="TaskInfo">
          [TaskInfo Placeholder]
        </div>
        <div className="TaskArchive">
          [TaskArchive Placeholder]
        </div>
      </div>
    </div>
  )
}
