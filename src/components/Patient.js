//import "./Task.css";

export default function Patient(props) {
   
    return (
        <>
            <li> {props.LastName} {props.Name} {props.Patronymic} - {props.Diagnosis}
                <button type='button' onClick={() => props.ptnDelete(props.id)}>Delete</button>
                
            </li>
            
        </>
    )
}