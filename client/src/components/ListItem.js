import { useState } from 'react';
import TickIcon from './TickIcon';
import Modal from './Modal';
import ProgressBar from './ProgressBar';


const ListItem =({task, getData}) => {
  const [showModal, setShowModal] = useState(false);

const deleteItem = async () => {
  try{
    await fetch(`http://localhost:8000/todos/${task.id}`,{
      if (response.status === 200){
        console.log('success')
        getData()
    }
    } catch(err){
      console.log(err)
    }
  }
    

    return (
   <li className="list-item">

    <div className="info-container">
      <TickIcon/>
      <p className="task-title">{task.title}</p>
      <ProgressBar/>
    </div>
    <div className="button-container">
      <button className="edit" onClick={() => setShowModal(true)} >EDIT</button>
      <button className="delete" onClick={deleteItem}>DELETE</button>
    </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task}/>}
   </li>
  
    )
    }
  
  export default ListItem;