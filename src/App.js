import './App.css';
import image from './todolist.jpg';
import imageTwo from './study.jpg';
import { MyList } from './MyList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={ image } width="150px" alt="list"/>
      </div>
      <div className="container">
        <h1>My List to Do</h1>
      </div>

      <MyList/>
      <div className="container">
        <img src={ imageTwo } width="150px" alt="studying"/>      
      </div>
      </div>
  );
}

export default App;
