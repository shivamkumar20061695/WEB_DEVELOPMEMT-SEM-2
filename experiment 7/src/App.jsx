import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



const Student = ({ name, course, marks }) => {
  return (
    <div className="student-card">
      <div className="student-name">{name}</div>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  );
};

const App = () => {
  const students = [
    { name: 'Rahul Sharma', course: 'Computer Science', marks: 85 },
    { name: 'Anita Verma', course: 'Information Technology', marks: 92 },
    { name: 'Rohan Gupta', course: 'Electronics', marks: 78 }
  ];

  return (
    <div className="dashboard">
      <h1>Student Information</h1>

      <div className="students-container">
        {students.map((s, i) => (
          <Student key={i} {...s} />
        ))}
      </div>
    </div>
  );
};

export default App
