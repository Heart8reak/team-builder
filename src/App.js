import React, { useState } from 'react';
import ReactDom from "react-dom"
import Team from "./components/Team";
import TeamForm from "./components/TeamForm";
import './App.css';

function App() {

  const [members, setMember] = useState([

  ])

  const addNewTeam = member => {

    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    const newTeamCollection = [...members, newMember];

    setMember(newTeamCollection);
  };

  return (
    <div className="App">
      <h1>My Awesome Team 2019</h1>
      <TeamForm addNewTeam={addNewTeam} />
      <Team members={members} />
    </div>
  );
}

export default App;
