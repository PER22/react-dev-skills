import { useState } from "react";
import './NewSkillForm.css'
export default function NewSkillForm({addSkill}){
    const [newSkill, setNewSkill] = useState(
        {   
            title: "",
            level: ""
        }
    )
    function handleChange(event){
        setNewSkill(
            {
                ...newSkill,
                [event.target.name]: event.target.value
            }    
        )
    }
    function handleAddSkill(event){
        event.preventDefault();
        addSkill(newSkill);
        setNewSkill({title: "", level: ""});

    }

    return (<>
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            <input type="text" name="title" value={newSkill.title} onChange={handleChange}></input>
            <select name="level" value={newSkill.level} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">Add Skill</button>

        </form>
    
    
    
    </>);


}