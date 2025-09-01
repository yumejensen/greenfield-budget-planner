import React from "react"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Dashboard(){

  return (
    <div>
      <h2>Welcome to your travel budget planner!</h2>
      <Link to="/itineraries">
        <Button variant="primary" className="mt-3">
          View My Itineraries
        </Button>
      </Link>
    </div>
  )
}

export default Dashboard;
