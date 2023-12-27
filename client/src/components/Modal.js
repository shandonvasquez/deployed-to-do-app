import { useState } from 'react';

const Modal = ({ mode, setShowModal, task }) => {
  const defaultMode = 'create'; // Renamed the variable 'mode'

  const editMode = mode === 'edit' ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : 'bob@test.com' , // Added 'user_email' field
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? '' : new Date(),
  })

  const postData = async () =>{
    try{
      const response = await fetch('http://localhost:8000/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      console.log(response)
    } catch(err){
     console.log(err) 
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {defaultMode} create your task</h3>
          <button onClick={() => setShowModal(false)}>x</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="range">Drag to select your current progress</label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input className={mode} type="submit" onClick={editMode ? '':postData}/>
        </form>
      </div>
    </div>
  );
};

export default Modal;
