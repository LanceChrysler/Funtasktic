import React, { useState } from 'react';
import { IconButton, Button, Tooltip, Whisper } from "rsuite"; // npm i rsuite --save
import { Detail, Calendar, Time, Rate, Tag } from '@rsuite/icons'; // npm install rsuite @rsuite/icons
import DescriptionModal from '../modals/Description_Modal';
import DeadlineModal from '../modals/Deadline_Modal';
import DifficultyModal from '../modals/Difficulty_Modal';
import TaskTypeModal from '../modals/Task_Type_Modal';
import TaskAddedSuccessfullyModal from '../modals/Task_Added_Successfully_Modal';
import "rsuite/dist/rsuite.min.css";
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

export default function Task() {
  const ButtonStyle = { margin: "0px 5px", left: "-5px"};
  const [showButtons, setShowButtons] = useState(false);
  const [showDeM, setShowDeM] = useState(false);
  const [showDLM, setShowDLM] = useState(false);
  const [showDM, setShowDM] = useState(false);
  const [showTTM, setShowTTM] = useState(false);
  const [showTASM, setShowTASM] = useState(false);

  return (
    <div className="TaskPage">
      <div className="LeftColumn">
        <div className="AddTaskForm">
          <ul>
            <li><input type="text" className="AddTask" placeholder="Add Task" /></li>
            <li>
            <div className="AddTaskButtons" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                  <Whisper followCursor speaker={<Tooltip>Description</Tooltip>}>
                    <IconButton icon={<Detail />} color="cyan" appearance="primary" style={ButtonStyle} 
                      onClick={()=> setShowDeM(true)} />
                  </Whisper>

                  <Whisper followCursor speaker={<Tooltip>Deadline</Tooltip>}>
                    <IconButton icon={<Calendar />} color="green" appearance="primary" style={ButtonStyle}
                      onClick={()=> setShowDLM(true)} />
                  </Whisper>
                  
                  <Whisper followCursor speaker={<Tooltip> </Tooltip>}>
                    <IconButton icon={<Time />} color="violet" appearance="primary" style={ButtonStyle} />
                  </Whisper>

                  <Whisper followCursor speaker={<Tooltip>Difficulty</Tooltip>}>
                    <IconButton icon={<Rate />} color="yellow" appearance="primary" style={ButtonStyle}
                      onClick={()=> setShowDM(true)} />
                  </Whisper>
                  
                  <Whisper followCursor speaker={<Tooltip>Task Type</Tooltip>}>
                    <IconButton icon={<Tag />} color="blue" appearance="primary" style={ButtonStyle}
                      onClick={()=> setShowTTM(true)} />
                  </Whisper>
                </div>
                <div>
                  <Button appearance="primary" color="orange" size="lg" onClick={()=> setShowTASM(true)} >ADD</Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="TaskList">
          <Accordion className="TaskListContainer" allowMultipleExpanded allowZeroExpanded="true">
            <AccordionItem className="TaskTypeContainer" style={{border: '2px solid #BD3838'}}>
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
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer" style={{border: '2px solid #8238BD'}}>
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
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer" style={{border: '2px solid #38BDA5'}}>
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
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer" style={{border: '2px solid #BABD38'}}>
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
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer" style={{border: '2px solid #BD3898'}}>
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
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="TaskTypeContainer" style={{border: '2px solid #BD7838'}}>
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
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
                        <MdEdit size="30" />
                        <RiDeleteBinLine size="30" />
                      </div>
                    </div>
                    <div className="TaskTypeListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={()=> {showButtons ? setShowButtons(false) : setShowButtons(true)}}>
                        <label>Task #2</label>
                      </div>
                      <div style={{display: showButtons ? 'flex' : 'none', justifyContent: 'flex-end'}}>
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
          INFO WILL BE DISPLAYED HERE
        </div>
        <div className="TaskArchive">
          <Accordion className="TaskArchiveContainer" allowMultipleExpanded allowZeroExpanded="true">
            <AccordionItem className="TaskArchiveListContainer">
                <AccordionItemHeading>
                    <AccordionItemButton className="TaskArchiveHeader" style={{backgroundColor: 'gray'}}>
                        Archive
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="TaskArchiveList">
                    <div className="TaskArchiveListItem">
                      <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <label>Task #1</label>
                        <label>Task #2</label>
                      </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <DescriptionModal
        showDeM={showDeM}
        setShowDeM={setShowDeM}
      />
      <DeadlineModal
        showDLM={showDLM}
        setShowDLM={setShowDLM}
      />
      <DifficultyModal
        showDM={showDM}
        setShowDM={setShowDM}
      />
      <TaskTypeModal
        showTTM={showTTM}
        setShowTTM={setShowTTM}
      />
      <TaskAddedSuccessfullyModal
        showTASM={showTASM}
        setShowTASM={setShowTASM}
      />
    </div>
  )
}
