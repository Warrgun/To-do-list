import React, {useState} from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const newTaskHandler = (e) => setNewTask(e.target.value);
    const addTask = () => newTask.trim().length !==0? setTasks(t => [...t,newTask]) & setNewTask(""):alert("Empty string");
    const deleteTask = (i) => setTasks(t =>t.filter((_,index) => i !==index));
    const moveUp = (i) => {
        if(i>0){
            const updatedTaks = [...tasks];
            [updatedTaks[i],updatedTaks[i-1]]= [updatedTaks[i-1],updatedTaks[i]]
            setTasks(updatedTaks)
        }
    }
    const moveDown = (i) =>{
        if(i<tasks.length-1){
            const updatedTaks = [...tasks];
            [updatedTaks[i],updatedTaks[i+1]]= [updatedTaks[i+1],updatedTaks[i]]
            setTasks(updatedTaks)
        }  
    }

    const tasksMap= tasks.map((e,i) =><li key={i}>
        <span className="text">
            {e}
        </span>
        <button className="del-button" onClick={() => deleteTask(i)}>Delete</button>
        <button className="move-button" onClick={() => moveUp(i)}>👆</button>
        <button className="move-button" onClick={() => moveDown(i)}>👇</button>
    </li>);


    return(
        <div className="container">
            <h1>To-Do-List</h1>
            <input type="text" placeholder="Enter a task..." name="newTask" id="task" value={newTask} onChange={newTaskHandler}/>
            <button className="add-button" onClick={addTask}>Add</button>
            <ol>
                {tasksMap}
            </ol>
        </div>
    );
}

export default ToDoList