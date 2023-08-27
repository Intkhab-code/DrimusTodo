import './CreateTaskpopup.css';
import './PopupDeleteTask.css';
import React, { useState } from 'react';

function PopupDeleteTask({ onClose}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [textValue, setTextValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const deleteTask = () => {
    // const taskData = {
    //   task: textValue,
    //   status: selectedOption,
    //   date: selectedDate,
    // };

    // saveToLocalStorage(taskData); // Save to local storage
    // onClose();
    window.location.reload();
  };


//   const saveToLocalStorage = (taskData) => {
//     const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const updatedTasks = [...existingTasks, taskData];
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//   };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <p className='popup-header'>Edit the Task for the team</p>
        <hr />
        <p className='task-description'>Add task description*</p>
        <textarea placeholder='feed the task guidelines and information'
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <br />
        <p className='select-task'>Select Task Status*</p>
        <div className="options">
          <label>
            <input
              type="radio"
              value="To do"
              checked={selectedOption === 'To do'}
              onChange={handleOptionChange}
            />
            To do
          </label>
          <label>
            <input
               type="radio"
               value="In progress"
               checked={selectedOption === 'In progress'}
               onChange={handleOptionChange}
            />
            In progress
          </label>
          <label>
            <input
               type="radio"
               value="Task done"
               checked={selectedOption === 'Task done'}
               onChange={handleOptionChange}
            />
            Task done
          </label>
          {/* ... other radio buttons ... */}
        </div>
        <br/>
        <label>
          <input className='date'
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button onClick={deleteTask} className='delete-button'>Delete task</button>
        <button className='update-button'>update task</button>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}

export default PopupDeleteTask