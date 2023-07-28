import {v4 as uuid4} from "uuid"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { BrowserRouter as Router,Route,Routes  } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
function App() {
  const [task, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem("new")) || []
  });
  const deleteTask = (id)=>{
    if(window.confirm('Are want to delete this ?')){
    setTask(task.filter((item) => id !== item.id))
  }
}
const addTask = ( newTask )=>{
    newTask.id = uuid4();
    setTask([newTask, ...task]);
}
useEffect(()=>{
window.localStorage.setItem("new",JSON.stringify(task))
},[task]);


  return (
    <>
    <Router>
      <Header />
      <div className="container">
      <Routes>
      <Route exact path = '/' element = {
        <>
        <TaskForm handleAdd = {addTask}/>
        <TaskList task = {task} handleDelete={deleteTask}/>
        </>
      }/>
      <Route path = '/about' element={<AboutPage />} />
      </Routes>
      <AboutIconLink />
      </div>
      </Router>
    </>
  )
}

export default App
