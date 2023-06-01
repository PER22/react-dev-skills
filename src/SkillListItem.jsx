import './SkillListItem.css';
export default function SkillListItem({skill}){
    return (
    <>
        <li className='SkillListItem'>Level {skill.level}: {skill.title}</li>
    </>
    );

}