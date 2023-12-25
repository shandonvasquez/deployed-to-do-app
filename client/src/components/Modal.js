
import {useState} from 'react';

const Modal =() => {
const mode = 'create';
const editMode = mode === "edit" ? true : false;

const [data, setData] = useState({
  user_email: "",
  tittles: "",
  progress: "",
  date: editMode ? "" : new Date()
})
 

  const handleChange = (e) => {
    console.log("changing" + e );
    const {name, value} = e.target; 

    setData(data => ({
      ...data,
      [name]: value
    }))
  }
    return (
   <div className="overlay">     
    <div className="modal">
      <div className="form-tittle-container">
        <h3>Let's {mode} create you task</h3>
        <button>X</button>
      </div>
      <form>
        <input
        required
        maxlength={30}
        plasholder="Your task goes"
        name="title"
        value= {""}
        onChange={handleChange}
        />
        <br/>
        <label for="range">Drag to select your current progress</label>
        <input
        required
        type="range"
        id="range"
        min="0"
        max="100"
        name="progress"
        value= {""}
        onChange={handleChange}
        />
        <input className={mode} type="submit"/>

      </form>
      </div>
   </div>
    );
  }
  
  export default Modal;
