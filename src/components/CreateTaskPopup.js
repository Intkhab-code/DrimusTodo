import './CreateTaskpopup.css';
import React, { useState } from 'react';
function CreateTaskPopup({ onClose}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [textValue, setTextValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSave = () => {
    const taskData = {
      task: textValue,
      status: selectedOption,
      date: selectedDate,
    };

    saveToLocalStorage(taskData); // Save to local storage
    onClose();
    window.location.reload();
  };


  const saveToLocalStorage = (taskData) => {
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = [...existingTasks, taskData];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <p className='popup-header'>Create a Task for the team</p>
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
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
            Option 1
          </label>
          <label>
            <input
               type="radio"
               value="option2"
               checked={selectedOption === 'option2'}
               onChange={handleOptionChange}
            />
            Option 2
          </label>
          <label>
            <input
               type="radio"
               value="option3"
               checked={selectedOption === 'option3'}
               onChange={handleOptionChange}
            />
            Option 3
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
        <button onClick={handleSave} className='taskSave-button'>Create task</button>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}

export default CreateTaskPopup;
