import React, { useState } from 'react';
import "./pages.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';


export default function Task() {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <div className="TaskPage">
      <div className="LeftColumn">
        <div className="AddTaskForm">
          <ul>
            <li>
              <input type="text" className="AddTask" placeholder="Add Task" />
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <div className="TaskList">
          <Accordion style={{width: '100%'}} allowMultipleExpanded allowZeroExpanded="true">
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
