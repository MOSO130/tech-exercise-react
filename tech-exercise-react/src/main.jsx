import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const courses = [
  { id: 1, name: 'Software Engineering', status: 'In progress' },
  { id: 2, name: 'Framework Setup', status: 'Installed' },
  { id: 3, name: 'Tech Exercise', status: 'Partially working' }
];

function App() {
  return (
    <main className="container">
      <section className="card">
        <h1>Tech Exercise React App</h1>
        <p>
          This is a simple React application made to show that the framework is installed and running.
        </p>

        <h2>Hard-coded Course Data</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <strong>{course.name}</strong> - {course.status}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
