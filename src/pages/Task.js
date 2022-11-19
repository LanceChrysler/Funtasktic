import React from 'react';

export default function Task() {
  
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
          [TaskLists Placeholder]
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
