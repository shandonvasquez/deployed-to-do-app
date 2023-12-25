import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import { useEffect, useState } from 'react';
import TickIcon from './components/TickIcon';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const userEmail = 'shandon1915211@gmail.com';
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  }
  

  useEffect(() => {
    getData();
  }, []);

  // Sort tasks only when tasks have been fetched and are not null
  const sortedTasks = tasks.length > 0 ? [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date)) : [];

  return (
    <div className="app">
      <ListHeader ListName={"Holiday tick list"} />
      {sortedTasks.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;

