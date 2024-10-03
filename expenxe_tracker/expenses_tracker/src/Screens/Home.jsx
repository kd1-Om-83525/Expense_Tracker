import React from 'react';
import '../Css/Home.css';
import { Link } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Expense Tracker</h1>
        <p>Keep track of your daily expenses and manage your budget effectively.</p>
        <div>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
      </header>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Add, view, edit, and delete expenses easily</li>
          <li>Track your spending habits</li>
          <li>Generate monthly and yearly reports</li>
          <li>Responsive design for both desktop and mobile</li>
        </ul>
      </section>

      <section className="about">
        <h2>About the App</h2>
        <p>
          The Expense Tracker helps you monitor your daily expenses by providing an easy-to-use platform where
          you can log your purchases and view your total spending. Whether it's groceries, entertainment, or
          travel, you can manage all your transactions in one place.
        </p>
      </section>

      <footer className="footer">
        <p>Developed by Om Dhavale</p>
      </footer>
    </div>
  );
};

export default Home;
