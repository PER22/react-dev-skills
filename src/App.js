import { useState } from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm'
import './App.css';

function App() {
  const [skills, setSkills] = useState([
    {title: "Components", level: "5"},
    {title: "Props", level: "5"},
    {title: "State", level: "4"},
    {title: "Refs", level: "3"},
    {title: "Effects", level: "1"},
    {title: "Routing", level: "1"},
    {title: "API Calls", level: "2"},
  ])
  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill])
  }
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr/>
      <NewSkillForm addSkill={addSkill}/>
    </div>
  );
}

export default App;
