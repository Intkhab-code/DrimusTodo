import { useEffect, useState } from 'react';
import './Main.css';
import logo from './logo.webp';
import Popup from "./PopupDeleteTask";



function Main() {
  const [todo, setTodo] = useState([])
  const [progress, setProgress] = useState([])
  const [done, setDone] = useState([])
  let data = localStorage.getItem('tasks')
  let test = JSON.parse(data)

  let testDAta = []
  let progressData = []
  let doneData = []
  useEffect(() => {
    test && test.map((e, i) => {
      if (e.status === 'To do' && e.status!=='') {
        return testDAta.push(e)
      } else if (e.status === 'In progress' && e.status!=='') {
        return progressData.push(e)
      } else if(e.status === 'Task done' && e.status!==''){
        return doneData.push(e)
      }
    })
    
    setTodo(testDAta)
    setProgress(progressData)
    setDone(doneData)
  }, [])


  // popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <div className='main'>
        <div className='main-header'>
          <div className='company-logo' style={{ backgroundImage: `url(${logo})` }}></div>
          <div><hr className='main-hr' /></div>
          <div className='main-header-text'><p>Website Development Tracker</p></div>
        </div>
        <div className='box'>
          <div><h3>Tasks to do</h3>
            <hr className='todo-hr' />
            {todo && todo.length > 0 ? todo.map((e, i) => {
              return (
                <div key={i} className='todo-task' onClick={togglePopup}><p>{e.task}</p>
                <p className='due-date'>Due date: {e.date}</p>
                </div>
              )
            }) : ''}
          </div>
          <div><h3>In progress</h3>
            <hr className='todo-hr' />
            {progress && progress.length > 0 ? progress.map((e, i) => {
              return (
                <div key={i} className='todo-task' onClick={togglePopup}><p>{e.task}
                </p>
                <p className='due-date'>Due date: {e.date}</p>
                </div>
              )
            }) : ''}
          </div>
          <div><h3>Tasks done</h3>
            <hr className='todo-hr' />
            {done && done.length > 0 ? done.map((e, i) => {
              return (
                <div key={i} className='todo-task' onClick={togglePopup}>
                  <p>{e.task}</p>
                  <p className='due-date'>Due date: {e.date}</p>
                </div>
              )
            }) : ''}
          </div>
        </div>
      </div>
      <div>
      </div>
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </>
  )
}

export default Main