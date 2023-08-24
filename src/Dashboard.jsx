import React from 'react';
import './css/Dashboard.css';

function Dashboard() {
  return (
    <div className="parallax">
      <div className="input-container">
        <h2>Dashboard</h2>
        <form>
          <div className="form-group">
            <label htmlFor="main-memory">Main Memory:</label>
            <input type="text" id="main-memory" name="main-memory" />
          </div>
          <div className="form-group">
            <label htmlFor="cache">Cache:</label>
            <input type="text" id="cache" name="cache" />
          </div>
          <div className="form-group">
            <label htmlFor="blocks">Blocks:</label>
            <input type="text" id="blocks" name="blocks" />
          </div>
          <div className="form-group">
            <label htmlFor="list-of-numbers">List of Numbers:</label>
            <input type="text" id="list-of-numbers" name="list-of-numbers" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;