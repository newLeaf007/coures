import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from "./components/Courses";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";

function App() {
  return (
    <div >
      
      
      <Home/>
      <AllCourses/>
      <AddCourse/>
    </div>
  );
}

export default App;
