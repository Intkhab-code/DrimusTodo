import { useEffect, useState } from 'react';
import './Main.css';
import logo from './logo.webp';



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
      if (e.status === 'option1') {
        return testDAta.push(e)
      } else if (e.status === 'option2') {
        return progressData.push(e)
      } else {
        return doneData.push(e)
      }
    })

    setTodo(testDAta)
    setProgress(progressData)
    setDone(doneData)
  }, [])

  console.log(todo)
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
                <div key={i} className='todo-task'><p>{e.task}</p>
                </div>
              )
            }) : ''}
          </div>
          <div><h3>In progress</h3>
            <hr className='todo-hr' />
            {progress && progress.length > 0 ? progress.map((e, i) => {
              return (
                <div key={i} className='todo-task'><p>{e.task}
                </p>
                </div>
              )
            }) : ''}
          </div>
          <div><h3>Tasks done</h3>
            <hr className='todo-hr' />
            {done && done.length > 0 ? done.map((e, i) => {
              return (
                <div key={i} className='todo-task'>
                  <p>{e.task}</p>
                </div>
              )
            }) : ''}
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default Main