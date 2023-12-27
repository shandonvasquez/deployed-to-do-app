import { useState } from 'react';

const Modal = ({ mode, setShowModal }) => {
  const defaultMode = 'create'; // Renamed the variable 'mode'

  const editMode = mode === 'edit' ? true : false;

  const [data, setData] = useState({
    user_email: '',
    title: '', // Fixed typo in 'title'
    progress: '',
    date: editMode ? '' : new Date(),
  });

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
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
