import './Person.css'
const Person = (props) => {
    return <div className="person">
        <p onClick={props.click}>I am <b>{props.name}</b> and my age is <b>{props.age}</b> {props.children}</p>
        <input type="text" onChange={props.updateMyName} value={props.name}/>
    </div>
}

export default Person;
